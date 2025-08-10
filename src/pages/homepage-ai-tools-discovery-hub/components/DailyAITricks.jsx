import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, Clock, User } from "lucide-react";
import { contentService } from "../../../services/contentService";
import Button from '../../../components/ui/Button';

export default function DailyAITricks() {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadDailyTips = async () => {
      try {
        const data = await contentService?.getDailyTips(3);
        if (isMounted) {
          setTips(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err?.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadDailyTips();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded-lg w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)]?.map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl h-64 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-red-600 mb-4">Error loading daily tips: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-yellow-200 rounded-full text-yellow-800 font-medium mb-6">
            <Lightbulb className="w-4 h-4 mr-2" />
            Daily AI Tricks
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master AI Like a Pro
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick tips and tricks to maximize your productivity with AI tools. 
            Learn something new every day.
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tips?.map((tip, index) => (
            <motion.div
              key={tip?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/10 border border-yellow-100 transition-all duration-500"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {tip?.title}
                </h3>
                
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {tip?.excerpt || tip?.content?.substring(0, 150) + '...'}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{new Date(tip?.published_at)?.toLocaleDateString()}</span>
                </div>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                  Tip
                </span>
              </div>

              <Button
                variant="outline"
                className="w-full group-hover:bg-yellow-500 group-hover:text-white group-hover:border-yellow-500 transition-all duration-300"
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 text-white"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                ⚡ Pro Tip of the Day
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                How to Replace Your College Degree with AI Skills in 90 Days
              </h3>
              
              <p className="text-lg mb-6 text-white/90">
                Learn the exact framework thousands of professionals are using to transition 
                into high-paying AI careers without traditional education.
              </p>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-6">
                  <User className="w-5 h-5 mr-2" />
                  <span>AI Career Coach</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>15 min read</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 flex justify-center">
              <Button
                className="px-8 py-4 bg-white text-orange-600 hover:bg-gray-50 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Read Full Guide
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}