import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SkillReplacementGuides = () => {
  const [selectedGuide, setSelectedGuide] = useState(0);

  const skillGuides = [
    {
      id: 1,
      title: "Replace Graphic Design Degree with AI Tools",
      description: "Complete pathway to professional design skills using AI-powered tools instead of traditional education",
      traditionalPath: {
        duration: "4 years",
        cost: "$120,000",
        timeToMarket: "4+ years"
      },
      aiPath: {
        duration: "6 months",
        cost: "$2,400",
        timeToMarket: "6 months"
      },
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=300&fit=crop",
      category: "Creative",
      difficulty: "Intermediate",
      completionRate: "87%",
      tools: ["Midjourney", "Figma", "Adobe Firefly", "Canva AI", "RunwayML"],
      modules: [
        {
          name: "AI Design Fundamentals",
          duration: "2 weeks",
          topics: ["Design principles", "Color theory", "Typography", "Composition"]
        },
        {
          name: "Midjourney Mastery",
          duration: "3 weeks", 
          topics: ["Prompt engineering", "Style consistency", "Brand guidelines", "Commercial usage"]
        },
        {
          name: "Figma + AI Integration",
          duration: "4 weeks",
          topics: ["UI/UX design", "Prototyping", "Design systems", "Collaboration"]
        },
        {
          name: "Portfolio Development",
          duration: "3 weeks",
          topics: ["Project curation", "Case studies", "Client presentation", "Freelance setup"]
        }
      ],
      outcomes: [
        "Create professional logos and branding",
        "Design complete UI/UX interfaces", 
        "Produce marketing materials and social media content",
        "Build a portfolio worth $50k+ annually"
      ],
      successStories: 156
    },
    {
      id: 2,
      title: "Replace MBA with AI Business Intelligence",
      description: "Develop strategic business acumen using AI analytics and decision-making tools",
      traditionalPath: {
        duration: "2 years",
        cost: "$200,000",
        timeToMarket: "2+ years"
      },
      aiPath: {
        duration: "8 months",
        cost: "$3,600",
        timeToMarket: "8 months"
      },
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=600&h=300&fit=crop",
      category: "Business",
      difficulty: "Advanced",
      completionRate: "74%",
      tools: ["ChatGPT", "Claude", "Tableau AI", "Power BI", "Notion AI"],
      modules: [
        {
          name: "AI-Powered Market Analysis",
          duration: "3 weeks",
          topics: ["Market research", "Competitive analysis", "Trend forecasting", "Consumer insights"]
        },
        {
          name: "Strategic Decision Making",
          duration: "4 weeks",
          topics: ["Business modeling", "Risk assessment", "Scenario planning", "ROI analysis"]
        },
        {
          name: "Financial Intelligence",
          duration: "3 weeks",
          topics: ["Financial modeling", "Investment analysis", "Budget optimization", "Performance metrics"]
        },
        {
          name: "Leadership & Communication",
          duration: "2 weeks",
          topics: ["Executive presentations", "Stakeholder management", "Team leadership", "Change management"]
        }
      ],
      outcomes: [
        "Analyze markets with AI-powered insights",
        "Create comprehensive business strategies",
        "Build financial models and forecasts",
        "Lead data-driven decision making"
      ],
      successStories: 89
    },
    {
      id: 3,
      title: "Replace Computer Science Degree with AI Development",
      description: "Master software development using AI coding assistants and automated tools",
      traditionalPath: {
        duration: "4 years",
        cost: "$160,000",
        timeToMarket: "4+ years"
      },
      aiPath: {
        duration: "10 months",
        cost: "$4,800",
        timeToMarket: "10 months"
      },
      image: "https://images.pixabay.com/photos/2016/11/30/20/58/programming-1873854_1280.jpg?w=600&h=300&fit=crop",
      category: "Technology",
      difficulty: "Advanced",
      completionRate: "82%",
      tools: ["GitHub Copilot", "ChatGPT", "Claude", "Cursor", "Replit AI"],
      modules: [
        {
          name: "AI-Assisted Programming Fundamentals",
          duration: "4 weeks",
          topics: ["Programming concepts", "AI pair programming", "Code review", "Debugging"]
        },
        {
          name: "Full-Stack Development with AI",
          duration: "8 weeks",
          topics: ["Frontend frameworks", "Backend development", "Database design", "API creation"]
        },
        {
          name: "AI Integration & Deployment",
          duration: "6 weeks",
          topics: ["ML model integration", "Cloud deployment", "DevOps automation", "Performance optimization"]
        },
        {
          name: "Portfolio & Career Preparation",
          duration: "4 weeks",
          topics: ["Project showcase", "Technical interviews", "Open source contribution", "Freelance/job search"]
        }
      ],
      outcomes: [
        "Build full-stack applications with AI assistance",
        "Integrate AI/ML models into software",
        "Deploy scalable cloud applications",
        "Earn $80k+ as an AI-assisted developer"
      ],
      successStories: 234
    }
  ];

  const currentGuide = skillGuides?.[selectedGuide];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Creative': return 'text-purple-600 bg-purple-100';
      case 'Business': return 'text-blue-600 bg-blue-100';
      case 'Technology': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="GraduationCap" size={24} className="text-accent" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Skill Replacement Guides
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive pathways for developing professional skills using AI tools instead of traditional education
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Guide Selection */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl shadow-soft p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">
                Available Guides
              </h3>
              <div className="space-y-3">
                {skillGuides?.map((guide, index) => (
                  <button
                    key={guide?.id}
                    onClick={() => setSelectedGuide(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      selectedGuide === index
                        ? 'bg-accent text-accent-foreground shadow-sm'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm line-clamp-2">
                        {guide?.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(guide?.category)}`}>
                          {guide?.category}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs opacity-80">
                        <Icon name="Users" size={12} />
                        <span>{guide?.successStories} success stories</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Guide Details */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-xl shadow-soft overflow-hidden">
              {/* Header */}
              <div className="relative">
                <Image
                  src={currentGuide?.image}
                  alt={currentGuide?.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(currentGuide?.category)}`}>
                      {currentGuide?.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(currentGuide?.difficulty)}`}>
                      {currentGuide?.difficulty}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {currentGuide?.title}
                  </h3>
                  <p className="text-white/90">
                    {currentGuide?.description}
                  </p>
                </div>
              </div>

              <div className="p-8">
                {/* Comparison */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-card-foreground mb-6">
                    Traditional vs AI-Powered Path
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Traditional Path */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Icon name="School" size={20} className="text-red-600" />
                        <h5 className="font-semibold text-red-800">Traditional Education</h5>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-red-700">Duration:</span>
                          <span className="font-medium text-red-800">{currentGuide?.traditionalPath?.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-red-700">Cost:</span>
                          <span className="font-medium text-red-800">{currentGuide?.traditionalPath?.cost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-red-700">Time to Market:</span>
                          <span className="font-medium text-red-800">{currentGuide?.traditionalPath?.timeToMarket}</span>
                        </div>
                      </div>
                    </div>

                    {/* AI Path */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Icon name="Zap" size={20} className="text-green-600" />
                        <h5 className="font-semibold text-green-800">AI-Powered Learning</h5>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-green-700">Duration:</span>
                          <span className="font-medium text-green-800">{currentGuide?.aiPath?.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-green-700">Cost:</span>
                          <span className="font-medium text-green-800">{currentGuide?.aiPath?.cost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-green-700">Time to Market:</span>
                          <span className="font-medium text-green-800">{currentGuide?.aiPath?.timeToMarket}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Learning Modules */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-card-foreground mb-6">
                    Learning Modules
                  </h4>
                  <div className="space-y-4">
                    {currentGuide?.modules?.map((module, index) => (
                      <div key={index} className="border border-border rounded-lg p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h5 className="font-semibold text-card-foreground">{module.name}</h5>
                          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                            {module.duration}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {module.topics?.map((topic, topicIndex) => (
                            <span key={topicIndex} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Outcomes */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Tools */}
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                      <Icon name="Wrench" size={20} className="mr-2 text-accent" />
                      Required Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentGuide?.tools?.map((tool, index) => (
                        <span key={index} className="bg-accent/10 text-accent px-3 py-2 rounded-lg text-sm font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                      <Icon name="Target" size={20} className="mr-2 text-accent" />
                      Learning Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {currentGuide?.outcomes?.map((outcome, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Stats & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={16} />
                      <span>{currentGuide?.successStories} success stories</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" size={16} />
                      <span>{currentGuide?.completionRate} completion rate</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button variant="outline">
                      <Icon name="Download" size={16} className="mr-2" />
                      Download Guide
                    </Button>
                    <Button variant="default">
                      <Icon name="Play" size={16} className="mr-2" />
                      Start Learning
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillReplacementGuides;