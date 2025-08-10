import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const OverviewTab = ({ tool }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Use Cases */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Use Cases</h2>
            <div className="grid gap-4">
              {tool?.useCases?.map((useCase, index) => (
                <div key={index} className="bg-surface rounded-xl p-6 hover:shadow-soft transition-shadow duration-250">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={useCase?.icon} size={20} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-2">{useCase?.title}</h3>
                      <p className="text-text-secondary mb-3">{useCase?.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {useCase?.examples?.map((example, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Deep Dive */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Features Deep Dive</h2>
            <div className="space-y-6">
              {tool?.featuresDeepDive?.map((feature, index) => (
                <div key={index} className="border border-border rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name={feature?.icon} size={24} className="text-accent" />
                    <h3 className="text-xl font-semibold text-primary">{feature?.name}</h3>
                  </div>
                  <p className="text-text-secondary mb-4">{feature?.description}</p>
                  
                  {feature?.capabilities && (
                    <div className="grid sm:grid-cols-2 gap-3">
                      {feature?.capabilities?.map((capability, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Icon name="ArrowRight" size={14} className="text-accent flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{capability}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Integration Guides */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Popular Integrations</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tool?.integrations?.map((integration, index) => (
                <div key={index} className="bg-surface rounded-xl p-4 hover:shadow-soft transition-shadow duration-250">
                  <div className="flex items-center space-x-3 mb-3">
                    <Image
                      src={integration?.logo}
                      alt={`${integration?.name} logo`}
                      className="w-8 h-8 object-contain"
                    />
                    <h3 className="font-semibold text-primary">{integration?.name}</h3>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">{integration?.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      integration?.difficulty === 'Easy' ?'bg-success/10 text-success'
                        : integration?.difficulty === 'Medium' ?'bg-warning/10 text-warning' :'bg-error/10 text-error'
                    }`}>
                      {integration?.difficulty}
                    </span>
                    <button className="text-accent hover:text-accent/80 text-sm font-medium">
                      View Guide
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-surface rounded-xl p-6">
            <h3 className="font-semibold text-primary mb-4">Quick Stats</h3>
            <div className="space-y-4">
              {tool?.quickStats?.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name={stat?.icon} size={16} className="text-text-secondary" />
                    <span className="text-sm text-text-secondary">{stat?.label}</span>
                  </div>
                  <span className="font-semibold text-primary">{stat?.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing History */}
          <div className="bg-surface rounded-xl p-6">
            <h3 className="font-semibold text-primary mb-4">Pricing History</h3>
            <div className="space-y-3">
              {tool?.pricingHistory?.map((entry, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">{entry?.date}</span>
                  <span className={`font-medium ${
                    entry?.change === 'increased' ? 'text-error' :
                    entry?.change === 'decreased'? 'text-success' : 'text-text-primary'
                  }`}>
                    ${entry?.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Company Info */}
          <div className="bg-surface rounded-xl p-6">
            <h3 className="font-semibold text-primary mb-4">Company Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Calendar" size={16} className="text-text-secondary" />
                <div>
                  <div className="text-sm font-medium text-primary">Founded</div>
                  <div className="text-sm text-text-secondary">{tool?.companyInfo?.founded}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-text-secondary" />
                <div>
                  <div className="text-sm font-medium text-primary">Location</div>
                  <div className="text-sm text-text-secondary">{tool?.companyInfo?.location}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Users" size={16} className="text-text-secondary" />
                <div>
                  <div className="text-sm font-medium text-primary">Team Size</div>
                  <div className="text-sm text-text-secondary">{tool?.companyInfo?.teamSize}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;