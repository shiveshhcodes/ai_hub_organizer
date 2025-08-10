import React from 'react';
import { Header } from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import TrendingTools from './components/TrendingTools';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';
import DailyAITricks from './components/DailyAITricks';
import CategoryGrid from './components/CategoryGrid';
import IntelligenceFeed from './components/IntelligenceFeed';
import SocialProof from './components/SocialProof';
import ChromeExtensionPromo from './components/ChromeExtensionPromo';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <TrendingTools />
        <PersonalizedRecommendations />
        <DailyAITricks />
        <CategoryGrid />
        <IntelligenceFeed />
        <SocialProof />
        <ChromeExtensionPromo />
      </main>
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <span className="text-xl font-bold">AI Hub Organizer</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Your AI advantage, organized. Discover, organize, and master the AI tools 
                that will transform your productivity.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors duration-250">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors duration-250">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors duration-250">Discover Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-250">Tool Analysis</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-250">Intelligence Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-250">Learning Academy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors duration-250">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-250">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-250">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-250">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm">
              © {new Date()?.getFullYear()} AI Hub Organizer. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-slate-400 text-sm">Made with ❤️ for AI enthusiasts</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;