import React from 'react';
import ExperienceCard from '../Components/ExperienceCard';

const experienceData = [
  {
    logo: '🍎',
    title: 'Junior Software Engineer',
    type: 'Apple',
    date: 'Jan 2021 - Present',
    description: 'During my tenure at Apple, I collaborated on diverse projects, from sleek user interfaces to robust backend systems. Responsibilities included optimizing performance and ensuring seamless integration.'
  },
  {
    logo: '📺',
    title: 'Software Engineer',
    type: 'YouTube',
    date: 'Jun 2019 - Dec 2020',
    description: 'At YouTube, I served as a Software Engineer, focusing on the design and implementation of scalable frontend architectures. Mentored team members and led initiatives for better user engagement.'
  },
  {
    logo: '🔍',
    title: 'Lead Software Engineer',
    type: 'Google',
    date: 'Jan 2016 - May 2019',
    description: 'As a Lead Software Engineer at Google, I spearheaded critical web initiatives reaching millions. Led cross-functional teams, established best practices, and delivered high-performance web applications.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-black text-white px-[5%] md:px-[10%] py-20 md:py-[140px] flex flex-col">
      <h2 className="text-center text-4xl font-bold mb-12 tracking-tight">My <span className="font-normal">Experience</span></h2>
      <div className="flex flex-col w-full max-w-[1000px] mx-auto">
        {experienceData.map((exp, index) => (
          <ExperienceCard 
            key={index}
            logo={exp.logo}
            title={exp.title}
            type={exp.type}
            date={exp.date}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
