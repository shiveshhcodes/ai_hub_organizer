import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const successStories = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Content Creator",
      company: "TechBlog Pro",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=center",
      story: "AI Hub Organizer helped me discover 15 AI tools that cut my content creation time by 60%. The personalized recommendations are spot-on!",
      metrics: "60% time saved",
      toolsUsed: 15,
      verified: true
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Startup Founder",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=center",
      story: "Found the perfect AI tools for our startup through the platform. The comparison features saved us weeks of research and $10K in wrong tool subscriptions.",
      metrics: "$10K saved",
      toolsUsed: 8,
      verified: true
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Marketing Director",
      company: "GrowthCorp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=center",
      story: "The daily AI tricks feature taught me advanced techniques that transformed our marketing campaigns. ROI increased by 200% in 3 months.",
      metrics: "200% ROI increase",
      toolsUsed: 12,
      verified: true
    }
  ];

  const metrics = [
    {
      value: "50,000+",
      label: "Professionals Organized",
      icon: "Users",
      color: "text-cyan-600"
    },
    {
      value: "1M+",
      label: "Tools Saved",
      icon: "Bookmark",
      color: "text-emerald-600"
    },
    {
      value: "2,000+",
      label: "AI Tools Catalogued",
      icon: "Database",
      color: "text-purple-600"
    },
    {
      value: "4.9/5",
      label: "Average Rating",
      icon: "Star",
      color: "text-yellow-600"
    }
  ];

  const companies = [
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&h=40&fit=crop&crop=center" },
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=120&h=40&fit=crop&crop=center" },
    { name: "OpenAI", logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=120&h=40&fit=crop&crop=center" },
    { name: "Anthropic", logo: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=120&h=40&fit=crop&crop=center" },
    { name: "Stability AI", logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=120&h=40&fit=crop&crop=center" },
    { name: "Hugging Face", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop&crop=center" }
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Success Stories */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Success Stories</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            See how professionals are transforming their workflows with AI tools discovered on our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {successStories?.map((story) => (
            <div key={story?.id} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-elevated hover-lift transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src={story?.avatar} 
                  alt={`${story?.name} avatar`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-slate-900">{story?.name}</h4>
                    {story?.verified && (
                      <Icon name="CheckCircle" size={16} className="text-blue-500" />
                    )}
                  </div>
                  <p className="text-sm text-slate-600">{story?.role}</p>
                  <p className="text-xs text-slate-500">{story?.company}</p>
                </div>
              </div>

              <blockquote className="text-slate-700 text-sm mb-4 leading-relaxed">
                "{story?.story}"
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center space-x-4 text-xs text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Icon name="TrendingUp" size={12} className="text-emerald-500" />
                    <span>{story?.metrics}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Package" size={12} className="text-cyan-500" />
                    <span>{story?.toolsUsed} tools</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={12} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Trusted by Thousands</h3>
            <p className="text-slate-600">Join the growing community of AI-powered professionals</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics?.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-50 rounded-lg mb-3">
                  <Icon name={metric?.icon} size={20} className={metric?.color} />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {metric?.value}
                </div>
                <div className="text-sm text-slate-600">
                  {metric?.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <p className="text-slate-600 mb-8">Tools from leading AI companies</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {companies?.map((company, index) => (
              <div key={index} className="flex items-center justify-center h-12 px-4">
                <Image 
                  src={company?.logo} 
                  alt={`${company?.name} logo`}
                  className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Workflow?</h3>
            <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have already discovered their perfect AI tools. 
              Start organizing your AI advantage today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-cyan-600 hover:bg-cyan-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-250 hover-lift">
                <Icon name="Zap" size={20} className="inline mr-2" />
                Start Free Today
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors duration-250">
                <Icon name="Play" size={20} className="inline mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;