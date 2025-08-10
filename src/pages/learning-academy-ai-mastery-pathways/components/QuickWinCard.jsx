import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickWinCard = ({ quickWin, onStartQuickWin }) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'Tutorial':
        return 'PlayCircle';
      case 'Template':
        return 'FileText';
      case 'Tool Guide':
        return 'Wrench';
      case 'Workflow':
        return 'GitBranch';
      default:
        return 'BookOpen';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Tutorial':
        return 'text-accent bg-accent/10';
      case 'Template':
        return 'text-success bg-success/10';
      case 'Tool Guide':
        return 'text-warning bg-warning/10';
      case 'Workflow':
        return 'text-error bg-error/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-soft transition-all duration-250 hover:border-accent/30">
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name={getTypeIcon(quickWin?.type)} size={20} className="text-text-primary" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(quickWin?.type)}`}>
              {quickWin?.type}
            </span>
            <span className="text-xs text-text-secondary">{quickWin?.duration}</span>
          </div>
          
          <h4 className="font-medium text-text-primary mb-1 line-clamp-1">{quickWin?.title}</h4>
          <p className="text-sm text-text-secondary mb-3 line-clamp-2">{quickWin?.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 text-xs text-text-secondary">
              <div className="flex items-center space-x-1">
                <Icon name="Eye" size={12} />
                <span>{quickWin?.views}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="ThumbsUp" size={12} />
                <span>{quickWin?.likes}</span>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="xs"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={() => onStartQuickWin(quickWin)}
            >
              Start
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickWinCard;