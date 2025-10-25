import React from "react";
import HeroPhoto from "../assets/hero.svg";

const Hero = () => {
  return (
    <div
      data-aos="zoom-out"
      className="flex flex-col gap-5 justify-center items-center"
    >
      <div className="text-center w-5/7 space-y-3">
        <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
          Learn. Share. Grow.
        </h1>
        <p className="text-gray-500">
          Discover new opportunities, connect with skilled individuals, and
          build a stronger local community through learning.
        </p>
        <button className="btn animate__heartBeat bg-linear-to-r from-blue-700 to-blue-400 border-none text-white font-semibold">
          Discover More
        </button>
      </div>
      <div>
        <img src={HeroPhoto} alt="" />
      </div>
    </div>
  );
};

export default Hero;
