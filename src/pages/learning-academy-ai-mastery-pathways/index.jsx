import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import LearningPathCard from './components/LearningPathCard';
import QuickWinCard from './components/QuickWinCard';
import MasterclassCard from './components/MasterclassCard';
import AchievementBadge from './components/AchievementBadge';
import ProgressTracker from './components/ProgressTracker';
import CommunitySection from './components/CommunitySection';

const LearningAcademy = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for learning paths
  const learningPaths = [
    {
      id: 1,
      title: "AI for Marketers",
      description: "Master AI tools for content creation, campaign optimization, and customer insights. Learn to leverage ChatGPT, Midjourney, and analytics platforms.",
      difficulty: "Beginner",
      duration: "6 weeks",
      progress: 65,
      completedModules: 13,
      totalModules: 20,
      enrolled: "2.4k",
      rating: "4.8",
      certificates: 3,
      icon: "Target",
      category: "marketing"
    },
    {
      id: 2,
      title: "Creative Professional\'s AI Toolkit",
      description: "Transform your creative workflow with AI-powered design, video editing, and content generation tools. Perfect for designers and content creators.",
      difficulty: "Intermediate",
      duration: "8 weeks",
      progress: 30,
      completedModules: 6,
      totalModules: 20,
      enrolled: "1.8k",
      rating: "4.9",
      certificates: 4,
      icon: "Palette",
      category: "creative"
    },
    {
      id: 3,
      title: "Developer AI Integration",
      description: "Learn to integrate AI APIs, build intelligent applications, and automate development workflows using cutting-edge AI technologies.",
      difficulty: "Advanced",
      duration: "10 weeks",
      progress: 0,
      completedModules: 0,
      totalModules: 25,
      enrolled: "3.1k",
      rating: "4.7",
      certificates: 5,
      icon: "Code",
      category: "development"
    },
    {
      id: 4,
      title: "Executive AI Strategy",
      description: "Strategic implementation of AI in business operations, ROI analysis, and organizational transformation for leaders and decision makers.",
      difficulty: "Advanced",
      duration: "4 weeks",
      progress: 85,
      completedModules: 17,
      totalModules: 20,
      enrolled: "892",
      rating: "4.9",
      certificates: 2,
      icon: "TrendingUp",
      category: "business"
    },
    {
      id: 5,
      title: "AI Writing & Content Mastery",
      description: "Master AI-powered writing tools, content optimization, and automated publishing workflows for bloggers and content marketers.",
      difficulty: "Beginner",
      duration: "5 weeks",
      progress: 45,
      completedModules: 9,
      totalModules: 20,
      enrolled: "1.9k",
      rating: "4.6",
      certificates: 3,
      icon: "PenTool",
      category: "content"
    },
    {
      id: 6,
      title: "AI Data Analysis & Insights",
      description: "Learn to use AI for data analysis, predictive modeling, and business intelligence with tools like Python, R, and specialized AI platforms.",
      difficulty: "Intermediate",
      duration: "12 weeks",
      progress: 20,
      completedModules: 4,
      totalModules: 20,
      enrolled: "1.2k",
      rating: "4.8",
      certificates: 6,
      icon: "BarChart3",
      category: "analytics"
    }
  ];

  // Mock data for quick wins
  const quickWins = [
    {
      id: 1,
      title: "ChatGPT Prompt Engineering Basics",
      description: "Learn the fundamentals of crafting effective prompts for better AI responses in just 15 minutes.",
      type: "Tutorial",
      duration: "15 min",
      views: "12.5k",
      likes: "1.2k"
    },
    {
      id: 2,
      title: "Email Marketing Template Pack",
      description: "Ready-to-use AI-generated email templates for different industries and campaign types.",
      type: "Template",
      duration: "5 min",
      views: "8.3k",
      likes: "890"
    },
    {
      id: 3,
      title: "Midjourney Style Guide",
      description: "Master different artistic styles and parameters for consistent, professional AI-generated images.",
      type: "Tool Guide",
      duration: "20 min",
      views: "15.7k",
      likes: "2.1k"
    },
    {
      id: 4,
      title: "Content Calendar Automation",
      description: "Set up automated content scheduling using AI tools and social media management platforms.",
      type: "Workflow",
      duration: "25 min",
      views: "6.9k",
      likes: "654"
    },
    {
      id: 5,
      title: "AI Video Editing Shortcuts",
      description: "Speed up your video editing process with AI-powered tools and automated workflows.",
      type: "Tutorial",
      duration: "18 min",
      views: "9.8k",
      likes: "1.1k"
    },
    {
      id: 6,
      title: "SEO Content Optimization",
      description: "Use AI tools to optimize your content for search engines and improve rankings.",
      type: "Tool Guide",
      duration: "22 min",
      views: "11.2k",
      likes: "1.4k"
    }
  ];

  // Mock data for masterclasses
  const masterclasses = [
    {
      id: 1,
      title: "The Future of AI in Business Operations",
      description: "Join industry leader Sarah Chen as she explores how AI is transforming business operations and shares strategies for successful implementation.",
      instructor: {
        name: "Sarah Chen",
        title: "AI Strategy Director at TechCorp",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
      },
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      status: "Live",
      duration: "90 min",
      scheduledAt: "2025-01-10T15:00:00Z",
      attendees: "1.2k",
      rating: "4.9"
    },
    {
      id: 2,
      title: "Advanced Prompt Engineering Techniques",
      description: "Master advanced prompt engineering strategies with AI researcher Dr. Michael Rodriguez, including chain-of-thought and few-shot learning.",
      instructor: {
        name: "Dr. Michael Rodriguez",
        title: "AI Research Scientist",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
      },
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      status: "Upcoming",
      duration: "120 min",
      scheduledAt: "2025-01-15T18:00:00Z",
      attendees: "856",
      rating: "4.8"
    },
    {
      id: 3,
      title: "AI-Powered Creative Workflows",
      description: "Creative director Emma Thompson shares how to integrate AI tools into creative processes while maintaining artistic integrity and brand consistency.",
      instructor: {
        name: "Emma Thompson",
        title: "Creative Director at DesignStudio",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
      },
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
      status: "Recorded",
      duration: "75 min",
      scheduledAt: "2025-01-05T14:00:00Z",
      attendees: "2.1k",
      rating: "4.7"
    }
  ];

  // Mock data for achievements
  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first learning module",
      category: "Learning",
      isUnlocked: true,
      progress: 100
    },
    {
      id: 2,
      title: "Path Starter",
      description: "Begin your first learning path",
      category: "Learning",
      isUnlocked: true,
      progress: 100
    },
    {
      id: 3,
      title: "Community Helper",
      description: "Help 5 community members",
      category: "Community",
      isUnlocked: false,
      progress: 60
    },
    {
      id: 4,
      title: "Tool Master",
      description: "Master 10 different AI tools",
      category: "Mastery",
      isUnlocked: false,
      progress: 30
    },
    {
      id: 5,
      title: "Mentor",
      description: "Become a community mentor",
      category: "Leadership",
      isUnlocked: false,
      progress: 0
    },
    {
      id: 6,
      title: "Quick Learner",
      description: "Complete 20 quick win modules",
      category: "Learning",
      isUnlocked: false,
      progress: 75
    }
  ];

  // Mock data for user progress
  const userProgress = {
    currentLevel: "Intermediate",
    completedPaths: 2,
    certificates: 5,
    totalHours: 47,
    pathsProgress: [
      {
        name: "AI for Marketers",
        icon: "Target",
        completedModules: 13,
        totalModules: 20
      },
      {
        name: "Executive AI Strategy",
        icon: "TrendingUp",
        completedModules: 17,
        totalModules: 20
      },
      {
        name: "Creative Professional\'s AI Toolkit",
        icon: "Palette",
        completedModules: 6,
        totalModules: 20
      }
    ]
  };

  // Mock data for community
  const studyGroups = [
    {
      name: "AI Marketing Masterminds",
      description: "Weekly discussions on AI marketing strategies and tool recommendations",
      status: "Active",
      members: [
        { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
        { name: "Jane Smith", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
        { name: "Mike Johnson", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
        { name: "Sarah Wilson", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
        { name: "Tom Brown", avatar: "https://randomuser.me/api/portraits/men/3.jpg" }
      ],
      messages: 234
    },
    {
      name: "Creative AI Explorers",
      description: "Share and discuss AI-generated art, design techniques, and creative workflows",
      status: "Active",
      members: [
        { name: "Alice Cooper", avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
        { name: "Bob Martin", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
        { name: "Carol Davis", avatar: "https://randomuser.me/api/portraits/women/4.jpg" }
      ],
      messages: 156
    }
  ];

  const mentors = [
    {
      name: "Dr. Lisa Wang",
      title: "AI Research Director",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      rating: "4.9",
      sessions: 127,
      available: true,
      expertise: ["Machine Learning", "NLP", "Computer Vision", "AI Strategy"]
    },
    {
      name: "James Rodriguez",
      title: "Senior AI Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: "4.8",
      sessions: 89,
      available: false,
      expertise: ["Python", "TensorFlow", "API Integration", "MLOps"]
    }
  ];

  const projects = [
    {
      title: "AI-Powered Customer Service Bot",
      description: "Build a customer service chatbot using natural language processing and machine learning",
      difficulty: "Intermediate",
      collaborators: 8,
      duration: "4 weeks",
      category: "NLP",
      skills: ["Python", "OpenAI API", "Flask", "Database Design"]
    },
    {
      title: "Content Generation Pipeline",
      description: "Create an automated content generation system for social media and blog posts",
      difficulty: "Beginner",
      collaborators: 12,
      duration: "3 weeks",
      category: "Content",
      skills: ["GPT-4", "Content Strategy", "Automation", "Social Media"]
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All Paths', count: learningPaths?.length },
    { id: 'beginner', label: 'Beginner', count: learningPaths?.filter(p => p?.difficulty === 'Beginner')?.length },
    { id: 'intermediate', label: 'Intermediate', count: learningPaths?.filter(p => p?.difficulty === 'Intermediate')?.length },
    { id: 'advanced', label: 'Advanced', count: learningPaths?.filter(p => p?.difficulty === 'Advanced')?.length }
  ];

  const filteredPaths = learningPaths?.filter(path => {
    const matchesFilter = activeFilter === 'all' || path?.difficulty?.toLowerCase() === activeFilter;
    const matchesSearch = path?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         path?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleStartPath = (path) => {
    console.log('Starting learning path:', path?.title);
  };

  const handleStartQuickWin = (quickWin) => {
    console.log('Starting quick win:', quickWin?.title);
  };

  const handleJoinMasterclass = (masterclass) => {
    console.log('Joining masterclass:', masterclass?.title);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Learning Academy - AI Mastery Pathways | AI Hub Organizer</title>
        <meta name="description" content="Transform your AI skills with structured learning paths, expert masterclasses, and hands-on practice. From beginner to advanced AI implementation." />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Master AI Tools with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Structured Learning Paths
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform from AI curious to AI proficient with expert-designed courses, hands-on practice, 
                and a supportive community. Start your journey to AI mastery today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <Icon name="Play" size={20} className="mr-2" />
                  Start Learning Now
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Browse All Paths
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Progress Overview */}
          <div className="mb-12">
            <ProgressTracker userProgress={userProgress} />
          </div>

          {/* Learning Paths Section */}
          <section className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-2">Learning Pathways</h2>
                <p className="text-text-secondary">Structured courses designed to take you from beginner to expert</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6 lg:mt-0">
                <div className="relative">
                  <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
                  <input
                    type="text"
                    placeholder="Search learning paths..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e?.target?.value)}
                    className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent w-full sm:w-64"
                  />
                </div>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {filterOptions?.map((option) => (
                <button
                  key={option?.id}
                  onClick={() => setActiveFilter(option?.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-250 ${
                    activeFilter === option?.id
                      ? 'bg-accent text-white' :'bg-muted text-text-secondary hover:text-text-primary hover:bg-muted/80'
                  }`}
                >
                  {option?.label}
                  <span className="ml-2 px-1.5 py-0.5 rounded-full text-xs bg-white/20">
                    {option?.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Learning Paths Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPaths?.map((path) => (
                <LearningPathCard 
                  key={path?.id} 
                  path={path} 
                  onStartPath={handleStartPath}
                />
              ))}
            </div>
          </section>

          {/* Quick Wins Section */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-2">Quick Wins</h2>
                <p className="text-text-secondary">15-minute modules for immediate practical skills</p>
              </div>
              <Button variant="ghost" iconName="ArrowRight">
                View All
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {quickWins?.map((quickWin) => (
                <QuickWinCard 
                  key={quickWin?.id} 
                  quickWin={quickWin} 
                  onStartQuickWin={handleStartQuickWin}
                />
              ))}
            </div>
          </section>

          {/* Masterclasses Section */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-2">Expert Masterclasses</h2>
                <p className="text-text-secondary">Learn from industry leaders and AI experts</p>
              </div>
              <Button variant="ghost" iconName="Calendar">
                View Schedule
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {masterclasses?.map((masterclass) => (
                <MasterclassCard 
                  key={masterclass?.id} 
                  masterclass={masterclass} 
                  onJoinMasterclass={handleJoinMasterclass}
                />
              ))}
            </div>
          </section>

          {/* Achievements Section */}
          <section className="mb-16">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-2">Your Achievements</h2>
                  <p className="text-text-secondary">Track your progress and unlock new badges</p>
                </div>
                <Button variant="ghost" iconName="Trophy">
                  View All
                </Button>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
                {achievements?.map((achievement) => (
                  <AchievementBadge 
                    key={achievement?.id} 
                    achievement={achievement} 
                    isUnlocked={achievement?.isUnlocked}
                    progress={achievement?.progress}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Community Section */}
          <section className="mb-16">
            <CommunitySection 
              studyGroups={studyGroups}
              mentors={mentors}
              projects={projects}
            />
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-accent rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your AI Journey?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are already mastering AI tools and transforming their careers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100">
                <Icon name="Rocket" size={20} className="mr-2" />
                Start Your First Path
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Icon name="Users" size={20} className="mr-2" />
                Join Community
              </Button>
            </div>
          </section>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={18} color="white" />
                </div>
                <span className="text-xl font-bold">AI Hub Organizer</span>
              </div>
              <p className="text-slate-300 mb-4">
                Your intelligent companion for mastering the AI-powered future of work.
              </p>
              <div className="flex space-x-4">
                <Icon name="Twitter" size={20} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Linkedin" size={20} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Youtube" size={20} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Learning</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">All Paths</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Quick Wins</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Masterclasses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Study Groups</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentorship</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Forums</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {new Date()?.getFullYear()} AI Hub Organizer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearningAcademy;