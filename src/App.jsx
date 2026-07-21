import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import CustomCursor from './Components/CustomCursor';
import Navbar from './Components/Navbar';

// Sections
import Hero from './Section/Hero';
import Skills from './Section/Skills';
import Experience from './Section/Experience';
import About from './Section/About';
import Projects from './Section/Projects';
import OpenSource from './Section/OpenSource';
import Contact from './Section/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    window.lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Initial animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      if (index === 0) return; // Skip Hero since it's above fold
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <About />
        <Projects />
        <OpenSource />
        <Contact />
      </main>
      <CustomCursor />
    </div>
  );
}

export default App;
