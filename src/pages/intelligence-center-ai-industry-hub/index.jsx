import React from 'react';
import { Header } from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ContentCategories from './components/ContentCategories';
import DailyAITricks from './components/DailyAITricks';
import SkillReplacementGuides from './components/SkillReplacementGuides';
import TrendVisualization from './components/TrendVisualization';
import NewsletterSection from './components/NewsletterSection';

const IntelligenceCenterPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <ContentCategories />
        <DailyAITricks />
        <SkillReplacementGuides />
        <TrendVisualization />
        <NewsletterSection />
      </main>
    </div>
  );
};

export default IntelligenceCenterPage;