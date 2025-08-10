import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PersonalizedRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      name: "Claude",
      category: "Writing",
      description: "Anthropic's AI assistant for analysis, writing, and complex reasoning tasks",
      logo: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=64&h=64&fit=crop&crop=center",
      matchScore: 95,
      reason: "Based on your interest in writing tools",
      features: ["Long-form content", "Code analysis", "Research assistance"],
      pricing: "Free + Pro",
      isNew: false
    },
    {
      id: 2,
      name: "Perplexity AI",
      category: "Research",
      description: "AI-powered search engine that provides accurate answers with sources",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=center",
      matchScore: 92,
      reason: "Perfect for your research workflow",
      features: ["Real-time search", "Source citations", "Follow-up questions"],
      pricing: "Free + Pro",
      isNew: true
    },
    {
      id: 3,
      name: "Cursor",
      category: "Code",
      description: "AI-first code editor built for pair programming with AI",
      logo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=64&h=64&fit=crop&crop=center",
      matchScore: 89,
      reason: "Matches your coding preferences",
      features: ["AI pair programming", "Code completion", "Bug fixing"],
      pricing: "Free + Pro",
      isNew: true
    },
    {
      id: 4,
      name: "Gamma",
      category: "Presentations",
      description: "AI-powered presentation maker that creates beautiful slides instantly",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=center",
      matchScore: 87,
      reason: "Great for your presentation needs",
      features: ["Auto-design", "Content generation", "Interactive elements"],
      pricing: "Free + Pro",
      isNew: false
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Writing': 'bg-blue-100 text-blue-700',
      'Research': 'bg-emerald-100 text-emerald-700',
      'Code': 'bg-green-100 text-green-700',
      'Presentations': 'bg-purple-100 text-purple-700'
    };
    return colors?.[category] || 'bg-slate-100 text-slate-700';
  };

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Personalized for You</h2>
            <p className="text-slate-600">AI-powered recommendations based on your interests</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <Icon name="Sparkles" size={16} className="text-cyan-500" />
            <span>Powered by AI</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {recommendations?.map((tool) => (
            <div key={tool?.id} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-elevated hover-lift transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <Image 
                    src={tool?.logo} 
                    alt={`${tool?.name} logo`}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  {tool?.isNew && (
                    <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors duration-250 mb-1">
                        {tool?.name}
                      </h3>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(tool?.category)}`}>
                        {tool?.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 bg-cyan-50 px-2 py-1 rounded-full">
                      <Icon name="Target" size={12} className="text-cyan-600" />
                      <span className="text-xs font-medium text-cyan-700">{tool?.matchScore}% match</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                    {tool?.description}
                  </p>

                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name="Lightbulb" size={14} className="text-amber-500" />
                    <span className="text-xs text-slate-500">{tool?.reason}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool?.features?.map((feature, index) => (
                      <span key={index} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                      <Icon name="DollarSign" size={14} />
                      <span>{tool?.pricing}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center space-x-1 text-slate-500 hover:text-slate-700 text-sm transition-colors duration-250">
                        <Icon name="Heart" size={14} />
                      </button>
                      <Link 
                        to="/tool-detail-pages-deep-dive-analysis"
                        className="flex items-center space-x-1 bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-250"
                      >
                        <span>Try Now</span>
                        <Icon name="ExternalLink" size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/intelligence-center-ai-industry-hub"
            className="inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-250"
          >
            <span>Get More Personalized Recommendations</span>
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedRecommendations;