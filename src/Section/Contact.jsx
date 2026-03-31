import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-[5%] md:px-[10%] py-20 md:py-[140px] bg-black text-white"
    >
      <div className="w-full max-w-[800px] text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-6">
          <span className="font-normal text-gray-400">Let's </span>
          Connect
        </h2>
        <p className="text-gray-300 text-[1.125rem] leading-relaxed mb-10">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a
          href="mailto:saikatsikder2911@gmail.com"
          className="inline-block border-2 border-white px-8 py-4 font-bold text-lg cursor-none hoverable transition-all duration-300 hover:bg-white hover:text-black"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
