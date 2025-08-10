import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const StatsBar = () => {
  const [stats, setStats] = useState({
    toolsCatalogued: 2000,
    userReviews: 15420,
    dailyDiscoveries: 47
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        toolsCatalogued: prev?.toolsCatalogued + Math.floor(Math.random() * 3),
        userReviews: prev?.userReviews + Math.floor(Math.random() * 5),
        dailyDiscoveries: 47 + Math.floor(Math.random() * 10)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const statItems = [
    {
      icon: 'Database',
      label: 'Tools Catalogued',
      value: stats?.toolsCatalogued?.toLocaleString(),
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    },
    {
      icon: 'MessageSquare',
      label: 'User Reviews',
      value: stats?.userReviews?.toLocaleString(),
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: 'TrendingUp',
      label: 'Daily Discoveries',
      value: stats?.dailyDiscoveries,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      icon: 'Users',
      label: 'Active Users',
      value: '50K+',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 ${stat?.bgColor} rounded-lg mb-3`}>
                <Icon name={stat?.icon} size={20} className={stat?.color} />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">
                {stat?.value}
              </div>
              <div className="text-sm text-slate-600">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;