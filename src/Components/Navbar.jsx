import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import resumePdf from '../assets/resume.pdf';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    const el = document.getElementById(id);
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el);
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-400 ease-in-out ${scrolled ? 'py-4 px-[5%] md:px-[10%] bg-white shadow-sm' : 'py-6 px-[5%] md:px-[10%] bg-transparent'}`}>
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl cursor-none hoverable" onClick={() => scrollToSection('hero')}>
          <div className="w-[14px] h-[24px] bg-black rounded-tr-[10px] rounded-br-[0px] rounded-tl-[4px] rounded-bl-[4px]"></div>
          <span>portfolio</span>
        </div>

        <ul className="hidden md:flex gap-8 font-semibold text-base">
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('about')}>About Me</li>
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('skills')}>Skills</li>
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('projects')}>Project</li>
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('opensource')}>Packages</li>
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('experience')}>Experience</li>
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('contact')}>Contact Me</li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Button icon="download" href={resumePdf} download="resume.pdf">Resume</Button>
          </div>
          <button
            className="md:hidden p-2 text-black cursor-none hoverable"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-white/90 backdrop-blur-lg z-[999] transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
      >
        <ul className="flex flex-col items-center pt-20 h-full gap-8 text-2xl font-semibold">
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('about')}>About Me</li>
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('skills')}>Skills</li>
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('projects')}>Project</li>
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('opensource')}>Packages</li>
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('experience')}>Experience</li>
          <li className="cursor-none transition-colors duration-300 hover:text-gray-600 hoverable" onClick={() => scrollToSection('contact')}>Contact Me</li>
          <li className="sm:hidden mt-4">
            <Button icon="download" href={resumePdf} download="resume.pdf">Resume</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
