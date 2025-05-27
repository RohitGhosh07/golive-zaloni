import React, { useState } from 'react';
import CountdownReveal from './CountdownReveal';
import ParticleBackground from './ParticleBackground';
import logo from '../assets/logo.jpeg';
import bgImage from '../assets/bg.jpeg';

const HeroSection: React.FC = () => {
  const [isCountdownActive, setIsCountdownActive] = useState(false);

  const handleGoLive = () => {
    setIsCountdownActive(true);
  };

  const handleCountdownComplete = () => {
    window.location.href = 'http://45.120.138.164/';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0 z-10 opacity-30">
        <ParticleBackground />
      </div>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-20">
        {/* Logo Container */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div className="w-48 h-48 md:w-64 md:h-64 mb-12 relative rounded-full bg-white/10 backdrop-blur-md p-4 border border-white/20 shadow-2xl transition duration-300 group-hover:scale-105">
            <img 
              src={logo} 
              alt="Zaloni Club ERP Logo" 
              className="w-full h-full object-contain rounded-full animate-float"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl transform scale-110"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-100 animate-text">
              Zaloni Club ERP
            </span>
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-2xl md:text-3xl font-medium text-center max-w-3xl mb-16
          text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
          Zaloni Club, Duliajan
        </p>
        
        {/* CTA Button */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-70 group-hover:opacity-100 animate-pulse-slow transition duration-1000"></div>
          <button
            onClick={handleGoLive}
            disabled={isCountdownActive}
            className="relative px-12 py-6 text-xl font-bold text-white 
              bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90 
              backdrop-blur-sm
              rounded-full shadow-lg border border-white/10
              transition-all duration-300
              hover:shadow-2xl hover:scale-105 hover:border-white/20
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
              disabled:opacity-50 disabled:cursor-not-allowed
              group"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Launch ERP</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {isCountdownActive && (
        <CountdownReveal onComplete={handleCountdownComplete} />
      )}
    </section>
  );
};

export default HeroSection;