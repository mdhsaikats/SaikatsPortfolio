import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-[5%] md:px-[10%] py-20 md:py-[140px] bg-black text-white"
    >
      <div className="w-full max-w-[800px] text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 md:mb-6">
          <span className="font-normal text-gray-400">Let's </span>
          Connect
        </h2>
        <p className="text-gray-300 text-base md:text-[1.125rem] leading-relaxed mb-8 md:mb-10">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a
          href="mailto:saikatsikder2911@gmail.com"
          className="inline-block border-2 border-white px-6 py-3 md:px-8 md:py-4 font-semibold md:font-bold text-base md:text-lg cursor-none hoverable transition-all duration-300 hover:bg-white hover:text-black"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
