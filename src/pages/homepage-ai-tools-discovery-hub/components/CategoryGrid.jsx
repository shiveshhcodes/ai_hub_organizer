import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const CategoryGrid = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 'writing',
      name: 'Writing',
      icon: 'PenTool',
      description: 'AI-powered writing assistants and content generators',
      toolCount: 245,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      examples: ['ChatGPT', 'Jasper', 'Copy.ai']
    },
    {
      id: 'design',
      name: 'Design',
      icon: 'Palette',
      description: 'Image generation, design tools, and creative AI',
      toolCount: 189,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      examples: ['Midjourney', 'DALL-E', 'Canva AI']
    },
    {
      id: 'code',
      name: 'Code',
      icon: 'Code',
      description: 'AI coding assistants and development tools',
      toolCount: 156,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      examples: ['GitHub Copilot', 'Cursor', 'Replit']
    },
    {
      id: 'marketing',
      name: 'Marketing',
      icon: 'Megaphone',
      description: 'AI tools for marketing, ads, and social media',
      toolCount: 198,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      examples: ['AdCreative', 'Hootsuite AI', 'Jasper']
    },
    {
      id: 'productivity',
      name: 'Productivity',
      icon: 'Zap',
      description: 'AI-powered productivity and workflow tools',
      toolCount: 167,
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-700',
      examples: ['Notion AI', 'Otter.ai', 'Grammarly']
    },
    {
      id: 'video',
      name: 'Video',
      icon: 'Video',
      description: 'AI video editing, generation, and enhancement',
      toolCount: 134,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-700',
      examples: ['Runway ML', 'Synthesia', 'Loom AI']
    },
    {
      id: 'audio',
      name: 'Audio',
      icon: 'Headphones',
      description: 'AI music, voice, and audio processing tools',
      toolCount: 98,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700',
      examples: ['ElevenLabs', 'Mubert', 'Descript']
    },
    {
      id: 'research',
      name: 'Research',
      icon: 'Search',
      description: 'AI research assistants and data analysis tools',
      toolCount: 112,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      examples: ['Perplexity', 'Elicit', 'Consensus']
    }
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore by Category</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover AI tools organized by use case. Find exactly what you need for your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories?.map((category) => (
            <Link
              key={category?.id}
              to="/tool-detail-pages-deep-dive-analysis"
              className="group relative"
              onMouseEnter={() => setHoveredCategory(category?.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className={`relative bg-white rounded-xl p-6 border border-slate-200 hover:shadow-elevated hover-lift transition-all duration-300 overflow-hidden ${category?.bgColor} hover:bg-white`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category?.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 ${category?.bgColor} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={category?.icon} size={24} className={category?.textColor} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-slate-800">
                  {category?.name}
                </h3>
                
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {category?.description}
                </p>

                {/* Tool Count */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-slate-500">
                    <Icon name="Package" size={14} />
                    <span>{category?.toolCount} tools</span>
                  </div>
                  <Icon name="ArrowRight" size={16} className="text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>

                {/* Hover Examples */}
                {hoveredCategory === category?.id && (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col justify-center p-6 animate-fade-in">
                    <h4 className="font-semibold text-slate-900 mb-3">Popular Tools:</h4>
                    <div className="space-y-2">
                      {category?.examples?.map((example, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${category?.color?.includes('blue') ? 'bg-blue-500' : 
                            category?.color?.includes('purple') ? 'bg-purple-500' :
                            category?.color?.includes('green') ? 'bg-green-500' :
                            category?.color?.includes('orange') ? 'bg-orange-500' :
                            category?.color?.includes('cyan') ? 'bg-cyan-500' :
                            category?.color?.includes('pink') ? 'bg-pink-500' :
                            category?.color?.includes('indigo') ? 'bg-indigo-500' :
                            'bg-emerald-500'}`}></div>
                          <span className="text-sm text-slate-700">{example}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-xs text-slate-500">
                      Click to explore all {category?.toolCount} tools
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/tool-detail-pages-deep-dive-analysis"
            className="inline-flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-250 hover-lift"
          >
            <Icon name="Grid" size={20} />
            <span>Browse All Categories</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;