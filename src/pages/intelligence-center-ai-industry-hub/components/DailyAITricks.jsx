import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DailyAITricks = () => {
  const [selectedTrick, setSelectedTrick] = useState(0);

  const dailyTricks = [
    {
      id: 1,
      title: "ChatGPT Prompt Engineering: The STAR Method",
      description: "Use Situation, Task, Action, Result framework to get more structured and actionable responses from AI assistants.",
      timeInvestment: "5 minutes",
      difficultyLevel: "Beginner",
      category: "Prompt Engineering",
      steps: [
        "Start with Situation: Describe the context clearly",
        "Define the Task: What specific outcome you need",
        "Specify Action: What approach or method to use",
        "Expected Result: What format you want the response in"
      ],
      example: `Situation: I'm a marketing manager preparing a product launch\nTask: Create a social media strategy\nAction: Focus on Instagram and LinkedIn with video content\nResult: Provide a 30-day posting calendar with captions`,
      tools: ["ChatGPT", "Claude", "Gemini"],
      impact: "3x better response quality"
    },
    {
      id: 2,
      title: "Notion AI: Smart Database Auto-Population",
      description: "Automatically populate database properties using AI formulas to save hours of manual data entry.",
      timeInvestment: "10 minutes",
      difficultyLevel: "Intermediate",
      category: "Productivity",
      steps: [
        "Create a new database property with \'Formula\' type",
        "Use prop() function to reference existing properties",
        "Add AI-powered formulas for smart categorization",
        "Set up templates with pre-configured AI formulas"
      ],
      example: `Formula: if(contains(prop("Title"), "Meeting"), "📅 Meeting", if(contains(prop("Title"), "Project"), "🚀 Project", "📝 Note"))`,
      tools: ["Notion AI"],
      impact: "Save 2 hours daily"
    },
    {
      id: 3,
      title: "Midjourney: Advanced Style Consistency",
      description: "Maintain consistent visual style across multiple images using style references and character consistency.",
      timeInvestment: "15 minutes",
      difficultyLevel: "Advanced",
      category: "Creative",
      steps: [
        "Create a style reference image with --sref parameter",
        "Use --cref for character consistency across images",
        "Combine with --sw (style weight) for fine control",
        "Save successful combinations as custom styles"
      ],
      example: `/imagine professional headshot --sref [reference_url] --cref [character_url] --sw 50 --ar 1:1`,
      tools: ["Midjourney", "Discord"],
      impact: "Professional consistency"
    },
    {
      id: 4,
      title: "Claude: Code Review Automation",
      description: "Set up Claude to automatically review your code for bugs, security issues, and optimization opportunities.",
      timeInvestment: "8 minutes",
      difficultyLevel: "Intermediate",
      category: "Development",
      steps: [
        "Create a code review template prompt",
        "Include specific criteria: security, performance, readability",
        "Ask for specific improvement suggestions",
        "Request refactored code examples"
      ],
      example: `Please review this code for:\n1. Security vulnerabilities\n2. Performance optimizations\n3. Code readability\n4. Best practices\n\nProvide specific suggestions and refactored examples.`,
      tools: ["Claude", "VS Code"],
      impact: "Catch 80% more issues"
    },
    {
      id: 5,
      title: "Zapier AI: Smart Workflow Triggers",
      description: "Use AI to intelligently categorize and route incoming data based on content analysis.",
      timeInvestment: "12 minutes",
      difficultyLevel: "Advanced",
      category: "Automation",
      steps: [
        "Set up a Zapier trigger for incoming data",
        "Add AI text analysis step",
        "Create conditional logic based on AI analysis",
        "Route to different actions based on categories"
      ],
      example: `Email → AI Analysis → If "urgent" → Slack notification + Calendar block\nIf "inquiry" → CRM + Auto-response\nIf "support" → Ticket system`,
      tools: ["Zapier", "OpenAI", "Various Apps"],
      impact: "90% automation rate"
    }
  ];

  const currentTrick = dailyTricks?.[selectedTrick];

  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Prompt Engineering': return 'MessageSquare';
      case 'Productivity': return 'Zap';
      case 'Creative': return 'Palette';
      case 'Development': return 'Code';
      case 'Automation': return 'Settings';
      default: return 'Lightbulb';
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Lightbulb" size={24} className="text-accent" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Daily AI Tricks
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical tips you can implement immediately to boost your AI productivity
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tricks List */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">
                Today's Tricks
              </h3>
              <div className="space-y-3">
                {dailyTricks?.map((trick, index) => (
                  <button
                    key={trick?.id}
                    onClick={() => setSelectedTrick(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      selectedTrick === index
                        ? 'bg-accent text-accent-foreground shadow-sm'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        selectedTrick === index ? 'bg-accent-foreground/20' : 'bg-accent/20'
                      }`}>
                        <Icon 
                          name={getCategoryIcon(trick?.category)} 
                          size={16} 
                          className={selectedTrick === index ? 'text-accent-foreground' : 'text-accent'}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">
                          {trick?.title}
                        </h4>
                        <div className="flex items-center space-x-2 text-xs opacity-80">
                          <span>{trick?.timeInvestment}</span>
                          <span>•</span>
                          <span>{trick?.difficultyLevel}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Trick Details */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl shadow-soft overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-6 border-b border-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <Icon name={getCategoryIcon(currentTrick?.category)} size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-1">
                        {currentTrick?.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {currentTrick?.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-muted-foreground" />
                    <span className="font-medium">{currentTrick?.timeInvestment}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(currentTrick?.difficultyLevel)}`}>
                    {currentTrick?.difficultyLevel}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Target" size={16} className="text-green-600" />
                    <span className="font-medium text-green-600">{currentTrick?.impact}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Steps */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                    <Icon name="List" size={20} className="mr-2 text-accent" />
                    Step-by-Step Guide
                  </h4>
                  <div className="space-y-3">
                    {currentTrick?.steps?.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-muted-foreground">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Example */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                    <Icon name="Code" size={20} className="mr-2 text-accent" />
                    Example
                  </h4>
                  <div className="bg-muted rounded-lg p-4">
                    <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-mono">
                      {currentTrick?.example}
                    </pre>
                  </div>
                </div>

                {/* Tools & Actions */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-card-foreground mb-2">Compatible Tools</h4>
                    <div className="flex items-center space-x-2">
                      {currentTrick?.tools?.map((tool, index) => (
                        <span key={index} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="sm">
                      <Icon name="Bookmark" size={16} className="mr-2" />
                      Save
                    </Button>
                    <Button variant="default" size="sm">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Try Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-8 border border-accent/20">
            <Icon name="Mail" size={32} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-card-foreground mb-2">
              Get Daily AI Tricks in Your Inbox
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Join 50,000+ professionals receiving practical AI tips every morning
            </p>
            <div className="flex items-center justify-center space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="default">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Free forever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyAITricks;