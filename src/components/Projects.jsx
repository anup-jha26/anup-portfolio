import React from "react";

const projects = [
  {
    title: "Wanderlust",
    description: "Full-stack clone of Airbnb with authentication, cloud image upload, map integration.",
    live: "https://wanderlust-5w8k.onrender.com/listings",
    code: "https://github.com/anup-jha26/Wanderlust"
  },
  {
    title: "Weather App",
    description: "React-based app using OpenWeather API with live data.",
    live: "https://weather-app-react-p1co.onrender.com",
    code: "https://github.com/anup-jha26/Weather-App-react"
  },
  {
    title: "Simon Game",
    description: "JavaScript-based memory game with scoring.",
    code: "https://github.com/anup-jha26/simon-game"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 transition duration-300">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded shadow transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="mb-3">{p.description}</p>
            {p.live && <a className="text-blue-600 mr-4" href={p.live} target="_blank">Live Demo</a>}
            <a className="text-blue-600" href={p.code} target="_blank">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}