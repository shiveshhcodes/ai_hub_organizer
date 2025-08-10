import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressTracker = ({ userProgress }) => {
  const getSkillLevelColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'text-success bg-success/10';
      case 'Intermediate':
        return 'text-warning bg-warning/10';
      case 'Advanced':
        return 'text-error bg-error/10';
      case 'Expert':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  const calculateOverallProgress = () => {
    const totalModules = userProgress?.pathsProgress?.reduce((sum, path) => sum + path?.totalModules, 0);
    const completedModules = userProgress?.pathsProgress?.reduce((sum, path) => sum + path?.completedModules, 0);
    return totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-text-primary">Your Learning Progress</h3>
        <div className="flex items-center space-x-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSkillLevelColor(userProgress?.currentLevel)}`}>
            {userProgress?.currentLevel}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
            <Icon name="BookOpen" size={24} className="text-accent" />
          </div>
          <div className="text-2xl font-bold text-text-primary">{userProgress?.completedPaths}</div>
          <div className="text-sm text-text-secondary">Paths Completed</div>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
            <Icon name="Award" size={24} className="text-success" />
          </div>
          <div className="text-2xl font-bold text-text-primary">{userProgress?.certificates}</div>
          <div className="text-sm text-text-secondary">Certificates Earned</div>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-2">
            <Icon name="Clock" size={24} className="text-warning" />
          </div>
          <div className="text-2xl font-bold text-text-primary">{userProgress?.totalHours}</div>
          <div className="text-sm text-text-secondary">Hours Learned</div>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-text-primary">Overall Progress</span>
          <span className="text-sm text-text-secondary">{calculateOverallProgress()}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-3">
          <div 
            className="bg-gradient-accent h-3 rounded-full transition-all duration-500"
            style={{ width: `${calculateOverallProgress()}%` }}
          ></div>
        </div>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium text-text-primary">Active Learning Paths</h4>
        {userProgress?.pathsProgress?.map((path, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name={path?.icon} size={16} className="text-accent" />
              </div>
              <div>
                <div className="font-medium text-text-primary text-sm">{path?.name}</div>
                <div className="text-xs text-text-secondary">{path?.completedModules}/{path?.totalModules} modules</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-12 bg-muted rounded-full h-2">
                <div 
                  className="bg-accent h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(path?.completedModules / path?.totalModules) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-text-secondary w-8 text-right">
                {Math.round((path?.completedModules / path?.totalModules) * 100)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;