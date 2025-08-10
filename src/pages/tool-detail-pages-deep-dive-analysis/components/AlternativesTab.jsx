import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AlternativesTab = ({ alternatives, currentTool }) => {
  const [comparisonMode, setComparisonMode] = useState(false);
  const [selectedAlternatives, setSelectedAlternatives] = useState([]);

  const toggleComparison = (toolId) => {
    setSelectedAlternatives(prev => 
      prev?.includes(toolId) 
        ? prev?.filter(id => id !== toolId)
        : prev?.length < 3 ? [...prev, toolId] : prev
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={14}
        className={`${
          index < rating ? 'text-warning fill-current' : 'text-border'
        }`}
      />
    ));
  };

  const getPricingColor = (pricing) => {
    if (pricing === 'Free') return 'text-success';
    if (pricing?.includes('$0')) return 'text-success';
    return 'text-primary';
  };

  const getComparisonIcon = (comparison) => {
    switch (comparison) {
      case 'better':
        return { icon: 'TrendingUp', color: 'text-success' };
      case 'worse':
        return { icon: 'TrendingDown', color: 'text-error' };
      case 'similar':
        return { icon: 'Minus', color: 'text-warning' };
      default:
        return { icon: 'Minus', color: 'text-text-secondary' };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-primary">Alternative Tools</h2>
            <p className="text-text-secondary">
              Compare {currentTool?.name} with similar AI tools in the market
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant={comparisonMode ? "default" : "outline"}
              onClick={() => setComparisonMode(!comparisonMode)}
              iconName="BarChart3"
              iconPosition="left"
            >
              {comparisonMode ? 'Exit Comparison' : 'Compare Tools'}
            </Button>
            {comparisonMode && selectedAlternatives?.length > 0 && (
              <Button
                variant="default"
                className="bg-cta hover:bg-cta/90"
                iconName="ExternalLink"
                iconPosition="right"
              >
                View Detailed Comparison
              </Button>
            )}
          </div>
        </div>

        {/* Comparison Notice */}
        {comparisonMode && (
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <Icon name="Info" size={20} className="text-accent" />
              <div>
                <h3 className="font-semibold text-accent">Comparison Mode Active</h3>
                <p className="text-sm text-accent/80">
                  Select up to 3 alternatives to compare with {currentTool?.name}. 
                  Currently selected: {selectedAlternatives?.length}/3
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Alternatives Grid */}
        <div className="grid gap-6">
          {alternatives?.map((alternative) => (
            <div 
              key={alternative?.id} 
              className={`bg-surface rounded-xl p-6 hover:shadow-soft transition-all duration-250 ${
                comparisonMode && selectedAlternatives?.includes(alternative?.id)
                  ? 'ring-2 ring-accent shadow-soft'
                  : ''
              }`}
            >
              <div className="grid lg:grid-cols-12 gap-6 items-start">
                {/* Tool Info */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-background rounded-xl flex items-center justify-center shadow-soft">
                      <Image
                        src={alternative?.logo}
                        alt={`${alternative?.name} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary">{alternative?.name}</h3>
                      <p className="text-text-secondary">{alternative?.category}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex space-x-1">
                          {renderStars(alternative?.rating)}
                        </div>
                        <span className="text-sm text-text-secondary">
                          ({alternative?.reviewCount})
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary">{alternative?.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-primary">
                      <span className={getPricingColor(alternative?.pricing)}>
                        {alternative?.pricing}
                      </span>
                    </div>
                    {comparisonMode ? (
                      <Button
                        variant={selectedAlternatives?.includes(alternative?.id) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleComparison(alternative?.id)}
                        disabled={!selectedAlternatives?.includes(alternative?.id) && selectedAlternatives?.length >= 3}
                        iconName={selectedAlternatives?.includes(alternative?.id) ? "Check" : "Plus"}
                      >
                        {selectedAlternatives?.includes(alternative?.id) ? 'Selected' : 'Compare'}
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="ExternalLink"
                      >
                        Visit Tool
                      </Button>
                    )}
                  </div>
                </div>

                {/* Comparison Highlights */}
                <div className="lg:col-span-8">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {alternative?.comparisonHighlights?.map((highlight, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Icon 
                            name={getComparisonIcon(highlight?.comparison)?.icon} 
                            size={16} 
                            className={getComparisonIcon(highlight?.comparison)?.color}
                          />
                          <h4 className="font-medium text-primary">{highlight?.feature}</h4>
                        </div>
                        <p className="text-sm text-text-secondary">{highlight?.description}</p>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-text-secondary">vs {currentTool?.name}:</span>
                          <span className={`text-xs font-medium ${
                            highlight?.comparison === 'better' ? 'text-success' :
                            highlight?.comparison === 'worse'? 'text-error' : 'text-warning'
                          }`}>
                            {highlight?.comparison === 'better' ? 'Better' :
                             highlight?.comparison === 'worse'? 'Weaker' : 'Similar'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pros and Cons */}
                  <div className="grid sm:grid-cols-2 gap-6 mt-6 pt-6 border-t border-border">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-success flex items-center space-x-2">
                        <Icon name="Plus" size={16} />
                        <span>Advantages</span>
                      </h4>
                      <ul className="space-y-2">
                        {alternative?.pros?.map((pro, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Icon name="Check" size={14} className="text-success flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-text-secondary">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-error flex items-center space-x-2">
                        <Icon name="Minus" size={16} />
                        <span>Limitations</span>
                      </h4>
                      <ul className="space-y-2">
                        {alternative?.cons?.map((con, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Icon name="X" size={14} className="text-error flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-text-secondary">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold text-primary mb-3">Best For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {alternative?.bestFor?.map((useCase, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Comparison Table */}
        <div className="bg-surface rounded-xl p-6">
          <h3 className="text-xl font-semibold text-primary mb-6">Quick Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-primary">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-primary">{currentTool?.name}</th>
                  {alternatives?.slice(0, 3)?.map((alt) => (
                    <th key={alt?.id} className="text-center py-3 px-4 font-semibold text-primary">
                      {alt?.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-text-secondary">Starting Price</td>
                  <td className="py-3 px-4 text-center font-medium text-primary">
                    {currentTool?.pricing?.startingPrice === 'Free' ? 'Free' : `$${currentTool?.pricing?.startingPrice}`}
                  </td>
                  {alternatives?.slice(0, 3)?.map((alt) => (
                    <td key={alt?.id} className="py-3 px-4 text-center font-medium text-primary">
                      {alt?.pricing}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-text-secondary">Free Trial</td>
                  <td className="py-3 px-4 text-center">
                    {currentTool?.pricing?.hasFreeTrial ? (
                      <Icon name="Check" size={16} className="text-success mx-auto" />
                    ) : (
                      <Icon name="X" size={16} className="text-error mx-auto" />
                    )}
                  </td>
                  {alternatives?.slice(0, 3)?.map((alt) => (
                    <td key={alt?.id} className="py-3 px-4 text-center">
                      {alt?.hasFreeTrial ? (
                        <Icon name="Check" size={16} className="text-success mx-auto" />
                      ) : (
                        <Icon name="X" size={16} className="text-error mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 text-text-secondary">User Rating</td>
                  <td className="py-3 px-4 text-center font-medium text-primary">
                    {currentTool?.rating}/5
                  </td>
                  {alternatives?.slice(0, 3)?.map((alt) => (
                    <td key={alt?.id} className="py-3 px-4 text-center font-medium text-primary">
                      {alt?.rating}/5
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-text-secondary">API Access</td>
                  <td className="py-3 px-4 text-center">
                    <Icon name="Check" size={16} className="text-success mx-auto" />
                  </td>
                  {alternatives?.slice(0, 3)?.map((alt) => (
                    <td key={alt?.id} className="py-3 px-4 text-center">
                      {alt?.hasApi ? (
                        <Icon name="Check" size={16} className="text-success mx-auto" />
                      ) : (
                        <Icon name="X" size={16} className="text-error mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            View More Alternatives
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlternativesTab;