import React from "react";
import { BsTelephone } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
const Alertheader = () => {
  return (
    <header className="bg-primary  lg:block md:block hidden py-2 px-40 font-Montserrat text-base text-white items-center lg:flex md:flex justify-between">
      <div className="flex items-center">
        <BsTelephone />
        <p>+00326658</p>
      </div>
      <div className="flex lg:block md:hidden hidden lg:flex gap-5">
        <h1>Get 50% on Select items</h1>
        <p>|</p>
        <h1>Shop Now</h1>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center">
          <p>Eng</p>
          <IoIosArrowForward className="rotate-90" />
        </div>
        <div className="flex items-center">
          <p>Location </p>
          <IoIosArrowForward className="rotate-90" />
        </div>
      </div>
    </header>
  );
};

export default Alertheader;
