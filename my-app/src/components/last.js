/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import circle from "../Assets/circle.png";
const Last = () => {
  return (
    <div className="flex flex-col items-center md:p-10">
      <div className="flex flex-row mb-7 md:justify-around md:rounded-[1rem] bg-[#232038] w-full p-10 justify-center items-center">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-white text-xl font-medium md:max-w-[15rem]">
            Start Your Journey With Us Now
          </h1>
          <button className="p-5 mt-4 w-[135px] h-6 rounded-full bg-[#6366f1] flex items-center justify-center">
            <a href="#" className="btn">
              Start Now
            </a>
          </button>
        </div>
        <div className="hidden md:flex">
          <img src={circle} className="max-w-[10rem]" alt="circle"></img>
        </div>
      </div>
      <div className="flex flex-col p-10 md:items-center">
        <div className="flex flex-col md:items-center md:mb-6">
          <h1 className="text-2xl font-bold mb-3 md:text-4xl">
            How we can help you?
          </h1>
          <p className="max-w-[17rem] text-slate-500 md:max-w-none">
            Follow our newsletter. We will regulary update our latest project
            and availability.
          </p>
        </div>
        <div className="flex flex-row sm:flex-row items-center justify-center w-full mt-6 ">
          <input
            type="email"
            className="w-full h-10 rounded-full text-center bg-[#FAFAFA] outline-none"
            placeholder="Email"
          ></input>
          <button
            type="submit"
            className="bg-[#3461FF]  sm:mt-0 sm:ml-2 h-10 w-24 rounded-full"
          >
            Let's Talk
          </button>
        </div>
        <div className="mt-6 md:items-center">
          <a href="#" className="text-[#3461FF] font-medium md:text-xl">
            FAQs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Last;
