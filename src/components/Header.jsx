import React from "react";

export default function Header({ dark, setDark }) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Anup.dev</h1>
        <nav className="space-x-4">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
          <button onClick={() => setDark(!dark)} className="ml-4 px-2 py-1 border rounded">
            {dark ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
}