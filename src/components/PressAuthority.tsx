import React from 'react';
import { Award, Users, TrendingUp, Star } from 'lucide-react';

const achievements = [
  {
    title: 'Elite Founder Rank',
    subtitle: 'Crunchbase Recognition',
    description: 'Top-tier founder classification for multiple successful ventures',
    icon: Award,
    gradient: 'from-yellow-400 to-yellow-600'
  },
  {
    title: 'Industry Speaker',
    subtitle: 'Tech Conferences',
    description: 'Keynote speaker at leading PropTech and AI conferences worldwide',
    icon: Users,
    gradient: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Portfolio Growth',
    subtitle: '$1B+ Valuation',
    description: 'Achieved billion-dollar portfolio milestone through strategic investments',
    icon: TrendingUp,
    gradient: 'from-green-400 to-green-600'
  },
  {
    title: 'Innovation Leader',
    subtitle: 'AI Pioneer',
    description: 'Recognized for breakthrough applications of AI in real estate',
    icon: Star,
    gradient: 'from-purple-400 to-purple-600'
  }
];

const pressLogos = [
  { name: 'Forbes', width: 'w-24' },
  { name: 'Bloomberg', width: 'w-32' },
  { name: 'TechCrunch', width: 'w-28' },
  { name: 'Wall Street Journal', width: 'w-20' },
  { name: 'Reuters', width: 'w-24' },
  { name: 'Financial Times', width: 'w-26' }
];

const PressAuthority = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-thin mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
              Recognition & Authority
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
            Global recognition for innovation leadership and entrepreneurial excellence
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            
            return (
              <div key={achievement.title} className="group">
                <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 text-center transition-all duration-300 hover:border-yellow-400/30 hover:bg-gray-900/70 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-3 font-medium">
                    {achievement.subtitle}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Press Section */}
        <div className="text-center">
          <h3 className="text-2xl font-light mb-12 text-gray-400">Featured In</h3>
          
          {/* Press Logos Placeholder */}
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {pressLogos.map((logo, index) => (
              <div
                key={logo.name}
                className={`${logo.width} h-12 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:opacity-80 hover:scale-105`}
              >
                <span className="text-black font-bold text-sm">{logo.name}</span>
              </div>
            ))}
          </div>

          {/* Future Press Note */}
          <p className="text-sm text-gray-600 mt-8 italic">
            Media features and speaking engagements are continuously being added
          </p>

          {/* CTA for Press */}
          <div className="mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-400/20 to-blue-400/20 border border-yellow-400/30 rounded-full text-white font-medium transition-all duration-300 hover:from-yellow-400/40 hover:to-blue-400/40 hover:border-yellow-400/50">
              Press Inquiries
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressAuthority;