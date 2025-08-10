import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/ui/Header';
import ToolHero from './components/ToolHero';
import TabNavigation from './components/TabNavigation';
import OverviewTab from './components/OverviewTab';
import ReviewsTab from './components/ReviewsTab';
import TutorialsTab from './components/TutorialsTab';
import AlternativesTab from './components/AlternativesTab';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import RelatedToolsSection from './components/RelatedToolsSection';
import MobileFloatingBar from './components/MobileFloatingBar';

const ToolDetailPage = () => {
  const { toolId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock tool data
  const mockTool = {
    id: "chatgpt-4",
    name: "ChatGPT-4",
    category: "Conversational AI",
    description: "Advanced conversational AI model that can understand and generate human-like text responses across a wide range of topics and tasks. Perfect for content creation, coding assistance, research, and creative writing.",
    logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1675557009875-9c7b2b8b8b8b?w=800&h=600&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 15420,
    pricing: {
      startingPrice: "20",
      billingCycle: "month",
      hasFreeTrial: true
    },
    keyFeatures: [
      "Advanced natural language processing",
      "Multi-language support",
      "Code generation and debugging",
      "Creative writing assistance",
      "Research and analysis",
      "API integration available"
    ],
    tags: ["AI", "Chatbot", "Content Creation", "Coding", "Research", "Writing"],
    useCases: [
      {
        icon: "PenTool",
        title: "Content Creation",
        description: "Generate blog posts, articles, social media content, and marketing copy with AI assistance.",
        examples: ["Blog writing", "Social media posts", "Email campaigns", "Product descriptions"]
      },
      {
        icon: "Code",
        title: "Programming Assistant",
        description: "Get help with coding, debugging, code reviews, and learning new programming languages.",
        examples: ["Code debugging", "Algorithm explanation", "Code optimization", "Learning tutorials"]
      },
      {
        icon: "Search",
        title: "Research & Analysis",
        description: "Conduct research, analyze data, summarize documents, and extract key insights.",
        examples: ["Market research", "Document analysis", "Data interpretation", "Trend analysis"]
      }
    ],
    featuresDeepDive: [
      {
        icon: "Brain",
        name: "Advanced Language Understanding",
        description: "Utilizes state-of-the-art transformer architecture to understand context, nuance, and intent in human language.",
        capabilities: [
          "Context-aware responses",
          "Sentiment analysis",
          "Intent recognition",
          "Multi-turn conversations"
        ]
      },
      {
        icon: "Globe",
        name: "Multi-language Support",
        description: "Supports over 95 languages with high accuracy for translation, conversation, and content generation.",
        capabilities: [
          "Real-time translation",
          "Cross-language conversations",
          "Cultural context awareness",
          "Localized content generation"
        ]
      }
    ],
    integrations: [
      {
        name: "Slack",
        logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=50&h=50&fit=crop",
        description: "Integrate ChatGPT directly into your Slack workspace for team collaboration.",
        difficulty: "Easy"
      },
      {
        name: "Microsoft Teams",
        logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=50&h=50&fit=crop",
        description: "Add AI assistance to your Microsoft Teams channels and meetings.",
        difficulty: "Medium"
      },
      {
        name: "Google Workspace",
        logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=50&h=50&fit=crop",
        description: "Enhance Google Docs, Sheets, and Gmail with AI-powered features.",
        difficulty: "Easy"
      }
    ],
    quickStats: [
      { icon: "Users", label: "Active Users", value: "100M+" },
      { icon: "Globe", label: "Languages", value: "95+" },
      { icon: "Zap", label: "Response Time", value: "<2s" },
      { icon: "Shield", label: "Uptime", value: "99.9%" }
    ],
    pricingHistory: [
      { date: "Dec 2024", price: "20", change: "current" },
      { date: "Jun 2024", price: "20", change: "same" },
      { date: "Jan 2024", price: "15", change: "increased" },
      { date: "Sep 2023", price: "15", change: "same" }
    ],
    companyInfo: {
      founded: "2015",
      location: "San Francisco, CA",
      teamSize: "500-1000"
    }
  };

  const mockReviews = [
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        role: "Content Marketing Manager",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        verified: true
      },
      rating: 5,
      title: "Game-changer for content creation",
      content: `This tool has completely transformed how I approach content creation. The quality of output is consistently impressive, and it saves me hours of work every week. The ability to maintain brand voice while generating diverse content types is remarkable.`,
      date: "2024-08-05",
      categories: {
        easeOfUse: 5,
        valueForMoney: 4,
        customerSupport: 4,
        features: 5
      },
      useCases: ["Content Creation", "Marketing"],
      helpfulCount: 24
    },
    {
      id: 2,
      user: {
        name: "Michael Chen",
        role: "Software Developer",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        verified: true
      },
      rating: 4,
      title: "Excellent coding assistant",
      content: `As a developer, I find this incredibly useful for debugging, code reviews, and learning new frameworks. It explains complex concepts clearly and provides practical examples. Sometimes the suggestions need refinement, but overall it's a valuable tool.`,
      date: "2024-08-03",
      categories: {
        easeOfUse: 4,
        valueForMoney: 4,
        customerSupport: 3,
        features: 5
      },
      useCases: ["Programming", "Learning"],
      helpfulCount: 18
    },
    {
      id: 3,
      user: {
        name: "Emily Rodriguez",
        role: "Research Analyst",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        verified: true
      },
      rating: 5,
      title: "Perfect for research and analysis",
      content: `The research capabilities are outstanding. It helps me quickly analyze large amounts of data, identify trends, and create comprehensive reports. The accuracy and depth of analysis consistently exceed my expectations.`,
      date: "2024-08-01",
      categories: {
        easeOfUse: 5,
        valueForMoney: 5,
        customerSupport: 4,
        features: 5
      },
      useCases: ["Research", "Data Analysis"],
      helpfulCount: 31
    }
  ];

  const mockRatingBreakdown = [
    { stars: 5, count: 8924, percentage: 58 },
    { stars: 4, count: 4626, percentage: 30 },
    { stars: 3, count: 1234, percentage: 8 },
    { stars: 2, count: 462, percentage: 3 },
    { stars: 1, count: 154, percentage: 1 }
  ];

  const mockTutorials = [
    {
      id: 1,
      title: "Getting Started with ChatGPT-4: Complete Beginner\'s Guide",
      description: "Learn the fundamentals of using ChatGPT-4 effectively, from basic prompts to advanced techniques.",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      duration: 45,
      difficulty: "beginner",
      rating: 4.9,
      completedCount: 12450,
      commentsCount: 234,
      learningPoints: [
        "Understanding prompt engineering",
        "Basic conversation techniques",
        "Setting up your workspace",
        "Best practices for beginners"
      ]
    },
    {
      id: 2,
      title: "Advanced Prompt Engineering Techniques",
      description: "Master advanced prompting strategies to get better, more accurate responses from ChatGPT-4.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      duration: 75,
      difficulty: "advanced",
      rating: 4.8,
      completedCount: 8920,
      commentsCount: 156,
      learningPoints: [
        "Chain-of-thought prompting",
        "Role-based interactions",
        "Context management",
        "Output formatting techniques"
      ]
    },
    {
      id: 3,
      title: "Content Creation Workflows with ChatGPT-4",
      description: "Build efficient content creation workflows using ChatGPT-4 for blogs, social media, and marketing.",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      duration: 60,
      difficulty: "intermediate",
      rating: 4.7,
      completedCount: 6780,
      commentsCount: 89,
      learningPoints: [
        "Content planning strategies",
        "Brand voice consistency",
        "Multi-format content creation",
        "Quality control processes"
      ]
    }
  ];

  const mockAlternatives = [
    {
      id: "claude-3",
      name: "Claude 3",
      category: "Conversational AI",
      logo: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=100&h=100&fit=crop",
      description: "Advanced AI assistant focused on helpful, harmless, and honest interactions with strong reasoning capabilities.",
      rating: 4.6,
      reviewCount: 8920,
      pricing: "$18/month",
      hasFreeTrial: true,
      hasApi: true,
      comparisonHighlights: [
        {
          feature: "Safety & Ethics",
          comparison: "better",
          description: "More robust safety measures and ethical guidelines built into responses."
        },
        {
          feature: "Reasoning Ability",
          comparison: "similar",
          description: "Comparable logical reasoning and problem-solving capabilities."
        },
        {
          feature: "Code Generation",
          comparison: "worse",
          description: "Less specialized in programming tasks compared to ChatGPT-4."
        }
      ],
      pros: [
        "Strong ethical guidelines",
        "Excellent reasoning capabilities",
        "Transparent about limitations",
        "Good for research tasks"
      ],
      cons: [
        "Smaller user community",
        "Fewer integrations available",
        "Less specialized for coding",
        "Limited plugin ecosystem"
      ],
      bestFor: ["Research", "Academic Writing", "Ethical AI Applications", "Content Analysis"]
    },
    {
      id: "gemini-pro",
      name: "Gemini Pro",
      category: "Multimodal AI",
      logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=100&h=100&fit=crop",
      description: "Google's multimodal AI model that can understand and generate text, images, and code with advanced reasoning.",
      rating: 4.4,
      reviewCount: 6540,
      pricing: "Free",
      hasFreeTrial: true,
      hasApi: true,
      comparisonHighlights: [
        {
          feature: "Multimodal Capabilities",
          comparison: "better",
          description: "Native support for text, images, and other media types in conversations."
        },
        {
          feature: "Google Integration",
          comparison: "better",
          description: "Seamless integration with Google Workspace and services."
        },
        {
          feature: "Community & Resources",
          comparison: "worse",
          description: "Smaller community and fewer third-party resources available."
        }
      ],
      pros: [
        "Free tier available",
        "Multimodal capabilities",
        "Google ecosystem integration",
        "Fast response times"
      ],
      cons: [
        "Newer platform with fewer features",
        "Limited customization options",
        "Smaller plugin ecosystem",
        "Less mature API"
      ],
      bestFor: ["Google Users", "Multimodal Projects", "Budget-Conscious Users", "Visual Content"]
    }
  ];

  const mockSuccessStories = [
    {
      id: 1,
      title: "Marketing Agency Scales Content Production by 300%",
      summary: "CreativeFlow Agency transformed their content workflow using ChatGPT-4, enabling them to serve 3x more clients while maintaining quality standards.",
      user: {
        name: "Sarah Chen",
        role: "Marketing Director",
        company: "CreativeFlow Agency",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
      },
      keyMetrics: [
        { label: "Content Increase", value: "300%", impact: "increased productivity" },
        { label: "Cost Reduction", value: "60%", impact: "reduced operational costs" },
        { label: "Time Saved", value: "15hrs/week", impact: "improved efficiency" },
        { label: "Client Satisfaction", value: "95%", impact: "improved quality" }
      ],
      useCases: ["Content Creation", "Marketing", "Client Services"],
      publishedDate: "July 2024",
      fullStory: `CreativeFlow Agency was struggling to meet growing client demands while maintaining their high content quality standards. The team was working overtime, and hiring additional writers wasn't financially viable.\n\nAfter implementing ChatGPT-4 into their workflow, they developed a systematic approach: AI-generated first drafts, human editing and refinement, and quality control processes. This hybrid approach allowed them to maintain their brand voice while dramatically increasing output.\n\nThe results exceeded expectations. Not only did they scale their content production by 300%, but client satisfaction scores actually improved due to faster turnaround times and more consistent quality. The cost savings allowed them to invest in better tools and team development.`
    },
    {
      id: 2,
      title: "Startup Reduces Development Time by 40%",
      summary: "TechStart Inc. leveraged ChatGPT-4 for code generation and debugging, accelerating their product development cycle significantly.",
      user: {
        name: "Alex Kumar",
        role: "CTO",
        company: "TechStart Inc.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      keyMetrics: [
        { label: "Development Speed", value: "40%", impact: "increased velocity" },
        { label: "Bug Reduction", value: "25%", impact: "improved code quality" },
        { label: "Learning Curve", value: "50%", impact: "reduced onboarding time" },
        { label: "Code Reviews", value: "30%", impact: "faster review process" }
      ],
      useCases: ["Programming", "Code Review", "Team Training"],
      publishedDate: "June 2024",
      fullStory: `TechStart Inc. was facing pressure to deliver their MVP quickly while maintaining code quality. With a small development team and tight deadlines, they needed to find ways to accelerate development without compromising standards.\n\nThey integrated ChatGPT-4 into their development workflow for code generation, debugging assistance, and code reviews. The AI helped junior developers learn faster and assisted senior developers with complex problem-solving.\n\nThe impact was immediate and significant. Development velocity increased by 40%, and the quality of code actually improved due to better debugging and review processes. The team could focus on architecture and business logic while AI handled routine coding tasks.`
    }
  ];

  const mockRelatedTools = [
    {
      id: "notion-ai",
      name: "Notion AI",
      category: "Productivity",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop",
      description: "AI-powered writing assistant integrated directly into Notion workspace for seamless productivity.",
      rating: 4.5,
      reviewCount: 3240,
      pricing: "$10/month",
      relationship: "complementary",
      synergy: "Perfect for organizing ChatGPT conversations and building knowledge bases from AI interactions."
    },
    {
      id: "zapier",
      name: "Zapier",
      category: "Automation",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
      description: "Automation platform that connects ChatGPT with thousands of other apps and services.",
      rating: 4.3,
      reviewCount: 12450,
      pricing: "$19.99/month",
      relationship: "integration",
      synergy: "Automate ChatGPT workflows and connect AI responses to your favorite tools."
    },
    {
      id: "perplexity",
      name: "Perplexity AI",
      category: "Search & Research",
      logo: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=100&h=100&fit=crop",
      description: "AI-powered search engine that provides accurate, real-time information with source citations.",
      rating: 4.4,
      reviewCount: 5680,
      pricing: "Free",
      relationship: "alternative",
      synergy: "Better for research tasks requiring current information and source verification."
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info', count: null },
    { id: 'reviews', label: 'Reviews', icon: 'Star', count: mockReviews?.length },
    { id: 'tutorials', label: 'Tutorials', icon: 'BookOpen', count: mockTutorials?.length },
    { id: 'alternatives', label: 'Alternatives', icon: 'ArrowLeftRight', count: mockAlternatives?.length }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setTool(mockTool);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [toolId]);

  const handleSaveToHub = (toolId) => {
    console.log('Saving tool to hub:', toolId);
    // Implementation for saving tool to user's hub
  };

  const handleVisitTool = () => {
    console.log('Visiting tool:', tool?.name);
    // Implementation for tracking and redirecting to tool
    window.open('https://chat.openai.com', '_blank');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab tool={tool} />;
      case 'reviews':
        return (
          <ReviewsTab 
            reviews={mockReviews} 
            overallRating={tool?.rating}
            ratingBreakdown={mockRatingBreakdown}
          />
        );
      case 'tutorials':
        return <TutorialsTab tutorials={mockTutorials} />;
      case 'alternatives':
        return <AlternativesTab alternatives={mockAlternatives} currentTool={tool} />;
      default:
        return <OverviewTab tool={tool} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-text-secondary">Loading tool details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-primary">Tool Not Found</h1>
            <p className="text-text-secondary">The requested tool could not be found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Tool Hero Section */}
        <ToolHero 
          tool={tool}
          onSaveToHub={handleSaveToHub}
          onVisitTool={handleVisitTool}
        />

        {/* Tab Navigation */}
        <TabNavigation 
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabs={tabs}
        />

        {/* Tab Content */}
        <div className="min-h-[60vh]">
          {renderTabContent()}
        </div>

        {/* Success Stories Section */}
        <SuccessStoriesSection successStories={mockSuccessStories} />

        {/* Related Tools Section */}
        <RelatedToolsSection 
          relatedTools={mockRelatedTools}
          currentTool={tool}
        />

        {/* Mobile Floating Bar */}
        <MobileFloatingBar 
          tool={tool}
          onSaveToHub={handleSaveToHub}
          onVisitTool={handleVisitTool}
        />
      </main>
    </div>
  );
};

export default ToolDetailPage;