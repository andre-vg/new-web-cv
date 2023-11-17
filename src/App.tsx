import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Hero from './pages/Hero';
import { useEffect, useState } from 'react';
import Projects from './pages/Projects';

function App() {
  return (
    <main id="theme" className="h-full w-full bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}

export default App;
