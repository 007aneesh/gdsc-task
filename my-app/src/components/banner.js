/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import img from "../Assets/banner1.png";
import img2 from "../Assets/people.png";
const Banner = () => {
  return (
    <div>
      <div className="relative bg-[#3461FF] mb-4">
        <img src={img} alt="banner"></img>
        <h1 className="text-2xl lg:text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:-translate-x-0 lg:left-[12%] lg:max-w-[18rem] text-white text-center">
          Start Your Journey With Us Now
        </h1>
        <p className="text-white max-w-md hidden absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-[70%] lg:block ">
          Use this section to describe your company and the products you offer.
          You could share your company's story and details about why you are in
          business. Use this section to describe your company and the products
          you offer. You could share your company's story and{" "}
        </p>
        <a
          href="#"
          className="underline text-white hidden absolute  transform -translate-x-1/2 -translate-y-1/2 left-[58%] top-[80%] lg:block"
        >
          Learn More
        </a>
      </div>
      <div className="flex flex-col items-center lg:items-start lg:flex-row p-10 lg:pl-44 lg:pr-44 lg:pt-20 lg:gap-36 justify-between">
        <div className="mb-10 md:mb-16">
          <img src={img2} alt="people" className="md:max-w-lg"></img>
        </div>
        <div className="flex flex-col mb-6">
          <h1 className="text-2xl mb-2 font-semibold md:text-4xl">
            Meet Our team
          </h1>
          <p className="text-slate-500 mb-2 text-xl">
            Use this section to describe your company and the
          </p>
          <p className="text-slate-400 md:max-w-lg mb-4">
            Use this section to describe your company and the products you
            offer. You could share your company's story and details about why
            you are in business.
          </p>

          <button className="p-5 mt-4 w-[135px] h-6 rounded-full bg-[#6366f1] flex items-center justify-center">
            <a href="#" className="btn">
              Learn More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
