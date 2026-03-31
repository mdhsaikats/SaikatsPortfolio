import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ number, title, description, image, link }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20 mb-24 cursor-none group hoverable lg:even:flex-row-reverse">
      <div className="flex-[1.2] rounded-xl overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-cover transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-xl group-hover:scale-105" 
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="text-5xl font-extrabold mb-8 text-white">{number}</div>
        <h3 className="text-4xl font-bold mb-8 leading-tight">{title}</h3>
        <p className="text-lg text-[#a0a0a0] mb-10 leading-relaxed">{description}</p>
        
        <a href={link} target="_blank" rel="noreferrer" className="text-white inline-flex transition-colors duration-300 hover:text-[#888] hoverable">
          <ExternalLink size={24} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
