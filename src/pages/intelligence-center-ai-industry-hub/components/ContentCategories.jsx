import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ContentCategories = () => {
  const [activeCategory, setActiveCategory] = useState('ai-news');

  const categories = [
    {
      id: 'ai-news',
      name: 'AI News',
      icon: 'Newspaper',
      description: 'Real-time industry updates',
      count: 24
    },
    {
      id: 'tool-spotlights',
      name: 'Tool Spotlights',
      icon: 'Spotlight',
      description: 'In-depth reviews',
      count: 12
    },
    {
      id: 'industry-reports',
      name: 'Industry Reports',
      icon: 'BarChart3',
      description: 'Data-driven analysis',
      count: 8
    },
    {
      id: 'expert-insights',
      name: 'Expert Insights',
      icon: 'Users',
      description: 'Thought leadership',
      count: 16
    }
  ];

  const contentData = {
    'ai-news': [
      {
        id: 1,
        title: "Google Announces Gemini Ultra 2.0 with Enhanced Reasoning",
        excerpt: "The latest model shows significant improvements in mathematical reasoning and code generation capabilities.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
        author: "Alex Kim",
        publishedAt: "3 hours ago",
        readTime: "5 min",
        category: "Product Launch",
        trending: true
      },
      {
        id: 2,
        title: "Microsoft Copilot Integration Reaches 1 Million Enterprise Users",
        excerpt: "Rapid adoption across Fortune 500 companies signals mainstream AI tool acceptance in corporate environments.",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=400&h=250&fit=crop",
        author: "Jennifer Walsh",
        publishedAt: "5 hours ago",
        readTime: "7 min",
        category: "Market Update",
        trending: false
      },
      {
        id: 3,
        title: "AI Regulation Framework Approved by EU Parliament",
        excerpt: "New legislation sets global precedent for AI governance, affecting tool development and deployment strategies.",
        image: "https://images.pixabay.com/photos/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg?w=400&h=250&fit=crop",
        author: "David Chen",
        publishedAt: "8 hours ago",
        readTime: "10 min",
        category: "Regulation",
        trending: true
      }
    ],
    'tool-spotlights': [
      {
        id: 4,
        title: "Runway ML Gen-3: The Future of AI Video Generation",
        excerpt: "Comprehensive review of the latest video generation capabilities, pricing, and real-world applications.",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop",
        author: "Maria Rodriguez",
        publishedAt: "1 day ago",
        readTime: "12 min",
        category: "Video Tools",
        rating: 4.8
      },
      {
        id: 5,
        title: "Notion AI vs. Obsidian Smart Connect: Knowledge Management Showdown",
        excerpt: "Side-by-side comparison of AI-powered note-taking and knowledge organization tools for professionals.",
        image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?w=400&h=250&fit=crop",
        author: "Tom Wilson",
        publishedAt: "2 days ago",
        readTime: "15 min",
        category: "Productivity",
        rating: 4.6
      }
    ],
    'industry-reports': [
      {
        id: 6,
        title: "Q4 2024 AI Tools Adoption Report: Enterprise Trends",
        excerpt: "Comprehensive analysis of AI tool adoption patterns across industries, with ROI data and implementation insights.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        author: "Research Team",
        publishedAt: "3 days ago",
        readTime: "25 min",
        category: "Market Research",
        downloads: 1247
      },
      {
        id: 7,
        title: "The $100B AI Infrastructure Market: Cloud vs. Edge Computing",
        excerpt: "Deep dive into infrastructure investments, performance benchmarks, and strategic implications for AI deployment.",
        image: "https://images.pixabay.com/photos/2020/04/08/08/28/server-5016985_1280.jpg?w=400&h=250&fit=crop",
        author: "Infrastructure Team",
        publishedAt: "1 week ago",
        readTime: "20 min",
        category: "Infrastructure",
        downloads: 892
      }
    ],
    'expert-insights': [
      {
        id: 8,
        title: "Building AI-First Organizations: Lessons from Scale-ups",
        excerpt: "Exclusive insights from CTOs who successfully transformed their companies with AI-first strategies.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
        author: "Leadership Panel",
        publishedAt: "2 days ago",
        readTime: "18 min",
        category: "Strategy",
        expert: "CTO Panel"
      },
      {
        id: 9,
        title: "The Ethics of AI Tool Selection: A Framework for Decision Makers",
        excerpt: "Practical guidelines for evaluating AI tools through ethical, legal, and social responsibility lenses.",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=400&h=250&fit=crop",
        author: "Dr. Sarah Johnson",
        publishedAt: "4 days ago",
        readTime: "14 min",
        category: "Ethics",
        expert: "AI Ethics Researcher"
      }
    ]
  };

  const activeContent = contentData?.[activeCategory] || [];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Intelligence Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated content across key areas of AI development, from breaking news to strategic insights
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeCategory === category?.id
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <div className="text-left">
                <div className="font-medium">{category?.name}</div>
                <div className="text-xs opacity-80">{category?.description}</div>
              </div>
              <div className={`text-xs px-2 py-1 rounded-full ${
                activeCategory === category?.id
                  ? 'bg-accent-foreground/20'
                  : 'bg-foreground/10'
              }`}>
                {category?.count}
              </div>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeContent?.map((item) => (
            <article
              key={item?.id}
              className="bg-card rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item?.image}
                  alt={item?.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {item?.category}
                  </span>
                </div>
                {item?.trending && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-red-500 text-white px-2 py-1 rounded-full">
                      <Icon name="TrendingUp" size={12} />
                      <span className="text-xs font-medium">Trending</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                  {item?.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {item?.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="User" size={14} />
                      <span>{item?.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{item?.readTime}</span>
                    </div>
                  </div>
                  <span>{item?.publishedAt}</span>
                </div>

                {/* Additional Metadata */}
                {item?.rating && (
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{item?.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Tool Rating</span>
                  </div>
                )}

                {item?.downloads && (
                  <div className="flex items-center space-x-2 mb-4">
                    <Icon name="Download" size={14} className="text-green-500" />
                    <span className="text-sm font-medium">{item?.downloads?.toLocaleString()} downloads</span>
                  </div>
                )}

                {item?.expert && (
                  <div className="flex items-center space-x-2 mb-4">
                    <Icon name="Award" size={14} className="text-blue-500" />
                    <span className="text-sm font-medium">{item?.expert}</span>
                  </div>
                )}

                <Button variant="ghost" className="w-full justify-between group-hover:bg-accent/10">
                  Read More
                  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8">
            <Icon name="RefreshCw" size={18} className="mr-2" />
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentCategories;