import React from "react";

export default function About() {
  const techStack = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Tailwind CSS", icon: "https://img.jsdelivr.com/github.com/tailwindlabs.png" },
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg mb-6">
        I'm a MERN Stack Developer (Fresher) skilled in React, Node.js, MongoDB, and Express.js. Passionate about building responsive, user-friendly applications and APIs. Certified by Apna College.
      </p>
      <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
      <div className="flex justify-center gap-6 flex-wrap">
        {techStack.map((tech, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
            <span className="mt-2 text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}