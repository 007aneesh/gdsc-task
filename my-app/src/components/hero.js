import React from "react";
import Img1 from "../Assets/m.png";
import "./hero.css";
const Hero = () => {
  return (
    <div className="mt-16 mb-10 sm:flex flex-row justify-around">
      <div className="w-[60px] h-[60px] rounded-full right-0 bg-[#3461FF] absolute top-[95px] left-[290px] sm:hidden"></div>
      <div className="b-dot w-[30px] h-[30px] rounded-full right-0 absolute top-[80px] left-[350px] sm:hidden"></div>
      <div className="font-semibold  mt-24 sm:mt-20">
        <h1 className="text-5xl ml-10  sm:text-6xl lg:text-8xl">We Take</h1>
        <h1 className="text-5xl ml-10  sm:text-6xl lg:text-8xl">Care Of</h1>
        <h1 className="text-5xl ml-10 sm:text-6xl lg:text-8xl">Your Brand</h1>
        <p className=" opacity-80 max-w-prose text-base pl-10 pr-10 mt-6 md:max-w-md">
          "It's not that we need new ideas, but we need to stop having old
          ideas"
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full mt-6 pl-10 pr-10">
          <input
            type="email"
            className="w-full md:w-4/5 lg:w-full h-10 rounded-full text-center bg-[#FAFAFA] outline-none"
            placeholder="Email"
          ></input>
          <button
            type="submit"
            className="bg-[#3461FF] mt-4 sm:mt-0 sm:ml-2 h-10 w-24 rounded-full"
          >
            Let's Talk
          </button>
        </div>
      </div>

      <div className="hidden p-4 sm:block">
        <img
          src={Img1}
          alt="hero_image"
          className="h-[75vh] md:h-[33vh] lg:w-auto lg:h-[75vh] w-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
