import React from 'react';
import Icon from '../../../components/AppIcon';

const TabNavigation = ({ activeTab, onTabChange, tabs }) => {
  return (
    <div className="bg-background border-b border-border sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => onTabChange(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-250 ${
                activeTab === tab?.id
                  ? 'text-accent border-accent bg-accent/5' :'text-text-secondary border-transparent hover:text-text-primary hover:border-border'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
              {tab?.count && (
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab?.id
                    ? 'bg-accent/20 text-accent' :'bg-muted text-text-secondary'
                }`}>
                  {tab?.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;