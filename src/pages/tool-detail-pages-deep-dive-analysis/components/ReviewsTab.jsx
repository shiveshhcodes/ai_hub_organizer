import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ReviewsTab = ({ reviews, overallRating, ratingBreakdown }) => {
  const [sortBy, setSortBy] = useState('newest');
  const [filterBy, setFilterBy] = useState('all');
  const [showWriteReview, setShowWriteReview] = useState(false);

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'highest', label: 'Highest Rating' },
    { value: 'lowest', label: 'Lowest Rating' },
    { value: 'helpful', label: 'Most Helpful' }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Reviews' },
    { value: '5', label: '5 Stars' },
    { value: '4', label: '4 Stars' },
    { value: '3', label: '3 Stars' },
    { value: '2', label: '2 Stars' },
    { value: '1', label: '1 Star' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={`${
          index < rating ? 'text-warning fill-current' : 'text-border'
        }`}
      />
    ));
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Reviews Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Reviews Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-primary">User Reviews</h2>
              <p className="text-text-secondary">
                {reviews?.length} verified reviews from real users
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowWriteReview(true)}
              iconName="PenTool"
              iconPosition="left"
            >
              Write a Review
            </Button>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Select
              placeholder="Sort by"
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
              className="sm:w-48"
            />
            <Select
              placeholder="Filter by rating"
              options={filterOptions}
              value={filterBy}
              onChange={setFilterBy}
              className="sm:w-48"
            />
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews?.map((review) => (
              <div key={review?.id} className="bg-surface rounded-xl p-6 hover:shadow-soft transition-shadow duration-250">
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={review?.user?.avatar}
                      alt={review?.user?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-primary">{review?.user?.name}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-text-secondary">{review?.user?.role}</span>
                        {review?.user?.verified && (
                          <div className="flex items-center space-x-1">
                            <Icon name="CheckCircle" size={14} className="text-success" />
                            <span className="text-xs text-success">Verified</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {renderStars(review?.rating)}
                    </div>
                    <span className="text-sm text-text-secondary">
                      {formatDate(review?.date)}
                    </span>
                  </div>
                </div>

                {/* Review Content */}
                <div className="space-y-4">
                  <h5 className="font-semibold text-primary">{review?.title}</h5>
                  <p className="text-text-secondary leading-relaxed">{review?.content}</p>

                  {/* Review Categories */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(review?.categories)?.map(([category, rating]) => (
                      <div key={category} className="text-center">
                        <div className="text-sm font-medium text-primary capitalize mb-1">
                          {category?.replace(/([A-Z])/g, ' $1')?.trim()}
                        </div>
                        <div className="flex justify-center space-x-1">
                          {renderStars(rating)}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Use Case Tags */}
                  <div className="flex flex-wrap gap-2">
                    {review?.useCases?.map((useCase, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>

                  {/* Review Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors duration-250">
                        <Icon name="ThumbsUp" size={16} />
                        <span className="text-sm">Helpful ({review?.helpfulCount})</span>
                      </button>
                      <button className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors duration-250">
                        <Icon name="MessageCircle" size={16} />
                        <span className="text-sm">Reply</span>
                      </button>
                    </div>
                    <button className="text-text-secondary hover:text-text-primary transition-colors duration-250">
                      <Icon name="Flag" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Reviews
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Overall Rating */}
          <div className="bg-surface rounded-xl p-6">
            <h3 className="font-semibold text-primary mb-4">Overall Rating</h3>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-primary mb-2">{overallRating}</div>
              <div className="flex justify-center space-x-1 mb-2">
                {renderStars(Math.round(overallRating))}
              </div>
              <p className="text-sm text-text-secondary">Based on {reviews?.length} reviews</p>
            </div>

            {/* Rating Breakdown */}
            <div className="space-y-3">
              {ratingBreakdown?.map((breakdown, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-primary w-6">
                    {breakdown?.stars}
                  </span>
                  <Icon name="Star" size={14} className="text-warning fill-current" />
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div
                      className="bg-warning rounded-full h-2 transition-all duration-500"
                      style={{ width: `${breakdown?.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-text-secondary w-12 text-right">
                    {breakdown?.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Review Categories Average */}
          <div className="bg-surface rounded-xl p-6">
            <h3 className="font-semibold text-primary mb-4">Category Ratings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">Ease of Use</span>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {renderStars(4)}
                  </div>
                  <span className="text-sm font-medium">4.2</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">Value for Money</span>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {renderStars(4)}
                  </div>
                  <span className="text-sm font-medium">4.1</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">Customer Support</span>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {renderStars(4)}
                  </div>
                  <span className="text-sm font-medium">3.9</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">Features</span>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {renderStars(5)}
                  </div>
                  <span className="text-sm font-medium">4.5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Review Distribution */}
          <div className="bg-surface rounded-xl p-6">
            <h3 className="font-semibold text-primary mb-4">Review Distribution</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Content Creators</span>
                <span className="font-medium text-primary">45%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Marketing Teams</span>
                <span className="font-medium text-primary">28%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Developers</span>
                <span className="font-medium text-primary">18%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Other</span>
                <span className="font-medium text-primary">9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsTab;