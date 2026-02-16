import React from "react";
import {assets} from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Sidebar */}
      <div className="md:w-1/2 flex flex-col justify-center gap-4 py-8 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointments <br /> With Trusted Doctors.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm md:text-base lg:text-lg font-light" >
          <img className="w-28" src={assets.group_profiles} alt="Group Profiles" />
          <p>
            Our team of experts is here to help you <br /> Schedule your
            appointments today!
          </p>
        </div>
        <a href="" className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-primary font-medium w-max">
          Book Appointments <img src={assets.arrow_icon} alt="Arrow" />
        </a>
      </div>

      {/* Right sidebar */}
      <div className="md:w-1/2 relative ">
        <img src={assets.header_img} alt="header_img" className="w-full md:absolute  bottom-0 h-auto rounded-lg"/>
      </div>
    </div>
  );
};

export default Header;
