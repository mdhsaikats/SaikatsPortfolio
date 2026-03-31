import React from 'react';

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.2 5.2 0 0 0-1.5-3.8c.16-.4.65-1.84-.15-3.8 0 0-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0C6.2 2.12 5 2.5 5 2.5c-.8 1.96-.3 3.4-.15 3.8a5.2 5.2 0 0 0-1.5 3.8c0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const TwitterIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 min-h-screen pt-[150px] px-[5%] md:px-[10%] pb-20 md:pb-[140px]">
      <div className="flex-1">
        <h1 className="text-5xl md:text-6xl xl:text-[5rem] font-normal leading-tight tracking-tight mb-8">
          <span className="block text-3xl mb-2">Hello I'am <strong className="font-extrabold">Evren Shah.</strong></span><br />
          <strong className="font-extrabold">Frontend</strong> Developer<br />
          Based In <strong className="font-extrabold">India.</strong>
        </h1>
        <p className="text-lg text-gray-600 max-w-[500px] leading-relaxed mb-10">
          I'm a frontend developer based in India. I have a passion for web design and love to create for web and mobile devices. 
        </p>
        
        <div className="flex gap-6">
          <a href="#" className="flex items-center justify-center w-12 h-12 border-2 border-black rounded-md text-black transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1 hoverable"><GithubIcon size={20} /></a>
          <a href="#" className="flex items-center justify-center w-12 h-12 border-2 border-black rounded-md text-black transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1 hoverable"><TwitterIcon size={20} /></a>
          <a href="#" className="flex items-center justify-center w-12 h-12 border-2 border-black rounded-md text-black transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1 hoverable"><LinkedinIcon size={20} /></a>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center items-center w-full">
        <img src="/images/hero.png" alt="Developer Illustration" className="max-w-full h-auto border-b-4 border-black" />
      </div>
    </section>
  );
};

export default Hero;
