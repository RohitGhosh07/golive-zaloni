import React, { useState } from 'react';
import CountdownReveal from './CountdownReveal';
import ParticleBackground from './ParticleBackground';

const HeroSection: React.FC = () => {
  const [isCountdownActive, setIsCountdownActive] = useState(false);

  const handleGoLive = () => {
    setIsCountdownActive(true);
  };

  const handleCountdownComplete = () => {
    window.location.href = 'http://45.120.138.164/';
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-text">
          We're Going Live!
        </h1>
        
        <p className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-12">
          Meet the minds behind the mission
        </p>
        
        <button
          onClick={handleGoLive}
          disabled={isCountdownActive}
          className={`
            group relative px-12 py-6 text-xl font-bold text-white 
            bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
            rounded-2xl shadow-lg transition-all duration-300
            hover:shadow-2xl hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
            disabled:opacity-50 disabled:cursor-not-allowed
            overflow-hidden
          `}
        >
          <span className="relative z-10">GO LIVE</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {isCountdownActive && (
        <CountdownReveal onComplete={handleCountdownComplete} />
      )}
    </section>
  );
};

export default HeroSection;