import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const MasterclassCard = ({ masterclass, onJoinMasterclass }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'text-error bg-error/10 border-error/20';
      case 'Upcoming':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'Recorded':
        return 'text-success bg-success/10 border-success/20';
      default:
        return 'text-text-secondary bg-muted border-border';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-elevated transition-all duration-300 hover-lift">
      <div className="relative">
        <Image 
          src={masterclass?.thumbnail}
          alt={masterclass?.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(masterclass?.status)}`}>
            {masterclass?.status}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1">
          <span className="text-white text-xs font-medium">{masterclass?.duration}</span>
        </div>
        {masterclass?.status === 'Live' && (
          <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-error/90 backdrop-blur-sm rounded-full px-2 py-1">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white text-xs font-medium">LIVE</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start space-x-3 mb-4">
          <Image 
            src={masterclass?.instructor?.avatar}
            alt={masterclass?.instructor?.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-text-primary mb-1 line-clamp-2">{masterclass?.title}</h3>
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <span>{masterclass?.instructor?.name}</span>
              <span>•</span>
              <span>{masterclass?.instructor?.title}</span>
            </div>
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-2">{masterclass?.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={16} />
              <span>{formatDate(masterclass?.scheduledAt)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={16} />
              <span>{masterclass?.attendees}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={16} className="text-warning fill-current" />
            <span className="text-sm font-medium text-text-primary">{masterclass?.rating}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button 
            variant={masterclass?.status === 'Live' ? "default" : "outline"}
            size="sm"
            fullWidth
            iconName={masterclass?.status === 'Live' ? "Video" : masterclass?.status === 'Upcoming' ? "Bell" : "Play"}
            iconPosition="left"
            onClick={() => onJoinMasterclass(masterclass)}
            className={masterclass?.status === 'Live' ? "bg-error hover:bg-error/90" : ""}
          >
            {masterclass?.status === 'Live' ? "Join Live" : 
             masterclass?.status === 'Upcoming' ? "Set Reminder" : "Watch Recording"}
          </Button>
          <Button variant="ghost" size="sm" iconName="Share">
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MasterclassCard;