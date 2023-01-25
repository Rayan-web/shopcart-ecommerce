import React from "react";
import { Outlet } from "react-router-dom";
import laura from "../assets/images/laura-chouette-69_1-V96Sww-unsplash-removebg.png";
const Priceoff = () => {
  return (
    <>
      <section className="body  ">
        <div className="bg-[#fcf0e4] md:flex lg:flex py-3 rounded-xl justify-between text-center items-center   ">
          <div className="lg:ml-24 md:ml-5">
            <h1 className="lg:font-bold md:font-bold font-medium text-primary text-3xl lg:py-2 md:py-1 py-3">
              Grab upto 50% off on
            </h1>
            <h1 className="lg:font-bold md:font-bold font-medium text-primary text-3xl">
              Select Headphone
            </h1>
            <button className="bg-primary rounded-full lg:px-7 md:py-2 py-1 px-3 md:px-5 lg:py-3 md:mt-10 mt-3  lg:mt-10 text-white">
              Buy now
            </button>
          </div>

          <img
            className="w-1/4  h-auto lg:block md:block hidden object-cover  m-0 md:mr-5 lg:mr-36 "
            src={laura}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Priceoff;
