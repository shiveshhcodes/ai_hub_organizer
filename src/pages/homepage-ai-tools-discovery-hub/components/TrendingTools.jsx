import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink, Heart, TrendingUp } from "lucide-react";
import { aiToolsService, favoritesService } from "../../../services/aiToolsService";
import { useAuth } from "../../../contexts/AuthContext";
import Button from '../../../components/ui/Button';

export default function TrendingTools() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoriteIds, setFavoriteIds] = useState(new Set());
  const { user } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const loadTrendingTools = async () => {
      try {
        const data = await aiToolsService?.getTrendingTools(6);
        if (isMounted) {
          setTools(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err?.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadTrendingTools();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!user?.id) return;

    let isMounted = true;

    const loadFavorites = async () => {
      try {
        const favorites = await favoritesService?.getUserFavorites(user?.id);
        if (isMounted) {
          setFavoriteIds(new Set(favorites?.map(tool => tool?.id) || []));
        }
      } catch (err) {
        console.log('Error loading favorites:', err);
      }
    };

    loadFavorites();

    return () => {
      isMounted = false;
    };
  }, [user?.id]);

  const handleToggleFavorite = async (toolId) => {
    if (!user?.id) return;

    try {
      const isFavorited = favoriteIds?.has(toolId);
      
      if (isFavorited) {
        await favoritesService?.removeFromFavorites(user?.id, toolId);
        setFavoriteIds(prev => {
          const newSet = new Set(prev);
          newSet?.delete(toolId);
          return newSet;
        });
      } else {
        await favoritesService?.addToFavorites(user?.id, toolId);
        setFavoriteIds(prev => new Set([...prev, toolId]));
      }
    } catch (err) {
      console.log('Error toggling favorite:', err);
    }
  };

  if (loading) {
    return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded-lg w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)]?.map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl h-80 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-red-600 mb-4">Error loading trending tools: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-600 font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Trending Now
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Most Popular AI Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the AI tools that are making waves in the community. 
            Updated in real-time based on user engagement.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools?.map((tool, index) => (
            <motion.div
              key={tool?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-500"
            >
              {/* Tool Header */}
              <div className="relative p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {tool?.name?.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                        {tool?.name}
                      </h3>
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full capitalize">
                        {tool?.category?.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                  
                  {user && (
                    <button
                      onClick={(e) => {
                        e?.stopPropagation();
                        handleToggleFavorite(tool?.id);
                      }}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        favoriteIds?.has(tool?.id)
                          ? 'bg-red-100 text-red-600 hover:bg-red-200' :'bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-600'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${favoriteIds?.has(tool?.id) ? 'fill-current' : ''}`} />
                    </button>
                  )}
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {tool?.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool?.tags?.slice(0, 3)?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tool Stats */}
              <div className="px-6 pb-4">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                    <span className="font-medium">{tool?.rating || 0}</span>
                    <span className="ml-1">({tool?.review_count || 0})</span>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    tool?.pricing === 'free' ?'bg-green-100 text-green-700'
                      : tool?.pricing === 'freemium' ?'bg-blue-100 text-blue-700' :'bg-orange-100 text-orange-700'
                  }`}>
                    {tool?.pricing}
                  </span>
                </div>

                <Button
                  onClick={() => window.open(tool?.website_url, '_blank')}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group-hover:shadow-lg transition-all duration-300"
                >
                  Try Now
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            className="px-8 py-3 text-lg border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600"
          >
            View All Tools
          </Button>
        </motion.div>
      </div>
    </section>
  );
}