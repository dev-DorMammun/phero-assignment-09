import React from "react";
import LogoWhite from "../assets/logo_white.png";

const Footer = () => {
  return (
    <div className="bg-black p-10">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-5 text-white mx-auto max-w-[1300px]">
        <div className="flex flex-col justify-between">
          <img src={LogoWhite} alt="" className="w-[300px]" />
          <small className="text-center md:text-left text-gray-600">
            Copyright © 2025 by SkillCircle
          </small>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-white">
          <div>
            <h2 className="text-xl italic font-semibold">Address</h2>
            <p className="text-gray-500">
              House 17, Road 8, Block D Banani, Dhaka 1213 Bangladesh
            </p>
          </div>
          <div>
            <h2 className="text-xl italic font-semibold">Call Us</h2>
            <p className="text-gray-500">+880 1XXXX - XXXXXX</p>
          </div>
          <div>
            <h2 className="text-xl italic font-semibold">For Support</h2>
            <p className="text-gray-500">support@skillcircle.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
