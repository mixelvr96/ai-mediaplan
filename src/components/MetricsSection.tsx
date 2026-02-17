import React from 'react';
import { FaUsers, FaEye, FaChartLine, FaGlobeAmericas, FaLink } from 'react-icons/fa';

interface Metric {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const metrics: Metric[] = [
  {
    icon: <FaUsers className="text-4xl text-accent" />,
    title: 'Followers',
    description: 'Total Audience Reach',
  },
  {
    icon: <FaEye className="text-4xl text-accent" />,
    title: 'Views (Min/Max)',
    description: 'Expected Engagement Range',
  },
  {
    icon: <FaChartLine className="text-4xl text-accent" />,
    title: 'ER (%)',
    description: 'Engagement Rate Quality',
  },
  {
    icon: <FaGlobeAmericas className="text-4xl text-accent" />,
    title: 'Geographic Distribution',
    description: 'Audience Locations',
  },
  {
    icon: <FaLink className="text-4xl text-accent" />,
    title: 'Channel Links',
    description: 'Direct YouTube Profiles',
  },
];

const MetricsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-heading font-semibold text-accent tracking-widest uppercase mb-3">
            What's inside
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            WHAT YOU'LL GET IN YOUR{' '}
            <span className="relative inline-block">
              <span className="relative z-10">MEDIAPLAN</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-accent/30 -skew-x-3 z-0" />
            </span>
          </h2>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-200 hover:border-accent/60 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <h3 className="font-heading text-base font-bold text-primary mb-1">
                {metric.title}
              </h3>
              <p className="text-sm text-gray-500">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-gray-400 mt-8">
          All data is sourced from our proprietary YouTube database of{' '}
          <span className="font-semibold text-primary">300,000+ creators</span>
        </p>
      </div>
    </section>
  );
};

export default MetricsSection;
