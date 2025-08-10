import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import LearningAcademy from './pages/learning-academy-ai-mastery-pathways';
import ToolDetailPage from './pages/tool-detail-pages-deep-dive-analysis';
import IntelligenceCenterPage from './pages/intelligence-center-ai-industry-hub';
import Homepage from './pages/homepage-ai-tools-discovery-hub';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/learning-academy-ai-mastery-pathways" element={<LearningAcademy />} />
        <Route path="/tool-detail-pages-deep-dive-analysis" element={<ToolDetailPage />} />
        <Route path="/intelligence-center-ai-industry-hub" element={<IntelligenceCenterPage />} />
        <Route path="/homepage-ai-tools-discovery-hub" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
