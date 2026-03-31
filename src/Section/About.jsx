import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 px-[5%] md:px-[10%] py-20 md:py-[140px]"
    >
      <div className="flex-1 flex justify-center w-full">
        <img
          src="/images/about.png"
          alt="About Me Illustration"
          className="max-w-full h-auto border-b-4 border-black"
        />
      </div>
      <div className="flex-[1.2]">
        <h2 className="text-4xl font-bold tracking-tight mb-8 text-left">
          About <span className="font-normal">Me</span>
        </h2>
        <div className="flex flex-col gap-6">
          <p className="text-gray-600 text-[1.125rem] leading-relaxed">
            I’m a self-taught full-stack developer with a strong focus on
            building real-world applications and scalable systems. My core
            strength lies in backend development using Go and Java (Spring
            Boot), while I also craft clean, responsive user interfaces with
            React and Tailwind CSS.{" "}
          </p>
          <p className="text-gray-600 text-[1.125rem] leading-relaxed">
            I enjoy turning ideas into functional products — from management
            systems and REST APIs to full eCommerce platforms like my project
            “GachPala.” I pay attention to both structure and design, ensuring
            that what I build is not only efficient but also intuitive and
            visually polished.
          </p>
          <p className="text-gray-600 text-[1.125rem] leading-relaxed">
            My journey into development started with a curiosity for how things
            work behind the scenes, and over time it has evolved into a passion
            for solving problems and creating meaningful digital experiences.
            I’m constantly learning, experimenting with new technologies, and
            improving my skills through hands-on projects.
          </p>
          <p className="text-gray-600 text-[1.125rem] leading-relaxed">
            Beyond coding, I’m interested in building impactful tech products
            and exploring ideas like AI-powered systems. I believe in learning
            by building, and my goal is to grow into a developer who can design
            and deliver complete, production-ready solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
