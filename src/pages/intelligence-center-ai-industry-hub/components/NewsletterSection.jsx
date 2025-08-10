import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('weekly');
  const [selectedTopics, setSelectedTopics] = useState(['ai-news', 'tool-reviews']);

  const frequencyOptions = [
    { id: 'daily', name: 'Daily Digest', description: 'Latest updates every morning' },
    { id: 'weekly', name: 'Weekly Roundup', description: 'Curated highlights every Friday' },
    { id: 'monthly', name: 'Monthly Deep Dive', description: 'Comprehensive analysis monthly' }
  ];

  const topicOptions = [
    { id: 'ai-news', name: 'AI News', icon: 'Newspaper', subscribers: '45K' },
    { id: 'tool-reviews', name: 'Tool Reviews', icon: 'Star', subscribers: '38K' },
    { id: 'industry-reports', name: 'Industry Reports', icon: 'BarChart3', subscribers: '29K' },
    { id: 'expert-insights', name: 'Expert Insights', icon: 'Users', subscribers: '33K' },
    { id: 'daily-tricks', name: 'Daily AI Tricks', icon: 'Lightbulb', subscribers: '52K' },
    { id: 'funding-news', name: 'Funding & Investments', icon: 'DollarSign', subscribers: '21K' }
  ];

  const exclusiveContent = [
    {
      title: "The AI Tools Market Report 2024",
      description: "Comprehensive analysis of market trends, key players, and future predictions",
      type: "Report",
      icon: "FileText"
    },
    {
      title: "Weekly Founder Interviews",
      description: "Exclusive conversations with AI startup founders and industry leaders",
      type: "Interview",
      icon: "Mic"
    },
    {
      title: "Early Access Tool Reviews",
      description: "Get first look at new AI tools before they\'re publicly available",
      type: "Preview",
      icon: "Eye"
    },
    {
      title: "Investment Opportunity Alerts",
      description: "Curated list of promising AI startups and investment opportunities",
      type: "Alert",
      icon: "TrendingUp"
    }
  ];

  const handleTopicToggle = (topicId) => {
    setSelectedTopics(prev => 
      prev?.includes(topicId) 
        ? prev?.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log('Subscribing with:', { email, frequency: selectedFrequency, topics: selectedTopics });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={24} className="text-accent" />
                <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  50,000+ Subscribers
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Stay Ahead of the AI Curve
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Join industry leaders, entrepreneurs, and AI enthusiasts who rely on our intelligence reports to make informed decisions in the rapidly evolving AI landscape.
              </p>
            </div>

            {/* Exclusive Content Preview */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Exclusive Subscriber Content
              </h3>
              <div className="grid gap-4">
                {exclusiveContent?.map((content, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white/60 rounded-lg border border-white/80">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon name={content?.icon} size={16} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-foreground text-sm">{content?.title}</h4>
                        <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                          {content?.type}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{content?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-6 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-xs text-muted-foreground">Open Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4.9</div>
                <div className="text-xs text-muted-foreground">Avg Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-xs text-muted-foreground">Subscribers</div>
              </div>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="bg-white rounded-2xl shadow-elevated p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Subscribe to AI Intelligence
                </h3>
                <p className="text-muted-foreground">
                  Customize your subscription to get exactly what you need
                </p>
              </div>

              {/* Email Input */}
              <div>
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="Enter your professional email"
                  value={email}
                  onChange={(e) => setEmail(e?.target?.value)}
                  required
                />
              </div>

              {/* Frequency Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Delivery Frequency
                </label>
                <div className="space-y-2">
                  {frequencyOptions?.map((option) => (
                    <button
                      key={option?.id}
                      onClick={() => setSelectedFrequency(option?.id)}
                      className={`w-full text-left p-3 rounded-lg border transition-all duration-300 ${
                        selectedFrequency === option?.id
                          ? 'border-accent bg-accent/10 text-accent' :'border-border hover:border-accent/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm">{option?.name}</div>
                          <div className="text-xs opacity-80">{option?.description}</div>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedFrequency === option?.id
                            ? 'border-accent bg-accent' :'border-muted-foreground'
                        }`}>
                          {selectedFrequency === option?.id && (
                            <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Topic Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Content Topics (Select multiple)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {topicOptions?.map((topic) => (
                    <button
                      key={topic?.id}
                      onClick={() => handleTopicToggle(topic?.id)}
                      className={`p-3 rounded-lg border transition-all duration-300 ${
                        selectedTopics?.includes(topic?.id)
                          ? 'border-accent bg-accent/10 text-accent' :'border-border hover:border-accent/50'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon name={topic?.icon} size={16} />
                        <div className="text-left flex-1">
                          <div className="font-medium text-xs">{topic?.name}</div>
                          <div className="text-xs opacity-80">{topic?.subscribers}</div>
                        </div>
                        {selectedTopics?.includes(topic?.id) && (
                          <Icon name="Check" size={14} className="text-accent" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Subscribe Button */}
              <Button 
                variant="default" 
                fullWidth 
                className="bg-accent hover:bg-accent/90"
                onClick={handleSubscribe}
              >
                <Icon name="Mail" size={18} className="mr-2" />
                Subscribe to Intelligence Feed
              </Button>

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Unsubscribe at any time. No spam, ever.
                <br />
                <a href="#" className="text-accent hover:underline">Privacy Policy</a> • 
                <a href="#" className="text-accent hover:underline ml-1">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            What Our Subscribers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "The daily AI tricks alone have saved me 10+ hours per week. This newsletter is pure gold for anyone serious about AI.",
                author: "Sarah Chen",
                role: "Product Manager at TechCorp",
                avatar: "https://randomuser.me/api/portraits/women/32.jpg"
              },
              {
                quote: "Best source for staying updated on AI tools and industry trends. The exclusive interviews are incredibly valuable.",
                author: "Michael Rodriguez",
                role: "AI Consultant",
                avatar: "https://randomuser.me/api/portraits/men/45.jpg"
              },
              {
                quote: "The investment alerts helped me discover three promising AI startups before they went mainstream. Highly recommended!",
                author: "Emma Thompson",
                role: "Venture Capitalist",
                avatar: "https://randomuser.me/api/portraits/women/28.jpg"
              }
            ]?.map((testimonial, index) => (
              <div key={index} className="bg-white/80 rounded-xl p-6 border border-white/80">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 italic">
                  "{testimonial?.quote}"
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-foreground text-sm">{testimonial?.author}</div>
                    <div className="text-muted-foreground text-xs">{testimonial?.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;