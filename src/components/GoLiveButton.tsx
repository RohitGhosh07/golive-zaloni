import React, { useState } from 'react';
import confetti from '../utils/confetti';

const GoLiveButton: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    confetti();
    
    // Redirect after animation (2.5 seconds)
    setTimeout(() => {
      window.location.href = 'http://ledboard.forcempower.com:8080/#login';
    }, 2500);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isClicked}
      className={`
        relative px-10 py-4 text-lg font-semibold text-white 
        bg-gradient-to-r from-blue-600 to-violet-600 
        rounded-full shadow-lg transition-all duration-300
        hover:shadow-xl hover:scale-105 hover:from-blue-700 hover:to-violet-700
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500
        overflow-hidden ${isClicked ? 'animate-pulse pointer-events-none' : ''}
      `}
    >
      <span className="relative z-10">
        {isClicked ? 'Launching...' : 'Go Live'}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  );
};

export default GoLiveButton;