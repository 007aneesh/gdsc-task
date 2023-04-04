import React from "react";
import "./companies.css";
import img1 from "../Assets/c1.png";
import img2 from "../Assets/c2.png";
import img3 from "../Assets/c3.png";
import img4 from "../Assets/c4.png";
import img5 from "../Assets/c5.png";
import img6 from "../Assets/c6.png";
import img7 from "../Assets/c7.png";
import img8 from "../Assets/c8.png";
const Companies = () => {
  return (
    <div className="flex flex-col w-full mt-4 c1 pt-8 pb-10">
      <div className=" ml-10 mb-6 sm:mb-9">
        <div className="font-semibold text-xl sm:text-3xl sm:ml-4 lg:ml-32">
          <h2 className="md:text-3xl font-bold">Companies</h2>
          <h2 className="md:text-3xl font-bold">We work with</h2>
        </div>
      </div>
      <div className="pl-4 pr-4 flex flex-col items-center md:pl-8 md:pr-8 ">
        <div className="grid grid-cols-4 gap-5 sm:gap-8 lg:gap-44">
          <img src={img1} alt="c1" className="w-16 h-7 sm:w-36 sm:h-12" />
          <img src={img2} alt="c2" className="w-16 h-7 sm:w-36 sm:h-12" />
          <img src={img3} alt="c3" className="w-16 h-7 sm:w-36 sm:h-12" />
          <img src={img4} alt="c4" className="w-16 h-7 sm:w-36 sm:h-12" />
        </div>
        <div className="grid grid-cols-4 gap-5 sm:gap-8 lg:gap-44 justify-center mt-4">
          <img src={img5} alt="c5" className="w-16 h-6 sm:w-36 sm:h-10" />
          <img src={img6} alt="c6" className="w-16 h-4 sm:w-36 sm:h-8" />
          <img src={img7} alt="c7" className="w-16 h-6 sm:w-36 sm:h-10" />
          <img src={img8} alt="c8" className="w-16 h-5 sm:w-36 sm:h-8" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
