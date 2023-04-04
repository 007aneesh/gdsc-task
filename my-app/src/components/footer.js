import React from "react";
import "./companies.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter, BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-around items-center md:flex-row c1 p-10">
        <div className="flex flex-col items-center mb-16 justify-center">
          <h1 className="uppercase font-semibold text-2xl md:mt-8 mb-3 tracking-widest">
            Embrane
          </h1>
          <h3 className="mb-3">Los Angeles, California, USA</h3>
          <p className="flex flex-row gap-x-4">
            <AiOutlineInstagram size={30} />
            <BsTwitter size={30} />
            <BsFacebook size={30} />
          </p>
        </div>
        <div className="grid grid-flow-row md:grid-cols-3 gap-y-4 gap-x-16 items-center">
          <div className="flex justify-center items-center">
            <h1>Work With Us</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1>Advertise With Us</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1>Support Us</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1>Business Advices</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1>Private Coaching</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1>Our Work</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1>Our Commitment</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1>Our Team</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1>About Us</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1>FAQs</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1>Report a Bug</h1>
          </div>
        </div>
      </div>
      <div className="bg-black flex p-5 items-center justify-center">
        <h1 className="text-white">
          © 2022 Embrace, Inc. - All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
