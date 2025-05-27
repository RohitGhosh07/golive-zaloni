import React, { useState, useEffect } from 'react';
import { committeeMembers } from '../data/committee';
import confetti from '../utils/confetti';

interface CountdownRevealProps {
  onComplete: () => void;
}

const CountdownReveal: React.FC<CountdownRevealProps> = ({ onComplete }) => {
  const totalMembers = committeeMembers.length;
  const [countdown, setCountdown] = useState(totalMembers);
  const [currentMember, setCurrentMember] = useState(committeeMembers[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentMember(committeeMembers[totalMembers - countdown]);
          setIsVisible(true);
          setCountdown(countdown - 1);
        }, 200);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      confetti();
      setTimeout(onComplete, 2500);
    }
  }, [countdown, onComplete, totalMembers]);

  const getImageSize = (designation: string) => {
    if (designation === "PRESIDENT") return "w-56 h-56";
    if (designation === "VICE PRESIDENT" || designation === "HONY. GENERAL SECRETARY") return "w-48 h-48";
    return "w-40 h-40";
  };

  const getGradient = (designation: string) => {
    if (designation === "PRESIDENT") 
      return "from-yellow-500 via-purple-500 to-pink-500";
    if (designation === "VICE PRESIDENT" || designation === "HONY. GENERAL SECRETARY")
      return "from-blue-500 via-purple-500 to-pink-500";
    return "from-blue-400 via-purple-400 to-pink-400";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black/95 to-blue-900/95 backdrop-blur-sm z-50">
      <div className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="mb-8">
          <span className={`text-8xl font-bold bg-gradient-to-r ${getGradient(currentMember.designation)} text-transparent bg-clip-text`}>
            {currentMember.designation === "PRESIDENT" ? "PRESENTING" : countdown}
          </span>
        </div>
        
        <div className={`relative mx-auto mb-8 ${getImageSize(currentMember.designation)}`}>
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${getGradient(currentMember.designation)} 
            ${currentMember.designation === "PRESIDENT" ? 'animate-spin-slow' : 'animate-spin'}`}></div>
          <div className="absolute inset-1 rounded-full bg-black/90"></div>
          <div className={`absolute inset-2 rounded-full overflow-hidden border-4 
            ${currentMember.designation === "PRESIDENT" ? 'border-yellow-400/30' : 'border-white/10'}`}>
            <img 
              src={currentMember.photo} 
              alt={currentMember.name}
              className="w-full h-full object-cover"
            />
          </div>
          {currentMember.designation === "PRESIDENT" && (
            <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl animate-pulse-slow"></div>
          )}
        </div>
        
        <h2 className={`font-bold text-white mb-3 tracking-tight transition-all duration-300
          ${currentMember.designation === "PRESIDENT" ? 'text-4xl' : 'text-3xl'}`}>
          {currentMember.name}
        </h2>
        
        <p className={`text-lg font-semibold uppercase tracking-widest transition-all duration-300
          bg-gradient-to-r ${getGradient(currentMember.designation)} text-transparent bg-clip-text`}>
          {currentMember.designation}
        </p>
      </div>
      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CountdownReveal;