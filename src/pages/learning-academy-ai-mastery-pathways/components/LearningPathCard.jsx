import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningPathCard = ({ path, onStartPath }) => {
  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'text-success bg-success/10';
      case 'Intermediate':
        return 'text-warning bg-warning/10';
      case 'Advanced':
        return 'text-error bg-error/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 50) return 'bg-warning';
    return 'bg-accent';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-elevated transition-all duration-300 hover-lift">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
            <Icon name={path?.icon} size={24} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">{path?.title}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(path?.difficulty)}`}>
                {path?.difficulty}
              </span>
              <span className="text-sm text-text-secondary">{path?.duration}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-text-primary">{path?.progress}%</div>
          <div className="text-xs text-text-secondary">Complete</div>
        </div>
      </div>
      <p className="text-text-secondary mb-4 line-clamp-2">{path?.description}</p>
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-text-secondary">Progress</span>
          <span className="text-text-primary font-medium">{path?.completedModules}/{path?.totalModules} modules</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(path?.progress)}`}
            style={{ width: `${path?.progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm text-text-secondary">
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={16} />
            <span>{path?.enrolled}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={16} />
            <span>{path?.rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Award" size={16} />
            <span>{path?.certificates}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button 
          variant={path?.progress > 0 ? "outline" : "default"}
          size="sm"
          fullWidth
          iconName={path?.progress > 0 ? "Play" : "BookOpen"}
          iconPosition="left"
          onClick={() => onStartPath(path)}
        >
          {path?.progress > 0 ? "Continue Learning" : "Start Path"}
        </Button>
        <Button variant="ghost" size="sm" iconName="Bookmark">
          Save
        </Button>
      </div>
    </div>
  );
};

export default LearningPathCard;