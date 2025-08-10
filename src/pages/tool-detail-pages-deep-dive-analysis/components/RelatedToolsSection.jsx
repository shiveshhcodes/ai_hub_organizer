import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RelatedToolsSection = ({ relatedTools, currentTool }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={14}
        className={`${
          index < rating ? 'text-warning fill-current' : 'text-border'
        }`}
      />
    ));
  };

  const getRelationshipColor = (relationship) => {
    switch (relationship) {
      case 'complementary':
        return 'bg-success/10 text-success';
      case 'alternative':
        return 'bg-warning/10 text-warning';
      case 'integration':
        return 'bg-accent/10 text-accent';
      default:
        return 'bg-muted text-text-secondary';
    }
  };

  const getRelationshipIcon = (relationship) => {
    switch (relationship) {
      case 'complementary':
        return 'Plus';
      case 'alternative':
        return 'ArrowLeftRight';
      case 'integration':
        return 'Link';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Related AI Tools</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover complementary tools and alternatives that work well with {currentTool?.name}
          </p>
        </div>

        {/* Tools by Category */}
        <div className="space-y-12">
          {/* Complementary Tools */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <Icon name="Plus" size={20} className="text-success" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">Complementary Tools</h3>
                <p className="text-text-secondary">Tools that work great alongside {currentTool?.name}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTools?.filter(tool => tool?.relationship === 'complementary')?.map((tool) => (
                  <div key={tool?.id} className="bg-surface rounded-xl p-6 hover:shadow-soft transition-shadow duration-250">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center shadow-soft">
                          <Image
                            src={tool?.logo}
                            alt={`${tool?.name} logo`}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">{tool?.name}</h4>
                          <p className="text-sm text-text-secondary">{tool?.category}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRelationshipColor(tool?.relationship)}`}>
                        <Icon name={getRelationshipIcon(tool?.relationship)} size={12} className="inline mr-1" />
                        Complementary
                      </span>
                    </div>

                    <p className="text-text-secondary text-sm mb-4">{tool?.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {renderStars(tool?.rating)}
                        </div>
                        <span className="text-sm text-text-secondary">({tool?.reviewCount})</span>
                      </div>
                      <div className="text-sm font-medium text-primary">{tool?.pricing}</div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-sm">
                        <span className="font-medium text-primary">Works well for: </span>
                        <span className="text-text-secondary">{tool?.synergy}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                        <button className="text-text-secondary hover:text-text-primary transition-colors duration-250">
                          <Icon name="Bookmark" size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Integration Partners */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="Link" size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">Integration Partners</h3>
                <p className="text-text-secondary">Tools that integrate directly with {currentTool?.name}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedTools?.filter(tool => tool?.relationship === 'integration')?.map((tool) => (
                  <div key={tool?.id} className="bg-surface rounded-xl p-4 hover:shadow-soft transition-shadow duration-250">
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-background rounded-xl flex items-center justify-center mx-auto shadow-soft">
                        <Image
                          src={tool?.logo}
                          alt={`${tool?.name} logo`}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">{tool?.name}</h4>
                        <p className="text-xs text-text-secondary">{tool?.category}</p>
                      </div>
                      <div className="flex items-center justify-center space-x-1">
                        <div className="flex space-x-1">
                          {renderStars(tool?.rating)}
                        </div>
                        <span className="text-xs text-text-secondary">({tool?.reviewCount})</span>
                      </div>
                      <Button variant="outline" size="sm" fullWidth>
                        View Integration
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Popular Alternatives */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                <Icon name="ArrowLeftRight" size={20} className="text-warning" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">Popular Alternatives</h3>
                <p className="text-text-secondary">Similar tools you might want to consider</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {relatedTools?.filter(tool => tool?.relationship === 'alternative')?.slice(0, 2)?.map((tool) => (
                  <div key={tool?.id} className="bg-surface rounded-xl p-6 hover:shadow-soft transition-shadow duration-250">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-background rounded-xl flex items-center justify-center shadow-soft">
                        <Image
                          src={tool?.logo}
                          alt={`${tool?.name} logo`}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-primary">{tool?.name}</h4>
                            <p className="text-sm text-text-secondary">{tool?.category}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRelationshipColor(tool?.relationship)}`}>
                            Alternative
                          </span>
                        </div>
                        
                        <p className="text-text-secondary text-sm">{tool?.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              {renderStars(tool?.rating)}
                            </div>
                            <span className="text-sm text-text-secondary">({tool?.reviewCount})</span>
                          </div>
                          <div className="text-sm font-medium text-primary">{tool?.pricing}</div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Button variant="outline" size="sm">
                            Compare
                          </Button>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* AI-Powered Recommendations */}
        <div className="mt-16 bg-gradient-accent rounded-xl p-8 text-white">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
              <Icon name="Brain" size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">AI-Powered Recommendations</h3>
              <p className="text-white/90 max-w-2xl mx-auto">
                Based on your usage patterns and similar users, our AI suggests these tools 
                that could enhance your workflow with {currentTool?.name}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Personalized Recommendations
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Explore Tool Categories
              </Button>
            </div>
          </div>
        </div>

        {/* Browse More Tools */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Discover More AI Tools
          </h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Explore our comprehensive directory of AI tools across different categories 
            and find the perfect solutions for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="bg-cta hover:bg-cta/90">
              Browse All Tools
            </Button>
            <Button variant="outline" size="lg">
              View by Category
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedToolsSection;