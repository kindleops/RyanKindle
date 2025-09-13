import React, { useState } from 'react';
import { ExternalLink, Building2, Brain, Zap, TrendingUp } from 'lucide-react';

const companies = [
  {
    name: 'Reivesti',
    category: 'Real Estate Intelligence',
    mission: 'Revolutionary real estate investment platform powered by AI analytics',
    icon: Building2,
    gradient: 'from-yellow-400 to-yellow-600',
    url: '#'
  },
  {
    name: 'SignPro.ai',
    category: 'AI Automation',
    mission: 'Next-generation document processing with intelligent automation',
    icon: Brain,
    gradient: 'from-blue-400 to-blue-600',
    url: '#'
  },
  {
    name: 'Vaultir.ai',
    category: 'Secure AI',
    mission: 'Enterprise-grade AI security and data protection solutions',
    icon: Zap,
    gradient: 'from-purple-400 to-purple-600',
    url: '#'
  },
  {
    name: 'Flownetic.ai',
    category: 'Workflow Intelligence',
    mission: 'Automated workflow optimization using advanced machine learning',
    icon: TrendingUp,
    gradient: 'from-green-400 to-green-600',
    url: '#'
  },
  {
    name: 'Everline',
    category: 'PropTech',
    mission: 'Streamlined property management with predictive analytics',
    icon: Building2,
    gradient: 'from-orange-400 to-orange-600',
    url: '#'
  },
  {
    name: 'Ascendrix',
    category: 'Growth Platform',
    mission: 'Accelerating startup growth through data-driven insights',
    icon: TrendingUp,
    gradient: 'from-pink-400 to-pink-600',
    url: '#'
  },
  {
    name: 'Biluxr',
    category: 'Luxury Tech',
    mission: 'Premium technology solutions for high-net-worth individuals',
    icon: Zap,
    gradient: 'from-yellow-400 to-yellow-600',
    url: '#'
  }
];

const EmpireShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="empire-showcase" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-thin mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
              Empire Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
            Building the future across real estate, AI, and emerging technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => {
            const Icon = company.icon;
            
            return (
              <div
                key={company.name}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 transition-all duration-500 hover:border-yellow-400/30 hover:bg-gray-900/70">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${company.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {company.name}
                  </h3>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-4 font-medium">
                    {company.category}
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {company.mission}
                  </p>

                  {/* Hover Action */}
                  <div className={`flex items-center text-yellow-400 font-medium transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    <span className="mr-2">Explore Venture</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Counter */}
        <div className="mt-20 flex justify-center">
          <div className="flex space-x-16">
            <div className="text-center">
              <div className="text-4xl font-light text-yellow-400 mb-2">7+</div>
              <div className="text-gray-400 font-medium">Active Ventures</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-blue-400 mb-2">$1B+</div>
              <div className="text-gray-400 font-medium">Portfolio Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-yellow-400 mb-2">50+</div>
              <div className="text-gray-400 font-medium">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpireShowcase;