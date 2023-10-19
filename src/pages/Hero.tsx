import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="h-screen flex items-center">
      <div className="flex-col flex">
        <h1 className="text-5xl font-bold">André Gonçalves</h1>
        <TypeAnimation
          sequence={[
            "Dev", // Types 'One'
            1000, // Waits 1s
            "FRontEnd", 
            1000, 
            "WEB",
            1000
          ]}
          repeat={Infinity}
          wrapper="h1"
          className="text-4xl"
        />
      </div>
    </div>
  );
}

export default Hero;
