import React, { useEffect, useState } from 'react';
import { ChevronDown, Globe, Zap } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/20 to-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      
      {/* Animated Globe */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10"
        style={{ transform: `translate(-50%, -50%) rotate(${scrollY * 0.1}deg)` }}
      >
        <Globe className="w-96 h-96 text-blue-400" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full animate-pulse" />
      <div className="absolute top-40 right-32 w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-bounce" />
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full animate-pulse" />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-thin tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-yellow-400 to-blue-400 bg-clip-text text-transparent">
              Ryan Kindle
            </span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-extralight text-gray-300 mb-2">
            Architect of Billion-Dollar Empires
          </h2>
        </div>

        {/* Subheadline */}
        <p className="text-lg md:text-xl font-light text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
          Founder | Investor | Visionary | Real Estate. AI. Global Influence.
        </p>

        {/* CTA Button */}
        <button 
          onClick={() => document.getElementById('empire-showcase')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative px-12 py-4 bg-gradient-to-r from-yellow-400/20 to-blue-400/20 border border-yellow-400/30 rounded-full text-white font-medium text-lg transition-all duration-300 hover:from-yellow-400/40 hover:to-blue-400/40 hover:border-yellow-400/50 hover:scale-105"
        >
          <span className="relative z-10 flex items-center">
            Explore My Ventures
            <Zap className="ml-2 w-5 h-5 group-hover:animate-pulse" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;