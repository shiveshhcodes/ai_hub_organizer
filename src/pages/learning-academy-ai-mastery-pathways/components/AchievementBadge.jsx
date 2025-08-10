import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadge = ({ achievement, isUnlocked = false, progress = 0 }) => {
  const getBadgeColor = (category) => {
    switch (category) {
      case 'Learning':
        return 'from-blue-500 to-cyan-500';
      case 'Community':
        return 'from-purple-500 to-pink-500';
      case 'Mastery':
        return 'from-amber-500 to-orange-500';
      case 'Leadership':
        return 'from-emerald-500 to-teal-500';
      default:
        return 'from-slate-400 to-slate-500';
    }
  };

  const getIconName = (category) => {
    switch (category) {
      case 'Learning':
        return 'BookOpen';
      case 'Community':
        return 'Users';
      case 'Mastery':
        return 'Award';
      case 'Leadership':
        return 'Crown';
      default:
        return 'Star';
    }
  };

  return (
    <div className={`relative group cursor-pointer transition-all duration-300 ${isUnlocked ? 'hover:scale-105' : 'opacity-60'}`}>
      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${getBadgeColor(achievement?.category)} p-0.5`}>
        <div className={`w-full h-full rounded-full flex items-center justify-center ${isUnlocked ? 'bg-white' : 'bg-muted'}`}>
          <Icon 
            name={getIconName(achievement?.category)} 
            size={28} 
            className={isUnlocked ? 'text-slate-700' : 'text-text-secondary'} 
          />
        </div>
      </div>
      {!isUnlocked && progress > 0 && (
        <div className="absolute inset-0 rounded-full">
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-muted"
            />
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 36}`}
              strokeDashoffset={`${2 * Math.PI * 36 * (1 - progress / 100)}`}
              className="text-accent transition-all duration-500"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
      {isUnlocked && (
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
          <Icon name="Check" size={14} color="white" />
        </div>
      )}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-250 z-10">
        <div className="bg-popover border border-border rounded-lg p-3 shadow-elevated min-w-48 mt-2">
          <h4 className="font-medium text-text-primary mb-1">{achievement?.title}</h4>
          <p className="text-sm text-text-secondary mb-2">{achievement?.description}</p>
          <div className="flex items-center justify-between text-xs">
            <span className="text-text-secondary">{achievement?.category}</span>
            {!isUnlocked && (
              <span className="text-accent font-medium">{progress}% complete</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementBadge;