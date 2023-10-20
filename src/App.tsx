import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Hero from "./pages/Hero";

function App() {
  return (
    <main
      id="theme"
      className="w-full h-full dark text-foreground bg-background"
    >
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default App;
