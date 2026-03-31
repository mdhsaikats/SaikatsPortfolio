import React, { useEffect, useState } from 'react';
import Button from './Button';
import resumePdf from '../assets/resume.pdf';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-400 ease-in-out ${scrolled ? 'py-4 px-[5%] md:px-[10%] bg-white shadow-sm' : 'py-6 px-[5%] md:px-[10%] bg-transparent'}`}>
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl cursor-none hoverable" onClick={() => scrollToSection('hero')}>
          <div className="w-[14px] h-[24px] bg-black rounded-tr-[10px] rounded-br-[0px] rounded-tl-[4px] rounded-bl-[4px]"></div>
          <span>Personal</span>
        </div>
        
        <ul className="hidden md:flex gap-8 font-semibold text-base">
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('about')}>About Me</li>
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('skills')}>Skills</li>
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('projects')}>Project</li>
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('experience')}>Experience</li>
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('contact')}>Contact Me</li>
        </ul>

        <div>
          <Button icon="download" href={resumePdf} download="resume.pdf">Resume</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
