import React from "react";
import ProjectCard from "../Components/ProjectCard";

const projectsData = [
  {
    number: "01",
    title: "Gachpala Marketplace",
    description:
      "A sophisticated cryptocurrency dashboard built with React and dynamic charting libraries. Provides real-time data flow, sleek dark-mode UI, and advanced portfolio tracking.",
    image: "/images/gachpala.png",
    link: "https://gachpala.com",
  },
  {
    number: "02",
    title: "Essense.",
    description:
      "A minimalistic perfume shop website template with a focus on typography and smooth animations.",
    image: (
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7428078083699613696?collapsed=1"
        height="542"
        width="504"
        frameborder="0"
        allowfullscreen=""
        title="Embedded post"
      ></iframe>
    ),
    link: "https://github.com/mdhsaikats/Essense-WebPage",
  },
  {
    number: "03",
    title: "Stick Up",
    description:
      "Its a ecommerce for sticker and poster full stack website with backend in GoLang , HTML5, TailwindCSS , JS",
    image: (
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7404963513057804288?collapsed=1"
        height="508"
        width="504"
        frameborder="0"
        allowfullscreen=""
        title="Embedded post"
      ></iframe>
    ),
    link: "https://github.com/mdhsaikats/stick-up-web-app",
  },
  {
    number: "04",
    title: "RESTful CRUD API ",
    description:
      "Built a lightweight RESTful CRUD API in Go (net/http + MySQL) — JSON endpoints, CORS support, and ready for env-based config. ",
    image: (
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7422690855855136769?collapsed=1"
        height="542"
        width="504"
        frameborder="0"
        allowfullscreen=""
        title="Embedded post"
      ></iframe>
    ),
    link: "https://github.com/mdhsaikats/CRUD",
  },
  {
    number: "05",
    title: "Laundry Management System ",
    description:
      "Proud to present my Laundry Management System, built with Go! This project features secure JWT authentication, user and admin roles, order tracking, real-time status updates, and a robust RESTful API. Designed for scalability and reliability, it streamlines laundry operations for both customers and administrators. Technologies used: Go, MySQL, Chi router, JWT, bcrypt, and more. Excited to connect with fellow developers and industry professionals for feedback and collaboration!",
    image: (
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7404969293693583361?collapsed=1"
        height="542"
        width="504"
        frameborder="0"
        allowfullscreen=""
        title="Embedded post"
      ></iframe>
    ),
    link: "https://github.com/mdhsaikats/LaundryPro---Premium-Laundry-Service-Application",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black text-white px-[5%] md:px-[10%] py-20 md:py-[140px] flex flex-col"
    >
      <h2 className="text-center text-4xl font-bold mb-12 tracking-tight">
        My <span className="font-normal">Projects</span>
      </h2>
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
