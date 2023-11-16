import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Hero from './pages/Hero';
import { useEffect, useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark',
  );

  useEffect(() => {
    localStorage.getItem('theme') === 'dark'
      ? document.getElementById('theme')?.classList.add('dark')
      : document.getElementById('theme')?.classList.remove('dark');
  }, []);

  return (
    <main id="theme" className="h-full w-full bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default App;
