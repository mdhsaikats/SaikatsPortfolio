import React from 'react';

const SkillCard = ({ iconUrl, name }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-10 border-2 border-black bg-white rounded-md transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] cursor-none hover:bg-black hover:text-white hover:-translate-y-2.5 hover:shadow-[0_20px_30px_rgba(0,0,0,0.1)] group hoverable">
      <div className="w-[60px] h-[60px] flex items-center justify-center">
        <img 
          src={iconUrl} 
          alt={name} 
          className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" 
        />
      </div>
      <span className="font-bold text-lg">{name}</span>
    </div>
  );
};

export default SkillCard;
