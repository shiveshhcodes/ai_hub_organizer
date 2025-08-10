import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunitySection = ({ studyGroups, mentors, projects }) => {
  const [activeTab, setActiveTab] = useState('groups');

  const tabs = [
    { id: 'groups', label: 'Study Groups', icon: 'Users', count: studyGroups?.length },
    { id: 'mentors', label: 'Mentors', icon: 'UserCheck', count: mentors?.length },
    { id: 'projects', label: 'Projects', icon: 'FolderOpen', count: projects?.length }
  ];

  const StudyGroupCard = ({ group }) => (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-soft transition-all duration-250">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-medium text-text-primary mb-1">{group?.name}</h4>
          <p className="text-sm text-text-secondary line-clamp-2">{group?.description}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          group?.status === 'Active' ? 'text-success bg-success/10' : 'text-warning bg-warning/10'
        }`}>
          {group?.status}
        </span>
      </div>
      
      <div className="flex items-center justify-between mb-3">
        <div className="flex -space-x-2">
          {group?.members?.slice(0, 4)?.map((member, index) => (
            <Image 
              key={index}
              src={member?.avatar}
              alt={member?.name}
              className="w-8 h-8 rounded-full border-2 border-background object-cover"
            />
          ))}
          {group?.members?.length > 4 && (
            <div className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
              <span className="text-xs font-medium text-text-secondary">+{group?.members?.length - 4}</span>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-3 text-xs text-text-secondary">
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={12} />
            <span>{group?.members?.length}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="MessageCircle" size={12} />
            <span>{group?.messages}</span>
          </div>
        </div>
      </div>
      
      <Button variant="outline" size="sm" fullWidth iconName="UserPlus" iconPosition="left">
        Join Group
      </Button>
    </div>
  );

  const MentorCard = ({ mentor }) => (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-soft transition-all duration-250">
      <div className="flex items-start space-x-3 mb-3">
        <Image 
          src={mentor?.avatar}
          alt={mentor?.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h4 className="font-medium text-text-primary">{mentor?.name}</h4>
          <p className="text-sm text-text-secondary">{mentor?.title}</p>
          <div className="flex items-center space-x-1 mt-1">
            <Icon name="Star" size={12} className="text-warning fill-current" />
            <span className="text-xs text-text-secondary">{mentor?.rating} • {mentor?.sessions} sessions</span>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          mentor?.available ? 'text-success bg-success/10' : 'text-text-secondary bg-muted'
        }`}>
          {mentor?.available ? 'Available' : 'Busy'}
        </span>
      </div>
      
      <div className="mb-3">
        <div className="flex flex-wrap gap-1">
          {mentor?.expertise?.slice(0, 3)?.map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
              {skill}
            </span>
          ))}
          {mentor?.expertise?.length > 3 && (
            <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-full">
              +{mentor?.expertise?.length - 3}
            </span>
          )}
        </div>
      </div>
      
      <Button 
        variant={mentor?.available ? "default" : "outline"} 
        size="sm" 
        fullWidth 
        iconName="MessageSquare" 
        iconPosition="left"
        disabled={!mentor?.available}
      >
        {mentor?.available ? 'Book Session' : 'Unavailable'}
      </Button>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-soft transition-all duration-250">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-medium text-text-primary mb-1">{project?.title}</h4>
          <p className="text-sm text-text-secondary line-clamp-2">{project?.description}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          project?.difficulty === 'Beginner' ? 'text-success bg-success/10' :
          project?.difficulty === 'Intermediate'? 'text-warning bg-warning/10' : 'text-error bg-error/10'
        }`}>
          {project?.difficulty}
        </span>
      </div>
      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3 text-xs text-text-secondary">
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={12} />
            <span>{project?.collaborators}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={12} />
            <span>{project?.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="GitBranch" size={12} />
            <span>{project?.category}</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {project?.skills?.slice(0, 3)?.map((skill, index) => (
          <span key={index} className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-full">
            {skill}
          </span>
        ))}
      </div>
      
      <Button variant="outline" size="sm" fullWidth iconName="GitBranch" iconPosition="left">
        Join Project
      </Button>
    </div>
  );

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-text-primary">Community Hub</h3>
        <Button variant="ghost" size="sm" iconName="ExternalLink">
          View All
        </Button>
      </div>
      <div className="flex space-x-1 mb-6 bg-muted rounded-lg p-1">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-250 ${
              activeTab === tab?.id
                ? 'bg-background text-text-primary shadow-soft'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
            <span className="bg-accent/20 text-accent px-1.5 py-0.5 rounded-full text-xs">
              {tab?.count}
            </span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeTab === 'groups' && studyGroups?.map((group, index) => (
          <StudyGroupCard key={index} group={group} />
        ))}
        {activeTab === 'mentors' && mentors?.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
        {activeTab === 'projects' && projects?.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default CommunitySection;