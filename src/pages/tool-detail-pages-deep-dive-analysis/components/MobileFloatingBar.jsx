import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MobileFloatingBar = ({ tool, onSaveToHub, onVisitTool }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show floating bar after scrolling past the hero section
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSaveToHub(tool?.id);
  };

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-soft border-t border-border p-4 animate-slide-up">
      <div className="flex items-center space-x-3">
        {/* Tool Info */}
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center shadow-soft flex-shrink-0">
            <img
              src={tool?.logo}
              alt={`${tool?.name} logo`}
              className="w-6 h-6 object-contain"
              onError={(e) => {
                e.target.src = '/assets/images/no_image.png';
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-primary text-sm truncate">{tool?.name}</h3>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={12} className="text-warning fill-current" />
                <span className="text-xs text-text-secondary">{tool?.rating}</span>
              </div>
              <span className="text-xs text-text-secondary">•</span>
              <span className="text-xs text-text-secondary">
                {tool?.pricing?.startingPrice === 'Free' ? 'Free' : `$${tool?.pricing?.startingPrice}`}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <button
            onClick={handleSave}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-250 ${
              isSaved 
                ? 'bg-success text-white' :'bg-muted text-text-secondary hover:bg-border hover:text-text-primary'
            }`}
          >
            <Icon name={isSaved ? "BookmarkCheck" : "Bookmark"} size={16} />
          </button>
          
          <Button
            variant="default"
            size="sm"
            onClick={onVisitTool}
            className="bg-cta hover:bg-cta/90 px-6"
            iconName="ExternalLink"
            iconPosition="right"
          >
            Visit Tool
          </Button>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="flex items-center justify-center space-x-6 mt-3 pt-3 border-t border-border">
        <button className="flex flex-col items-center space-y-1 text-text-secondary hover:text-text-primary transition-colors duration-250">
          <Icon name="Share" size={16} />
          <span className="text-xs">Share</span>
        </button>
        
        <button className="flex flex-col items-center space-y-1 text-text-secondary hover:text-text-primary transition-colors duration-250">
          <Icon name="BarChart3" size={16} />
          <span className="text-xs">Compare</span>
        </button>
        
        <button className="flex flex-col items-center space-y-1 text-text-secondary hover:text-text-primary transition-colors duration-250">
          <Icon name="MessageCircle" size={16} />
          <span className="text-xs">Reviews</span>
        </button>
        
        <button className="flex flex-col items-center space-y-1 text-text-secondary hover:text-text-primary transition-colors duration-250">
          <Icon name="BookOpen" size={16} />
          <span className="text-xs">Tutorials</span>
        </button>
      </div>
    </div>
  );
};

export default MobileFloatingBar;