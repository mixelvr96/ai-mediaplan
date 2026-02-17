import React from 'react';
import { FaDatabase, FaBolt, FaGift } from 'react-icons/fa';

const stats = [
  {
    icon: <FaDatabase className="text-3xl text-accent" />,
    value: '300,000+',
    label: 'YouTube Creators',
    description: 'In our database',
  },
  {
    icon: <FaGift className="text-3xl text-accent" />,
    value: 'Free',
    label: 'of Charge',
    description: 'While others charge you money for that',
  },
  {
    icon: <FaBolt className="text-3xl text-accent" />,
    value: '10 min',
    label: 'To Get Your List',
    description: 'Ready-to-use mediaplan',
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white border-b border-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center py-8 md:py-4 px-8">
              <div className="mb-3">{stat.icon}</div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="font-heading text-base font-semibold text-primary mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
