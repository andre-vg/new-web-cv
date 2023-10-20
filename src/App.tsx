import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Hero from './pages/Hero';

function App() {
  return (
    <main
      id="theme"
      className="h-full w-full bg-background text-foreground dark"
    >
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default App;
