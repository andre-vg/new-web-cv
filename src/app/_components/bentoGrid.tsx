import React from "react";
import Hero from "./hero";
import About from "./about";
import Projects from "./projects";

export default function BentoGrid() {
  return (
    <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-8 *:rounded-3xl *:p-4">
      <div className="row-span-2 bg-sky-100 !p-2">
        <Hero/>
      </div>
      <div className="bg-sky-200">
        <About/>
      </div>
      <div className="row-span-3 bg-sky-300">3</div>
      <div className="bg-sky-400"><Projects/></div>
      <div className="col-span-2 bg-sky-500">5</div>
    </div>
  );
}
