import React, { useState } from 'react';
import CountdownReveal from './CountdownReveal';
import ParticleBackground from './ParticleBackground';
import logo from '../assets/logo.jpeg';

const HeroSection: React.FC = () => {
  const [isCountdownActive, setIsCountdownActive] = useState(false);

  const handleGoLive = () => {
    setIsCountdownActive(true);
  };

  const handleCountdownComplete = () => {
    window.location.href = 'http://45.120.138.164/';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <ParticleBackground />
      
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="w-48 h-48 md:w-64 md:h-64 mb-8 relative">
          <img 
            src={logo} 
            alt="Zaloni Club ERP Logo" 
            className="w-full h-full object-contain rounded-2xl shadow-2xl
              animate-float"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-text">
            Zaloni Club ERP
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl font-medium text-center max-w-3xl mb-12
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Zaloni Club, Duliajan
        </p>
        
        <div className="relative group">
  <button
    onClick={handleGoLive}
    disabled={isCountdownActive}
    className="relative z-10 px-12 py-6 text-xl font-bold text-white 
      bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
      rounded-2xl shadow-lg transition-all duration-300
      hover:shadow-2xl hover:scale-105
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
      disabled:opacity-50 disabled:cursor-not-allowed"
  >
    Go Live
  </button>
  <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
  <div className="absolute -inset-4 z-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-300 rounded-3xl"></div>
</div>

      </div>

      {isCountdownActive && (
        <CountdownReveal onComplete={handleCountdownComplete} />
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;