import React, { useState } from 'react';
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrendVisualization = () => {
  const [activeChart, setActiveChart] = useState('adoption');

  const adoptionData = [
    { month: 'Jan', enterprise: 45, startup: 78, individual: 92 },
    { month: 'Feb', enterprise: 52, startup: 85, individual: 98 },
    { month: 'Mar', enterprise: 61, startup: 91, individual: 105 },
    { month: 'Apr', enterprise: 68, startup: 97, individual: 112 },
    { month: 'May', enterprise: 75, startup: 103, individual: 118 },
    { month: 'Jun', enterprise: 83, startup: 109, individual: 125 },
    { month: 'Jul', enterprise: 91, startup: 115, individual: 132 },
    { month: 'Aug', enterprise: 98, startup: 121, individual: 138 }
  ];

  const categoryData = [
    { name: 'Content Generation', value: 28, color: '#06B6D4' },
    { name: 'Code Assistance', value: 22, color: '#10B981' },
    { name: 'Image Creation', value: 18, color: '#8B5CF6' },
    { name: 'Data Analysis', value: 15, color: '#F59E0B' },
    { name: 'Automation', value: 10, color: '#EF4444' },
    { name: 'Others', value: 7, color: '#6B7280' }
  ];

  const investmentData = [
    { quarter: 'Q1 2023', funding: 2.1, deals: 45 },
    { quarter: 'Q2 2023', funding: 3.4, deals: 62 },
    { quarter: 'Q3 2023', funding: 4.8, deals: 78 },
    { quarter: 'Q4 2023', funding: 6.2, deals: 89 },
    { quarter: 'Q1 2024', funding: 8.1, deals: 95 },
    { quarter: 'Q2 2024', funding: 11.3, deals: 112 },
    { quarter: 'Q3 2024', funding: 15.7, deals: 128 }
  ];

  const industryHeatmapData = [
    { industry: 'Technology', adoption: 95, growth: 23 },
    { industry: 'Marketing', adoption: 87, growth: 31 },
    { industry: 'Finance', adoption: 78, growth: 18 },
    { industry: 'Healthcare', adoption: 65, growth: 42 },
    { industry: 'Education', adoption: 72, growth: 28 },
    { industry: 'Retail', adoption: 69, growth: 35 },
    { industry: 'Manufacturing', adoption: 54, growth: 15 },
    { industry: 'Legal', adoption: 48, growth: 38 }
  ];

  const chartConfigs = [
    {
      id: 'adoption',
      title: 'AI Tool Adoption Trends',
      description: 'Monthly adoption rates across different user segments',
      icon: 'TrendingUp'
    },
    {
      id: 'categories',
      title: 'Tool Category Distribution',
      description: 'Market share by AI tool categories',
      icon: 'PieChart'
    },
    {
      id: 'investment',
      title: 'Investment & Funding Trends',
      description: 'Quarterly funding and deal volume in AI tools sector',
      icon: 'DollarSign'
    },
    {
      id: 'heatmap',
      title: 'Industry Adoption Heatmap',
      description: 'AI adoption rates and growth by industry',
      icon: 'Grid3X3'
    }
  ];

  const renderChart = () => {
    switch (activeChart) {
      case 'adoption':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={adoptionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" stroke="#64748B" />
              <YAxis stroke="#64748B" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E2E8F0', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Area type="monotone" dataKey="individual" stackId="1" stroke="#06B6D4" fill="#06B6D4" fillOpacity={0.8} />
              <Area type="monotone" dataKey="startup" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.8} />
              <Area type="monotone" dataKey="enterprise" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.8} />
            </AreaChart>
          </ResponsiveContainer>
        );

      case 'categories':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100)?.toFixed(0)}%`}
              >
                {categoryData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry?.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );

      case 'investment':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={investmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="quarter" stroke="#64748B" />
              <YAxis yAxisId="left" stroke="#64748B" />
              <YAxis yAxisId="right" orientation="right" stroke="#64748B" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E2E8F0', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Bar yAxisId="right" dataKey="deals" fill="#10B981" opacity={0.7} />
              <Line yAxisId="left" type="monotone" dataKey="funding" stroke="#06B6D4" strokeWidth={3} dot={{ fill: '#06B6D4', strokeWidth: 2, r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'heatmap':
        return (
          <div className="space-y-4">
            {industryHeatmapData?.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-24 text-sm font-medium text-muted-foreground">
                  {item?.industry}
                </div>
                <div className="flex-1 flex items-center space-x-2">
                  <div className="flex-1 bg-muted rounded-full h-6 relative overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full transition-all duration-1000"
                      style={{ width: `${item?.adoption}%` }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                      {item?.adoption}% adoption
                    </div>
                  </div>
                  <div className="w-16 text-right">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      item?.growth > 30 ? 'bg-green-100 text-green-700' :
                      item?.growth > 20 ? 'bg-yellow-100 text-yellow-700': 'bg-red-100 text-red-700'
                    }`}>
                      +{item?.growth}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const currentConfig = chartConfigs?.find(config => config?.id === activeChart);

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="BarChart3" size={24} className="text-accent" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Market Intelligence
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time data visualization of AI tool trends, adoption patterns, and market dynamics
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Chart Selection */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl shadow-soft p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">
                Analytics Dashboard
              </h3>
              <div className="space-y-2">
                {chartConfigs?.map((config) => (
                  <button
                    key={config?.id}
                    onClick={() => setActiveChart(config?.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeChart === config?.id
                        ? 'bg-accent text-accent-foreground shadow-sm'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        activeChart === config?.id ? 'bg-accent-foreground/20' : 'bg-accent/20'
                      }`}>
                        <Icon 
                          name={config?.icon} 
                          size={16} 
                          className={activeChart === config?.id ? 'text-accent-foreground' : 'text-accent'}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm mb-1">
                          {config?.title}
                        </h4>
                        <p className="text-xs opacity-80 line-clamp-2">
                          {config?.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-sm font-semibold text-card-foreground mb-4">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Total Tools Tracked</span>
                    <span className="font-semibold">2,847</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">New This Month</span>
                    <span className="font-semibold text-green-600">+156</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Market Growth</span>
                    <span className="font-semibold text-blue-600">+34%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Active Users</span>
                    <span className="font-semibold">1.2M+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Display */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-xl shadow-soft overflow-hidden">
              {/* Chart Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-1">
                      {currentConfig?.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {currentConfig?.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Icon name="Download" size={16} className="mr-2" />
                      Export
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Share2" size={16} className="mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>

              {/* Chart Content */}
              <div className="p-6">
                {renderChart()}
              </div>

              {/* Chart Footer */}
              <div className="px-6 py-4 bg-muted/30 border-t border-border">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>Updated 2 hours ago</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Database" size={14} />
                      <span>Data from 500+ sources</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="TrendingUp" size={14} />
                    <span>Live data feed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Insights Panel */}
            <div className="mt-6 bg-card rounded-xl shadow-soft p-6">
              <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                <Icon name="Lightbulb" size={20} className="mr-2 text-accent" />
                Key Insights
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-medium text-card-foreground text-sm">Enterprise Adoption Accelerating</h5>
                      <p className="text-xs text-muted-foreground">98% growth in enterprise AI tool adoption over the last quarter</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-medium text-card-foreground text-sm">Content Generation Dominates</h5>
                      <p className="text-xs text-muted-foreground">28% of all AI tools focus on content creation and generation</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-medium text-card-foreground text-sm">Healthcare Shows Highest Growth</h5>
                      <p className="text-xs text-muted-foreground">42% year-over-year growth in healthcare AI tool adoption</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-medium text-card-foreground text-sm">Investment Surge Continues</h5>
                      <p className="text-xs text-muted-foreground">$15.7B invested in AI tools sector in Q3 2024</p>
                    </div>
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

export default TrendVisualization;