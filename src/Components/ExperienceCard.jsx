import React from 'react';

const ExperienceCard = ({ logo, title, type, date, description }) => {
  return (
    <div className="p-8 border border-[#333] rounded-lg bg-transparent transition-all duration-400 ease-in-out cursor-none mb-6 hover:bg-[#1a1a1a] hover:border-[#333] hover:scale-[1.02] hoverable">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
        <div className="flex items-center gap-6">
          <div className="text-3xl flex items-center justify-center">
            {typeof logo === 'string' && (logo.startsWith('http') || logo.startsWith('/')) ? (
              <img src={logo} alt={`${title} logo`} className="w-8 h-8 object-contain" />
            ) : (
              logo
            )}
          </div>
          <h3 className="text-xl font-semibold leading-relaxed">
            {title} {type && <span className="font-normal text-[#a0a0a0]">at {type}</span>}
          </h3>
        </div>
        <div className="text-sm font-medium text-[#a0a0a0]">
          {date}
        </div>
      </div>
      <div>
        <p className="text-[#ccc] text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
