import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SuccessStoriesSection = ({ successStories }) => {
  const [selectedStory, setSelectedStory] = useState(null);

  const getImpactColor = (impact) => {
    if (impact?.includes('increase') || impact?.includes('improved') || impact?.includes('saved')) {
      return 'text-success';
    }
    if (impact?.includes('reduced') || impact?.includes('decreased')) {
      return 'text-warning';
    }
    return 'text-primary';
  };

  const formatMetric = (metric) => {
    if (metric?.includes('%')) return metric;
    if (metric?.includes('hours')) return metric;
    if (metric?.includes('$')) return metric;
    return metric;
  };

  return (
    <div className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Success Stories</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real users sharing their transformative experiences and measurable results
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {successStories?.map((story) => (
            <div 
              key={story?.id} 
              className="bg-background rounded-xl p-6 hover:shadow-elevated transition-all duration-250 cursor-pointer"
              onClick={() => setSelectedStory(story)}
            >
              {/* Story Header */}
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src={story?.user?.avatar}
                  alt={story?.user?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-primary">{story?.user?.name}</h3>
                  <p className="text-text-secondary">{story?.user?.role}</p>
                  <p className="text-sm text-text-secondary">{story?.user?.company}</p>
                </div>
              </div>

              {/* Story Preview */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">{story?.title}</h4>
                <p className="text-text-secondary line-clamp-3">{story?.summary}</p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {story?.keyMetrics?.slice(0, 2)?.map((metric, index) => (
                    <div key={index} className="text-center p-3 bg-surface rounded-lg">
                      <div className={`text-2xl font-bold ${getImpactColor(metric?.impact)}`}>
                        {formatMetric(metric?.value)}
                      </div>
                      <div className="text-sm text-text-secondary">{metric?.label}</div>
                    </div>
                  ))}
                </div>

                {/* Use Case Tags */}
                <div className="flex flex-wrap gap-2">
                  {story?.useCases?.slice(0, 2)?.map((useCase, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                    >
                      {useCase}
                    </span>
                  ))}
                  {story?.useCases?.length > 2 && (
                    <span className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full">
                      +{story?.useCases?.length - 2} more
                    </span>
                  )}
                </div>

                {/* Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="Calendar" size={14} />
                    <span>{story?.publishedDate}</span>
                  </div>
                  <Button variant="ghost" size="sm" iconName="ArrowRight">
                    Read Full Story
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Success Story */}
        <div className="mt-16 bg-gradient-accent rounded-xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={20} className="text-warning" />
                <span className="font-medium">Featured Success Story</span>
              </div>
              
              <h3 className="text-2xl font-bold">
                "This tool transformed our entire content workflow"
              </h3>
              
              <p className="text-white/90 text-lg">
                Marketing agency scales content production by 300% while reducing costs by 60% 
                using AI-powered automation and smart workflows.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-warning">300%</div>
                  <div className="text-sm text-white/80">Content Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warning">60%</div>
                  <div className="text-sm text-white/80">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warning">15hrs</div>
                  <div className="text-sm text-white/80">Time Saved/Week</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Image
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="Sarah Chen"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Sarah Chen</div>
                  <div className="text-white/80">Marketing Director, CreativeFlow Agency</div>
                </div>
              </div>

              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                Read Complete Case Study
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-video bg-white/10 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                  alt="Success story video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-soft rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-250">
                    <Icon name="Play" size={28} className="text-white ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics Overview */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-background rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={24} className="text-success" />
            </div>
            <div className="text-2xl font-bold text-primary mb-2">89%</div>
            <div className="text-text-secondary">Report Productivity Increase</div>
          </div>
          
          <div className="bg-background rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} className="text-warning" />
            </div>
            <div className="text-2xl font-bold text-primary mb-2">12hrs</div>
            <div className="text-text-secondary">Average Time Saved/Week</div>
          </div>
          
          <div className="bg-background rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="DollarSign" size={24} className="text-accent" />
            </div>
            <div className="text-2xl font-bold text-primary mb-2">$50K</div>
            <div className="text-text-secondary">Average Annual Savings</div>
          </div>
          
          <div className="bg-background rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-error" />
            </div>
            <div className="text-2xl font-bold text-primary mb-2">95%</div>
            <div className="text-text-secondary">Would Recommend</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their workflows and achieved 
            measurable results with this powerful AI tool.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="bg-cta hover:bg-cta/90">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              Share Your Story
            </Button>
          </div>
        </div>
      </div>
      {/* Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-soft z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary">{selectedStory?.title}</h2>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-border transition-colors duration-250"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={selectedStory?.user?.avatar}
                    alt={selectedStory?.user?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-primary">{selectedStory?.user?.name}</h3>
                    <p className="text-text-secondary">{selectedStory?.user?.role}</p>
                    <p className="text-sm text-text-secondary">{selectedStory?.user?.company}</p>
                  </div>
                </div>
                
                <div className="prose prose-slate max-w-none">
                  <p className="text-text-secondary text-lg">{selectedStory?.fullStory}</p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {selectedStory?.keyMetrics?.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-surface rounded-lg">
                      <div className={`text-3xl font-bold ${getImpactColor(metric?.impact)}`}>
                        {formatMetric(metric?.value)}
                      </div>
                      <div className="text-sm text-text-secondary">{metric?.label}</div>
                      <div className="text-xs text-text-secondary mt-1">{metric?.impact}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessStoriesSection;