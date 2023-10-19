import { ScrollShadow } from "@nextui-org/react";
import "./App.css";
import About from "./pages/About";
import Hero from "./pages/Hero";

function App() {
  return (
    <main className="w-full h-full dark text-foreground bg-background px-24 ">
        <Hero />
        <About />
    </main>
  );
}

export default App;
