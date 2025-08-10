import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TutorialsTab = ({ tutorials }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = [
    { id: 'all', label: 'All Categories', count: tutorials?.length },
    { id: 'getting-started', label: 'Getting Started', count: 8 },
    { id: 'advanced', label: 'Advanced Features', count: 12 },
    { id: 'integrations', label: 'Integrations', count: 6 },
    { id: 'workflows', label: 'Workflows', count: 9 }
  ];

  const difficulties = [
    { id: 'all', label: 'All Levels' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-success/10 text-success';
      case 'intermediate':
        return 'bg-warning/10 text-warning';
      case 'advanced':
        return 'bg-error/10 text-error';
      default:
        return 'bg-muted text-text-secondary';
    }
  };

  const formatDuration = (minutes) => {
    if (minutes < 60) {
      return `${minutes}m`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Tutorials Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-primary">Tutorials & Guides</h2>
              <p className="text-text-secondary">
                Step-by-step guides to master every feature
              </p>
            </div>
            <Button
              variant="outline"
              iconName="BookOpen"
              iconPosition="left"
            >
              Request Tutorial
            </Button>
          </div>

          {/* Featured Tutorial */}
          <div className="bg-gradient-accent rounded-xl p-8 text-white">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={16} className="text-warning fill-current" />
                  <span className="text-sm font-medium">Featured Tutorial</span>
                </div>
                <h3 className="text-2xl font-bold">Complete Beginner's Guide</h3>
                <p className="text-white/90">
                  Learn everything you need to know to get started with this powerful AI tool. 
                  Perfect for newcomers who want to unlock its full potential.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>45 minutes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={14} />
                    <span>12,450 completed</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="BarChart" size={14} />
                    <span>Beginner</span>
                  </div>
                </div>
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Start Tutorial
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-video bg-white/10 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
                    alt="Featured tutorial preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/20 backdrop-blur-soft rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-250">
                      <Icon name="Play" size={24} className="text-white ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tutorials Grid */}
          <div className="grid gap-6">
            {tutorials?.map((tutorial) => (
              <div key={tutorial?.id} className="bg-surface rounded-xl p-6 hover:shadow-soft transition-shadow duration-250">
                <div className="grid lg:grid-cols-4 gap-6 items-start">
                  {/* Thumbnail */}
                  <div className="relative">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <Image
                        src={tutorial?.thumbnail}
                        alt={tutorial?.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-250">
                        <button className="w-12 h-12 bg-black/50 backdrop-blur-soft rounded-full flex items-center justify-center">
                          <Icon name="Play" size={16} className="text-white ml-0.5" />
                        </button>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {formatDuration(tutorial?.duration)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-primary hover:text-accent transition-colors duration-250 cursor-pointer">
                          {tutorial?.title}
                        </h3>
                        <p className="text-text-secondary">{tutorial?.description}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial?.difficulty)}`}>
                        {tutorial?.difficulty}
                      </span>
                    </div>

                    {/* Tutorial Stats */}
                    <div className="flex items-center space-x-6 text-sm text-text-secondary">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} />
                        <span>{formatDuration(tutorial?.duration)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={14} />
                        <span>{tutorial?.completedCount?.toLocaleString()} completed</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={14} className="text-warning fill-current" />
                        <span>{tutorial?.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={14} />
                        <span>{tutorial?.commentsCount} comments</span>
                      </div>
                    </div>

                    {/* Tutorial Steps Preview */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-primary">What you'll learn:</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {tutorial?.learningPoints?.slice(0, 4)?.map((point, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                            <span className="text-sm text-text-secondary">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-3">
                      <Button variant="default" size="sm">
                        Start Tutorial
                      </Button>
                      <Button variant="ghost" size="sm" iconName="Bookmark">
                        Save
                      </Button>
                      <Button variant="ghost" size="sm" iconName="Share">
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Tutorials
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Categories Filter */}
          <div className="bg-surface rounded-xl p-6">
            <h3 className="font-semibold text-primary mb-4">Categories</h3>
            <div className="space-y-2">
              {categories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => setSelectedCategory(category?.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors duration-250 ${
                    selectedCategory === category?.id
                      ? 'bg-accent/10 text-accent' :'text-text-secondary hover:text-text-primary hover:bg-muted'
                  }`}
                >
                  <span>{category?.label}</span>
                  <span className="text-xs">{category?.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div className="bg-surface rounded-xl p-6">
            <h3 className="font-semibold text-primary mb-4">Difficulty Level</h3>
            <div className="space-y-2">
              {difficulties?.map((difficulty) => (
                <button
                  key={difficulty?.id}
                  onClick={() => setSelectedDifficulty(difficulty?.id)}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors duration-250 ${
                    selectedDifficulty === difficulty?.id
                      ? 'bg-accent/10 text-accent' :'text-text-secondary hover:text-text-primary hover:bg-muted'
                  }`}
                >
                  <span>{difficulty?.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Learning Path */}
          <div className="bg-surface rounded-xl p-6">
            <h3 className="font-semibold text-primary mb-4">Recommended Learning Path</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <Icon name="Check" size={14} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-primary">Getting Started</div>
                  <div className="text-xs text-text-secondary">Completed</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-primary">Basic Features</div>
                  <div className="text-xs text-text-secondary">In Progress</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-text-secondary text-xs font-bold">3</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-text-secondary">Advanced Workflows</div>
                  <div className="text-xs text-text-secondary">Locked</div>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Tutorials */}
          <div className="bg-surface rounded-xl p-6">
            <h3 className="font-semibold text-primary mb-4">Most Popular</h3>
            <div className="space-y-4">
              {tutorials?.slice(0, 3)?.map((tutorial, index) => (
                <div key={tutorial?.id} className="flex items-start space-x-3">
                  <div className="w-12 h-8 bg-muted rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={tutorial?.thumbnail}
                      alt={tutorial?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-primary line-clamp-2 mb-1">
                      {tutorial?.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-xs text-text-secondary">
                      <span>{formatDuration(tutorial?.duration)}</span>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={10} className="text-warning fill-current" />
                        <span>{tutorial?.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialsTab;