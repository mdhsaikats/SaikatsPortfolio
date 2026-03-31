import React from 'react';

const About = () => {
  return (
    <section id="about" className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 px-[5%] md:px-[10%] py-20 md:py-[140px]">
      <div className="flex-1 flex justify-center w-full">
         <img src="/images/about.png" alt="About Me Illustration" className="max-w-full h-auto border-b-4 border-black" />
      </div>
      <div className="flex-[1.2]">
        <h2 className="text-4xl font-bold tracking-tight mb-8 text-left">About <span className="font-normal">Me</span></h2>
        <div className="flex flex-col gap-6">
          <p className="text-gray-600 text-[1.125rem] leading-relaxed">
            I'm a passionate self-taught frontend developer based in India. I love to build creative, responsive, and robust web applications using the best technologies. I have an eye for pixel-perfect design and writing clean, scalable code.
          </p>
          <p className="text-gray-600 text-[1.125rem] leading-relaxed">
            I began my journey as a web developer in 2019, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my current role, I'm building cutting edge UI and engaging interactions.
          </p>
          <p className="text-gray-600 text-[1.125rem] leading-relaxed">
            When I'm not in full-on developer mode, you can find me hovering on codepen or dribble for new design inspirations, spending time exploring new aesthetics, or just watching movies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
