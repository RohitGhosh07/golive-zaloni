import React from 'react';
import { committeeMembers } from '../data/committee';

const CommitteeSection: React.FC = () => {
  const getCardSize = (designation: string) => {
    if (designation === "PRESIDENT") return "lg:col-span-3 md:col-span-2";
    if (designation === "VICE PRESIDENT" || designation === "HONY. GENERAL SECRETARY") return "lg:col-span-2 md:col-span-2";
    if (designation === "EC MEMBER") return "lg:col-span-1 md:col-span-1";
    return "lg:col-span-1 md:col-span-1";
  };

  const getImageSize = (designation: string) => {
    if (designation === "PRESIDENT") return "w-40 h-40";
    if (designation === "VICE PRESIDENT" || designation === "HONY. GENERAL SECRETARY") return "w-36 h-36";
    return "w-32 h-32";
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600">Meet the experts behind the Zaloni Club</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committeeMembers.map((member, index) => (
            <div 
              key={index}
              className={`
                bg-white rounded-2xl shadow-lg overflow-hidden 
                transition-all duration-500 ease-out hover:shadow-2xl hover:scale-105
                ${getCardSize(member.designation)}
              `}
            >
              <div className={`
                p-8 flex flex-col items-center
                ${member.designation === "PRESIDENT" ? 'bg-gradient-to-br from-blue-50 to-purple-50' : ''}
              `}>
                <div className={`
                  ${getImageSize(member.designation)} 
                  rounded-full overflow-hidden mb-6 
                  border-4 ${member.designation === "PRESIDENT" ? 'border-blue-400' : 'border-blue-200'}
                  shadow-lg
                `}>
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className={`
                    text-sm font-semibold uppercase tracking-wider mb-2
                    ${member.designation === "PRESIDENT" ? 'text-blue-600' : 'text-purple-600'}
                  `}>
                    {member.designation}
                  </p>
                  <h3 className={`
                    ${member.designation === "PRESIDENT" ? 'text-2xl' : 'text-xl'}
                    font-bold text-gray-800
                  `}>
                    {member.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection