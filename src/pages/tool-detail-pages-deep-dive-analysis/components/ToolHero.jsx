import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ToolHero = ({ tool, onSaveToHub, onVisitTool }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveToHub = () => {
    setIsSaved(!isSaved);
    onSaveToHub(tool?.id);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === tool?.screenshots?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? tool?.screenshots?.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tool Screenshots */}
          <div className="space-y-4">
            <div className="relative bg-surface rounded-xl overflow-hidden shadow-soft">
              <div className="aspect-video relative">
                <Image
                  src={tool?.screenshots?.[currentImageIndex]}
                  alt={`${tool?.name} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {tool?.screenshots?.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur-soft rounded-full flex items-center justify-center hover:bg-background transition-colors duration-250 shadow-soft"
                    >
                      <Icon name="ChevronLeft" size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur-soft rounded-full flex items-center justify-center hover:bg-background transition-colors duration-250 shadow-soft"
                    >
                      <Icon name="ChevronRight" size={20} />
                    </button>
                  </>
                )}
                
                <div className="absolute top-4 right-4">
                  <div className="bg-background/90 backdrop-blur-soft px-3 py-1 rounded-full text-sm font-medium">
                    {currentImageIndex + 1} / {tool?.screenshots?.length}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            {tool?.screenshots?.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {tool?.screenshots?.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-250 ${
                      index === currentImageIndex
                        ? 'border-accent shadow-soft'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <Image
                      src={screenshot}
                      alt={`${tool?.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Tool Information */}
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-surface rounded-xl flex items-center justify-center shadow-soft">
                  <Image
                    src={tool?.logo}
                    alt={`${tool?.name} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-primary">{tool?.name}</h1>
                  <p className="text-text-secondary font-medium">{tool?.category}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={16} className="text-warning fill-current" />
                  <span className="font-semibold">{tool?.rating}</span>
                  <span className="text-text-secondary">({tool?.reviewCount})</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-text-secondary leading-relaxed">
              {tool?.description}
            </p>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {tool?.keyFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-surface rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-primary">Pricing</h3>
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-primary">
                  {tool?.pricing?.startingPrice === 'Free' ? 'Free' : `$${tool?.pricing?.startingPrice}`}
                </div>
                {tool?.pricing?.startingPrice !== 'Free' && (
                  <div className="text-text-secondary">
                    /{tool?.pricing?.billingCycle}
                  </div>
                )}
              </div>
              {tool?.pricing?.hasFreeTrial && (
                <div className="flex items-center space-x-2">
                  <Icon name="Gift" size={16} className="text-success" />
                  <span className="text-sm text-success font-medium">Free trial available</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="default"
                size="lg"
                onClick={onVisitTool}
                className="bg-cta hover:bg-cta/90 flex-1"
                iconName="ExternalLink"
                iconPosition="right"
              >
                Visit Tool
              </Button>
              <Button
                variant={isSaved ? "default" : "outline"}
                size="lg"
                onClick={handleSaveToHub}
                className={`flex-1 ${isSaved ? 'bg-success hover:bg-success/90' : ''}`}
                iconName={isSaved ? "BookmarkCheck" : "Bookmark"}
                iconPosition="left"
              >
                {isSaved ? 'Saved to Hub' : 'Save to My Hub'}
              </Button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tool?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full hover:bg-accent/10 hover:text-accent transition-colors duration-250 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolHero;