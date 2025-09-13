import React from 'react';
import Hero from './components/Hero';
import EmpireShowcase from './components/EmpireShowcase';
import VisionStory from './components/VisionStory';
import PressAuthority from './components/PressAuthority';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Hero />
      <EmpireShowcase />
      <VisionStory />
      <PressAuthority />
      <Contact />
    </div>
  );
}

export default App;