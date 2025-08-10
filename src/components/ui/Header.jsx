import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { AuthModal } from '../auth/AuthModal';
import Button from './Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const { user, userProfile, signOut } = useAuth();

  const handleAuthAction = (mode) => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.log('Sign out error:', error);
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                AI
              </div>
              <span className="font-bold text-xl text-gray-900">Hub Organizer</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Tools
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Updates
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Blog
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Learning
              </a>
            </nav>

            {/* Auth Section */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-sm text-gray-700">
                      {userProfile?.full_name || user?.email}
                    </span>
                  </div>
                  <Button
                    onClick={handleSignOut}
                    variant="outline"
                    className="flex items-center space-x-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </Button>
                </div>
              ) : (
                <>
                  <Button
                    onClick={() => handleAuthAction('login')}
                    variant="outline"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => handleAuthAction('signup')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    Get Started
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-100"
            >
              <nav className="flex flex-col space-y-4 pt-4">
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                  Tools
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                  Updates
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                  Blog
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                  Learning
                </a>
                
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  {user ? (
                    <>
                      <div className="flex items-center space-x-2 text-sm text-gray-700">
                        <User className="w-4 h-4" />
                        <span>{userProfile?.full_name || user?.email}</span>
                      </div>
                      <Button
                        onClick={handleSignOut}
                        variant="outline"
                        className="w-full justify-center"
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        onClick={() => handleAuthAction('login')}
                        variant="outline"
                        className="w-full"
                      >
                        Sign In
                      </Button>
                      <Button
                        onClick={() => handleAuthAction('signup')}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      >
                        Get Started
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}