/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import rect from "../Assets/rect.png";
import ideation from "../Assets/ideation.png";
import img1 from "../Assets/rect2.png";
import img2 from "../Assets/rect3.png";
import img3 from "../Assets/rect4.png";
import budget from "../Assets/budget.png";
import performance from "../Assets/performance.png";
import speed from "../Assets/speed.png";
const Work = () => {
  return (
    <div>
      <div className="b1 flex flex-col justify-around lg:flex-row md:pl-44 md:pr-32 p-10 ">
        <div className="basis-1/2 mb-20 md:mb-4 ">
          <div>
            <h1 className="text-2xl mb-2 md:text-4xl md:font-bold">
              How it works
            </h1>
            <p className="text-slate-500 mb-3 max-w-sm">
              Use this section to describe your company and the products you
              offer. You could share your company's story and details about why
              you are in business.{" "}
            </p>
          </div>
          <div>
            <img
              src={rect}
              alt="rect"
              className="object-scale-down md:max-w-md"
            ></img>
          </div>
        </div>
        <div className="basis-1/2 mb-4 p-4 pl-3">
          <div className="grid grid-cols-1 gap-4 gap-y-10 md:grid-cols-2 md:grid-rows-2">
            <div className="flex flex-row md:flex-col justify-between md:hidden">
              <div className="basis-1/4 items-center justify-center">
                <img
                  src={ideation}
                  alt="ideation"
                  className="md:max-w-[4rem] md:mb-2"
                ></img>
              </div>
              <div className="basis-3/4 pl-4 md:pl-0">
                <h2 className="font-medium text-xl md:mb-2">Ideation</h2>
                <p className="text-slate-500">
                  Use this section to describe your company
                </p>
              </div>
            </div>
            <div className="hidden md:flex flex-row md:flex-col justify-between">
              <div className="basis-1/4 items-center justify-center">
                <img
                  src={ideation}
                  alt="ideation"
                  className="md:max-w-[4rem] md:mb-2"
                ></img>
              </div>
              <div className="basis-3/4 pl-4 md:pl-0">
                <h2 className="font-medium text-xl md:mb-2">Ideation</h2>
                <p className="text-slate-500">
                  Use this section to describe your company and the products you
                  offer. You could share your company's
                </p>
              </div>
            </div>
            <div className=" flex-row justify-between md:flex-col hidden md:flex">
              <div className="basis-1/4 items-center justify-center">
                <img
                  src={budget}
                  alt="budget"
                  className="md:max-w-[4rem] md:mb-2"
                ></img>
              </div>
              <div className="basis-3/4 pl-4 md:pl-0">
                <h2 className="font-medium text-xl md:mb-2">Budget</h2>
                <p className="text-slate-500">
                  Use this section to describe your company and the products you
                  offer. You could share your company's
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between md:hidden">
              <div className="basis-3/4 pr-4">
                <h2 className="font-medium text-xl">Budget</h2>
                <p className="text-slate-500">
                  Use this section to describe your company
                </p>
              </div>
              <div className="basis-1/4 items-center justify-center">
                <img src={budget} alt="budget"></img>
              </div>
            </div>
            <div className="flex md:hidden flex-row md:flex-col justify-between">
              <div className="basis-1/4 items-center justify-center">
                <img
                  src={speed}
                  alt="speed"
                  className="md:max-w-[4rem] md:mb-2"
                ></img>
              </div>
              <div className="basis-3/4 pl-4 md:pl-0">
                <h2 className="font-medium text-xl md:mb-2">Speed</h2>
                <p className="text-slate-500">
                  Use this section to describe your company
                </p>
              </div>
            </div>
            <div className="hidden md:flex flex-row md:flex-col justify-between">
              <div className="basis-1/4 items-center justify-center">
                <img
                  src={speed}
                  alt="speed"
                  className="md:max-w-[4rem] md:mb-2"
                ></img>
              </div>
              <div className="basis-3/4 pl-4 md:pl-0">
                <h2 className="font-medium text-xl md:mb-2">Speed</h2>
                <p className="text-slate-500">
                  Use this section to describe your company and the products you
                  offer. You could share your company's
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between md:hidden">
              <div className="basis-3/4 pr-4">
                <h2 className="font-medium text-xl">Performance</h2>
                <p className="text-slate-500">
                  Use this section to describe your company
                </p>
              </div>
              <div className="basis-1/4 items-center justify-center">
                <img src={performance} alt="performance"></img>
              </div>
            </div>
            <div className=" flex-row hidden md:flex-col md:flex justify-between">
              <div className="basis-1/4 items-center justify-center">
                <img
                  src={performance}
                  alt="performance"
                  className="md:max-w-[4rem] md:mb-2"
                ></img>
              </div>
              <div className="basis-3/4 pl-4 md:pl-0">
                <h2 className="font-medium text-xl md:mb-2">Performance</h2>
                <p className="text-slate-500">
                  Use this section to describe your company and the products you
                  offer. You could share your company's
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="b2 flex flex-col md:flex-col pl-10 pr-10 pb-10 items-center">
        <div className="flex mb-2 md:items-center flex-col md:flex-col">
          <h1 className="font-medium text-2xl md:font-bold md:text-3xl mb-2">
            Our work
          </h1>
          <p className="text-slate-500 md:max-w-xl">
            Use this section to describe your company and the products you
            offer. You could share your company's story and details about why
            you are in business.
          </p>
        </div>
        <div className="flex flex-col gap-x-3 mt-4 justify-between lg:flex-row">
          <div className="mb-6 flex flex-col items-center">
            <img src={img1} alt="img1" className="md:max-w-xs"></img>
            <h1 className="text-2xl font-medium mt-2">Apple</h1>
            <p className="text-slate-500">Use this section to describe your </p>
          </div>
          <div className="mb-6 flex flex-col items-center">
            <img src={img2} alt="img2" className="md:max-w-xs"></img>
            <h1 className="text-2xl font-medium mt-2">Coca cola</h1>
            <p className="text-slate-500">Use this section to describe your </p>
          </div>
          <div className="mb-6 flex flex-col items-center">
            <img src={img3} alt="img3" className="md:max-w-xs"></img>
            <h1 className="text-2xl font-medium mt-2">Nike</h1>
            <p className="text-slate-500">Use this section to describe your </p>
          </div>
        </div>
        <div className="mb-10">
          <button className="p-6 w-[135px] h-6 rounded-full bg-[#6366f1] flex items-center justify-center">
            <a href="#" className="btn">
              See More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
