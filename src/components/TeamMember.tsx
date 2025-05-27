import React, { useEffect, useRef } from 'react';

interface TeamMemberProps {
  name: string;
  designation: string;
  photo: string;
  delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, designation, photo, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }, delay * 1000);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ease-out opacity-0 translate-y-8 hover:shadow-xl hover:scale-105"
    >
      <div className="p-6 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-100">
          <img 
            src={photo} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">
            {designation}
          </p>
          <h3 className="text-xl font-bold text-gray-800">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;