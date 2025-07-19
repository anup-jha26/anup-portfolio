import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Header dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;