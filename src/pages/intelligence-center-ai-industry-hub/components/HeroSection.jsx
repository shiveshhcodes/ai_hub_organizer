import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const featuredStories = [
    {
      id: 1,
      category: "Breaking News",
      title: "OpenAI Announces GPT-5 with Revolutionary Multimodal Capabilities",
      excerpt: "The latest iteration promises unprecedented reasoning abilities and real-time video processing, marking a significant leap in AI development.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      author: "Sarah Chen",
      readTime: "8 min read",
      publishedAt: "2 hours ago",
      trending: true
    },
    {
      id: 2,
      category: "Industry Analysis",
      title: "The $50B AI Tools Market: Winners, Losers, and What's Next",
      excerpt: "Comprehensive analysis of market consolidation trends, emerging players, and investment patterns shaping the AI tools landscape.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=800&h=400&fit=crop",
      author: "Michael Rodriguez",
      readTime: "12 min read",
      publishedAt: "6 hours ago",
      trending: false
    },
    {
      id: 3,
      category: "Exclusive Interview",
      title: "Inside Anthropic: Claude\'s Creator on AI Safety and the Future",
      excerpt: "An exclusive conversation with Dario Amodei about responsible AI development, safety measures, and the competitive landscape.",
      image: "https://images.pixabay.com/photos/2023/01/26/22/14/ai-generated-7747171_1280.jpg?w=800&h=400&fit=crop",
      author: "Emma Thompson",
      readTime: "15 min read",
      publishedAt: "1 day ago",
      trending: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % featuredStories?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [featuredStories?.length]);

  const story = featuredStories?.[currentStory];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-cyan-500/20 px-3 py-1 rounded-full">
                  <Icon name="Zap" size={16} className="text-cyan-400" />
                  <span className="text-sm font-medium text-cyan-300">{story?.category}</span>
                </div>
                {story?.trending && (
                  <div className="flex items-center space-x-1 bg-red-500/20 px-2 py-1 rounded-full">
                    <Icon name="TrendingUp" size={14} className="text-red-400" />
                    <span className="text-xs font-medium text-red-300">Trending</span>
                  </div>
                )}
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {story?.title}
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                {story?.excerpt}
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Icon name="User" size={16} />
                <span>{story?.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>{story?.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} />
                <span>{story?.publishedAt}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="default" className="bg-cyan-500 hover:bg-cyan-600">
                <Icon name="BookOpen" size={18} className="mr-2" />
                Read Full Story
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Icon name="Share2" size={18} className="mr-2" />
                Share
              </Button>
            </div>

            {/* Story Navigation */}
            <div className="flex items-center space-x-2">
              {featuredStories?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStory ? 'bg-cyan-400 w-8' : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={story?.image}
                alt={story?.title}
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Play Button Overlay for Video Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                  <Icon name="Play" size={24} className="text-white ml-1" />
                </button>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="flex items-center space-x-4 text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">2.4K</div>
                  <div className="text-xs text-slate-300">Views</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-xs text-slate-300">Shares</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;