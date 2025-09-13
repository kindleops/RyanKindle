import React, { useEffect, useState } from 'react';
import { Calendar, Target, Zap, Globe } from 'lucide-react';

const milestones = [
  {
    year: '2019',
    age: '19',
    title: 'First Real Estate Deal',
    description: 'Closed first property investment, discovering the power of real estate as a wealth-building vehicle',
    icon: Target
  },
  {
    year: '2020',
    age: '20',
    title: 'Portfolio Expansion',
    description: 'Scaled real estate operations, developing systematic investment strategies and market analysis',
    icon: TrendingUp
  },
  {
    year: '2022',
    age: '22',
    title: 'AI Revolution Begins',
    description: 'Recognized AI\'s transformative potential, pivoting to integrate technology with real estate expertise',
    icon: Brain
  },
  {
    year: '2023',
    age: '23',
    title: 'Empire Foundation',
    description: 'Launched multiple AI-powered ventures, establishing the infrastructure for a global technology empire',
    icon: Building2
  },
  {
    year: '2024',
    age: '24',
    title: 'Global Influence',
    description: 'Achieved billion-dollar portfolio valuation, becoming a recognized leader in PropTech and AI innovation',
    icon: Globe
  }
];

import { TrendingUp, Brain, Building2 } from 'lucide-react';

const VisionStory = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-thin mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Vision & Journey
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto mb-12">
            From first real estate deal at 19 to building a global AI and real estate empire through faith, discipline, and relentless execution.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-yellow-400 via-blue-400 to-yellow-400" />

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isVisible = visibleItems.includes(index);
            const isLeft = index % 2 === 0;

            return (
              <div
                key={milestone.year}
                data-index={index}
                className={`relative flex items-center mb-16 ${isLeft ? 'justify-end' : 'justify-start'}`}
              >
                {/* Timeline Node */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                  <Icon className="w-8 h-8 text-black" />
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${isLeft ? 'pr-16' : 'pl-16'}`}>
                  <div className={`p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-gray-800/50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:border-yellow-400/30 hover:bg-gray-900/90`}>
                    <div className="flex items-center mb-4">
                      <div className="text-3xl font-bold text-yellow-400 mr-4">{milestone.year}</div>
                      <div className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded-full">Age {milestone.age}</div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-white">{milestone.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Section */}
        <div className="mt-32 text-center">
          <div className="max-w-4xl mx-auto p-12 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-3xl border border-gray-800/50">
            <h3 className="text-3xl font-light mb-8">
              <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                Core Philosophy
              </span>
            </h3>
            <blockquote className="text-2xl font-light text-gray-300 leading-relaxed italic mb-8">
              "Success isn't built on hope—it's constructed through faith-driven action, disciplined execution, and the relentless pursuit of innovation. Every empire starts with a single decision to act."
            </blockquote>
            <div className="flex justify-center space-x-8 text-sm text-gray-500 uppercase tracking-wider">
              <span>Faith</span>
              <span>•</span>
              <span>Discipline</span>
              <span>•</span>
              <span>Execution</span>
              <span>•</span>
              <span>Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionStory;