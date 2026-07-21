import React from 'react';
import PackageCard from '../Components/PackageCard';

const packagesData = [
  {
    name: "gomorse",
    lang: "Go",
    description: "A fast, lightweight, and zero-dependency Go package for bidirectional Morse code encoding, decoding, and validation. Features robust error handling, full support for English alphanumeric characters, and zero external dependencies.",
    installCommand: "go get github.com/mdhsaikats/gomorse",
    githubUrl: "https://github.com/mdhsaikats/gomorse",
    docUrl: "https://pkg.go.dev/github.com/mdhsaikats/gomorse"
  },
  {
    name: "create-mork",
    lang: "npm",
    description: "Scaffold a premium, multi-provider AI chatbot app with one command. Generates a fully configured Next.js client-side chat interface and API route supporting Claude, GPT, and Gemini out-of-the-box.",
    installCommand: "npm create mork@latest my-chatbot",
    githubUrl: "https://github.com/mdhsaikats/create-mork",
    docUrl: "https://www.npmjs.com/package/create-mork"
  },
  {
    name: "@mdhsaikats/age-calculator",
    lang: "TypeScript",
    description: "A zero-dependency Node.js library to calculate exact age in years, months, and days, total days lived, days until next birthday, and zodiac signs. Comes with built-in type declarations.",
    installCommand: "npm install @mdhsaikats/age-calculator",
    githubUrl: "https://github.com/mdhsaikats/age-calculator",
    docUrl: "https://www.npmjs.com/package/@mdhsaikats/age-calculator"
  }
];

const OpenSource = () => {
  return (
    <section
      id="opensource"
      className="bg-white text-black px-[5%] md:px-[10%] py-20 md:py-[140px] flex flex-col"
    >
      <h2 className="text-center text-4xl font-bold mb-12 tracking-tight">
        Open Source <span className="font-normal">Packages</span>
      </h2>
      
      <div className="flex justify-center w-full mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] w-full">
          {packagesData.map((pkg, index) => (
            <PackageCard
              key={index}
              name={pkg.name}
              lang={pkg.lang}
              description={pkg.description}
              installCommand={pkg.installCommand}
              githubUrl={pkg.githubUrl}
              docUrl={pkg.docUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
