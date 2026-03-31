import React from "react";
import ExperienceCard from "../Components/ExperienceCard";
import gachpalaLogo from "../assets/gachpala.png";

const experienceData = [
  {
    logo: gachpalaLogo,
    title: "Co-Founder & CTO",
    type: "Gachpala",
    date: "May 2025 - Present",
    description:
      "During my tenure at Gachpala, I collaborated on diverse projects, from sleek user interfaces to robust backend systems. Responsibilities included optimizing performance and ensuring seamless integration.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-black text-white px-[5%] md:px-[10%] py-20 md:py-[140px] flex flex-col"
    >
      <h2 className="text-center text-4xl font-bold mb-12 tracking-tight">
        My <span className="font-normal">Experience</span>
      </h2>
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
