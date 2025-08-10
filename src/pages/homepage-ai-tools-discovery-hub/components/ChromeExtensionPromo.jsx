import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ChromeExtensionPromo = () => {
  const features = [
    {
      icon: 'Zap',
      title: 'One-Click Save',
      description: 'Save AI tools instantly while browsing with a single click'
    },
    {
      icon: 'Search',
      title: 'Smart Discovery',
      description: 'Get contextual AI tool suggestions based on the websites you visit'
    },
    {
      icon: 'Sync',
      title: 'Cross-Device Sync',
      description: 'Access your saved tools across all devices seamlessly'
    },
    {
      icon: 'Bell',
      title: 'Real-Time Alerts',
      description: 'Get notified about new tools and updates for your favorites'
    }
  ];

  const benefits = [
    "Never lose track of AI tools you discover",
    "Get personalized recommendations while browsing",
    "Organize tools into custom collections",
    "Share tool collections with your team",
    "Access tools directly from your browser"
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-emerald-400 rounded-full"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Chrome" size={18} color="white" />
              </div>
              <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                NEW
              </span>
            </div>

            <h2 className="text-4xl font-bold mb-4">
              AI Hub Organizer
              <span className="block text-cyan-400">Chrome Extension</span>
            </h2>

            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Transform your browsing experience with our powerful Chrome extension. 
              Discover, save, and organize AI tools without ever leaving your current tab.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name={feature?.icon} size={16} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature?.title}</h4>
                    <p className="text-sm text-slate-400">{feature?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="mb-8">
              <h4 className="font-semibold text-white mb-4">What you'll get:</h4>
              <div className="space-y-2">
                {benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                to="/chrome-extension-portal-browser-integration-hub"
                className="inline-flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-250 hover-lift"
              >
                <Icon name="Download" size={20} />
                <span>Install Extension</span>
              </Link>
              <button className="inline-flex items-center space-x-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-250">
                <Icon name="Play" size={20} />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6 mt-8 pt-8 border-t border-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">25K+</div>
                <div className="text-xs text-slate-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.8★</div>
                <div className="text-xs text-slate-400">Chrome Store</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500K+</div>
                <div className="text-xs text-slate-400">Tools Saved</div>
              </div>
            </div>
          </div>

          {/* Extension Preview */}
          <div className="relative">
            <div className="relative bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-2xl">
              {/* Browser Header */}
              <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-slate-700">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-slate-700 rounded-lg px-3 py-1 text-xs text-slate-400">
                  https://openai.com/chatgpt
                </div>
                <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={16} color="white" />
                </div>
              </div>

              {/* Extension Popup */}
              <div className="bg-white rounded-lg p-4 text-slate-900">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded flex items-center justify-center">
                    <Icon name="Zap" size={12} color="white" />
                  </div>
                  <span className="font-semibold text-sm">AI Hub Organizer</span>
                </div>

                <div className="bg-slate-50 rounded-lg p-3 mb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Image 
                      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=24&h=24&fit=crop&crop=center"
                      alt="ChatGPT logo"
                      className="w-6 h-6 rounded"
                    />
                    <span className="font-medium text-sm">ChatGPT</span>
                    <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded-full">Detected</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">AI-powered conversational assistant</p>
                  <button className="w-full bg-cyan-600 text-white text-xs py-1.5 rounded font-medium">
                    Save to Collection
                  </button>
                </div>

                <div className="text-xs text-slate-500 mb-2">Suggested for you:</div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span>Claude (Anthropic)</span>
                    <Icon name="Plus" size={12} className="text-cyan-600" />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Perplexity AI</span>
                    <Icon name="Plus" size={12} className="text-cyan-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
              <Icon name="Check" size={16} color="white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <Icon name="Sparkles" size={20} color="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChromeExtensionPromo;