import React from 'react';
import ProjectCard from '../Components/ProjectCard';

const projectsData = [
  {
    number: '01',
    title: 'Crypto Screener Application',
    description: 'A sophisticated cryptocurrency dashboard built with React and dynamic charting libraries. Provides real-time data flow, sleek dark-mode UI, and advanced portfolio tracking.',
    image: '/images/crypto.png',
    link: '#'
  },
  {
    number: '02',
    title: 'Euphoria - Ecommerce (Apparels) Website Template',
    description: 'A minimalist fashion ecommerce frontend. Features beautiful typography, responsive product grids, and a seamless shopping cart interaction flow built with smooth animations.',
    image: '/images/ecommerce.png',
    link: '#'
  },
  {
    number: '03',
    title: 'Blog Website Template',
    description: 'A typography-focused, elegant blog platform interface. Optimized for fast rendering and readability with a premium dark mode design and beautiful article cards.',
    image: '/images/blog.png',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white px-[5%] md:px-[10%] py-20 md:py-[140px] flex flex-col">
      <h2 className="text-center text-4xl font-bold mb-12 tracking-tight">My <span className="font-normal">Projects</span></h2>
      <div className="flex flex-col mt-8">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            number={project.number}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
