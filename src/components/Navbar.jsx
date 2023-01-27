import React from "react";
import Lottie from "react-lottie";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import * as Shopping from "../assets/lottie/shopping-cart.json";

import "../index.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Shopping,
  };
  return (
    <nav className="body w-full justify-between font-medium md:mt-10 mt-3 lg:mt-10 relative items-center flex ">
      <div className="logo flex  ">
        <Link to='/'>
        <div className="flex items-center  ">
          <div className="mb-1  ">
            <Lottie options={defaultOptions} height={50} width={50} />
          </div>
          <h1 className="text-primary font-bold text-xl">SHOPCART</h1>
        </div>
        </Link>
      </div>
      <div className="menuIcon lg:hidden md:hidden  ">
        <svg
          fill="#023d29"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="20"
        >
          <path
            fill-rule="evenodd"
            d="M18.9 17.009c0 .551-.518.991-1.097.991h-3.15a.98.98 0 0 1-1.003-.991v-3A.994.994 0 0 1 14.653 13h3.15c.58 0 1.097.458 1.097 1.009v3zM17.803 11h-3.15c-1.74 0-3.103 1.352-3.103 3.009v3c0 1.657 1.363 2.991 3.103 2.991h3.15C19.543 20 21 18.666 21 17.009v-3C21 12.352 19.543 11 17.803 11zM7.35 17.009c0 .551-.518.991-1.097.991h-3.15a.98.98 0 0 1-1.003-.991v-3A.994.994 0 0 1 3.103 13h3.15c.58 0 1.097.458 1.097 1.009v3zM6.253 11h-3.15C1.363 11 0 12.352 0 14.009v3C0 18.666 1.363 20 3.103 20h3.15c1.74 0 3.197-1.334 3.197-2.991v-3C9.45 12.352 7.993 11 6.253 11zM18.9 6.009c0 .551-.518.991-1.097.991h-3.15a.98.98 0 0 1-1.003-.991v-3A.994.994 0 0 1 14.653 2h3.15c.58 0 1.097.458 1.097 1.009v3zM17.803 0h-3.15c-1.74 0-3.103 1.352-3.103 3.009v3C11.55 7.666 12.913 9 14.653 9h3.15C19.543 9 21 7.666 21 6.009v-3C21 1.352 19.543 0 17.803 0zM7.35 6.009c0 .551-.518.991-1.097.991h-3.15A.98.98 0 0 1 2.1 6.009v-3A.994.994 0 0 1 3.103 2h3.15c.58 0 1.097.458 1.097 1.009v3zM6.253 0h-3.15C1.363 0 0 1.352 0 3.009v3C0 7.666 1.363 9 3.103 9h3.15C7.993 9 9.45 7.666 9.45 6.009v-3C9.45 1.352 7.993 0 6.253 0z"
          />
        </svg>
      </div>
      <div className="links lg:block md:block hidden md:ml-10 lg:ml-10 ">
        <ul className="flex  md:space-x-5 space-x-2 lg:space-x-6">
          <li className="flex  gap-1  ">
            Categories
            <IoIosArrowForward className="rotate-90 mt-1 " />
          </li>
          <li>Deals</li>
          <li>What's New</li>
          <li>Delivery</li>
        </ul>
      </div>
      <div className=" lg:block md:block hidden account lg:flex  md:flex justify-end   lg:space-x-6 ">
        <div className="relative w-full ">
          <div className=" mt-1 mr-5 lg:hidden ">
            <BsSearch />
          </div>
          <div className="lg:block hidden">
            <BiSearch className="absolute  top-2 right-2 text-gray-400 " />
            <input
              type="text"
              className=" pl-3 bg-gray-200 w-full  rounded-2xl py-1  focus:border-none   "
              placeholder="Search"
            />
          </div>
          {/* <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required> */}
        </div>

        <div className="flex gap-1 items-center">
          <AiOutlineUser />
          Account
        </div>
        <div className=" lg:block md:block hidden  md:flex lg:flex gap-1 items-center">
          <CiShoppingCart />
          Cart
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
