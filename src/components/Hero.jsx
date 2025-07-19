import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 transition duration-300">
      <h2 className="text-5xl font-bold mb-4">👋 Hi, I'm Anup Kumar Jha</h2>
      <p className="text-xl mb-6">Full Stack MERN Developer passionate about clean UIs and performant code.</p>
      <div className="space-x-4">
        <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">View Projects</a>
        <a href="/resume.pdf" download className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100 dark:hover:bg-gray-700">Download Resume</a>
      </div>
    </section>
  );
}