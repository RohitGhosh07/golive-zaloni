import React, { useState, useEffect } from 'react';
import { committeeMembers } from '../data/committee';
import confetti from '../utils/confetti';

interface CountdownRevealProps {
  onComplete: () => void;
}

const CountdownReveal: React.FC<CountdownRevealProps> = ({ onComplete }) => {
  const [countdown, setCountdown] = useState(15);
  const [currentMember, setCurrentMember] = useState(committeeMembers[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentMember(committeeMembers[15 - countdown]);
          setIsVisible(true);
          setCountdown(countdown - 1);
        }, 200);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      confetti();
      setTimeout(onComplete, 2500);
    }
  }, [countdown, onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black/95 to-blue-900/95 backdrop-blur-sm z-50">
      <div className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="mb-8">
          <span className="text-9xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">{countdown}</span>
        </div>
        
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin"></div>
          <div className="absolute inset-1 rounded-full bg-black"></div>
          <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/10">
            <img 
              src={currentMember.photo} 
              alt={currentMember.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
          {currentMember.name}
        </h2>
        
        <p className="text-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-semibold uppercase tracking-widest">
          {currentMember.designation}
        </p>
      </div>
    </div>
  );
};

export default CountdownReveal;