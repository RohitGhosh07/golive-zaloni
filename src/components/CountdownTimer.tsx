import React, { useState, useEffect } from 'react';
import { calculateTimeLeft } from '../utils/countdown';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {timeUnits.map((unit) => (
        <div 
          key={unit.label} 
          className="w-24 md:w-32 h-24 md:h-32 backdrop-blur-lg bg-white/30 rounded-xl shadow-lg flex flex-col items-center justify-center border border-white/50 transition-all hover:shadow-xl hover:scale-105"
        >
          <span className="text-3xl md:text-5xl font-bold text-slate-800">
            {unit.value}
          </span>
          <span className="text-sm md:text-base font-medium text-slate-700">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;