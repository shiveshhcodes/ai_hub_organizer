import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const IntelligenceFeed = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const newsItems = [
    {
      id: 1,
      title: "OpenAI Announces GPT-4 Turbo with 128K Context Window",
      source: "TechCrunch",
      time: "2 hours ago",
      category: "Product Launch",
      priority: "high",
      summary: "New model offers significantly longer context length and improved performance at lower costs."
    },
    {
      id: 2,
      title: "Google\'s Gemini Pro Now Available in 38 Languages",
      source: "The Verge",
      time: "4 hours ago",
      category: "Update",
      priority: "medium",
      summary: "Major expansion of language support makes Gemini more accessible globally."
    },
    {
      id: 3,
      title: "Microsoft Copilot Integration Reaches 1 Billion Users",
      source: "Microsoft Blog",
      time: "6 hours ago",
      category: "Milestone",
      priority: "medium",
      summary: "Copilot features now integrated across Office 365, Windows, and Edge browser."
    },
    {
      id: 4,
      title: "Anthropic Raises $4B Series C Led by Google",
      source: "Reuters",
      time: "8 hours ago",
      category: "Funding",
      priority: "high",
      summary: "Investment values Claude creator at $18.4B, intensifying AI competition."
    }
  ];

  const newTools = [
    {
      id: 1,
      name: "Pika Labs",
      category: "Video Generation",
      description: "AI-powered video creation from text prompts",
      addedTime: "1 hour ago",
      isHot: true,
      rating: 4.8
    },
    {
      id: 2,
      name: "Phind",
      category: "Developer Tools",
      description: "AI search engine optimized for developers",
      addedTime: "3 hours ago",
      isHot: false,
      rating: 4.6
    },
    {
      id: 3,
      name: "Ideogram",
      category: "Image Generation",
      description: "AI image generator with text rendering capabilities",
      addedTime: "5 hours ago",
      isHot: true,
      rating: 4.7
    },
    {
      id: 4,
      name: "Tavus",
      category: "Video",
      description: "AI-generated personalized videos at scale",
      addedTime: "7 hours ago",
      isHot: false,
      rating: 4.5
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Product Launch': 'bg-emerald-100 text-emerald-700',
      'Update': 'bg-blue-100 text-blue-700',
      'Milestone': 'bg-purple-100 text-purple-700',
      'Funding': 'bg-orange-100 text-orange-700',
      'Video Generation': 'bg-pink-100 text-pink-700',
      'Developer Tools': 'bg-green-100 text-green-700',
      'Image Generation': 'bg-purple-100 text-purple-700',
      'Video': 'bg-red-100 text-red-700'
    };
    return colors?.[category] || 'bg-slate-100 text-slate-700';
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Intelligence Feed</h2>
                <p className="text-slate-600">Stay updated with the latest AI developments</p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-500">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>Live updates</span>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-slate-100 rounded-lg p-1 mb-6">
              <button
                onClick={() => setActiveTab('news')}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-250 ${
                  activeTab === 'news' ?'bg-white text-slate-900 shadow-soft' :'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon name="Newspaper" size={16} className="inline mr-2" />
                AI News
              </button>
              <button
                onClick={() => setActiveTab('tools')}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-250 ${
                  activeTab === 'tools' ?'bg-white text-slate-900 shadow-soft' :'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon name="Plus" size={16} className="inline mr-2" />
                New Tools
              </button>
            </div>

            {/* News Tab */}
            {activeTab === 'news' && (
              <div className="space-y-4">
                {newsItems?.map((item) => (
                  <div key={item?.id} className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors duration-250">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item?.category)}`}>
                          {item?.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item?.priority)}`}>
                          {item?.priority}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500">{item?.time}</span>
                    </div>
                    
                    <h3 className="font-semibold text-slate-900 mb-2 hover:text-cyan-600 cursor-pointer transition-colors duration-250">
                      {item?.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 mb-3">
                      {item?.summary}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-slate-500">
                        <Icon name="ExternalLink" size={12} />
                        <span>{item?.source}</span>
                      </div>
                      <button className="text-cyan-600 hover:text-cyan-700 text-sm font-medium transition-colors duration-250">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* New Tools Tab */}
            {activeTab === 'tools' && (
              <div className="space-y-4">
                {newTools?.map((tool) => (
                  <div key={tool?.id} className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors duration-250">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-slate-900">{tool?.name}</h3>
                        {tool?.isHot && (
                          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            HOT
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-500">{tool?.addedTime}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(tool?.category)}`}>
                        {tool?.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={12} className="text-yellow-500" />
                        <span className="text-xs text-slate-600">{tool?.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-600 mb-3">
                      {tool?.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <button className="flex items-center space-x-1 text-slate-500 hover:text-slate-700 text-sm transition-colors duration-250">
                        <Icon name="Heart" size={14} />
                        <span>Save</span>
                      </button>
                      <Link 
                        to="/tool-detail-pages-deep-dive-analysis"
                        className="text-cyan-600 hover:text-cyan-700 text-sm font-medium transition-colors duration-250"
                      >
                        Explore Tool
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
              <h3 className="font-semibold text-slate-900 mb-4">Today's Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">New Tools Added</span>
                  <span className="font-semibold text-slate-900">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Tools Reviewed</span>
                  <span className="font-semibold text-slate-900">47</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">User Saves</span>
                  <span className="font-semibold text-slate-900">1,234</span>
                </div>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Trending Topics</h3>
              <div className="space-y-2">
                {['GPT-4 Turbo', 'Video Generation', 'Code Assistants', 'Image AI', 'Voice Cloning']?.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <span className="text-sm text-slate-700">{topic}</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="TrendingUp" size={12} className="text-emerald-500" />
                      <span className="text-xs text-slate-500">+{Math.floor(Math.random() * 50) + 10}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-slate-900 text-white rounded-xl p-6">
              <h3 className="font-semibold mb-2">Daily AI Digest</h3>
              <p className="text-sm text-slate-300 mb-4">
                Get the most important AI updates delivered to your inbox every morning.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg text-sm font-medium transition-colors duration-250">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/intelligence-center-ai-industry-hub"
            className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-250 hover-lift"
          >
            <Icon name="Brain" size={20} />
            <span>Visit Intelligence Center</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceFeed;