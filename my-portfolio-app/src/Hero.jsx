import React from "react";
import {ReactTyped} from "react-typed";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold mb-4 text-blue-600">
        Hi, I'm Ursullah 👋
      </h1>
      <h2 className="text-2xl text-gray-700">
        I am a{" "}
        <ReactTyped
          strings={["Frontend Developer", "Backend Developer", "Fullstack Engineer", "UI/UX Enthusiast"]}
          typeSpeed={80}
          backSpeed={50}
          loop
        />
      </h2>
    </div>
  );
}

export default Hero;
