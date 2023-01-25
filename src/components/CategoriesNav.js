import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
const CategoriesNav = ({ setSelect }) => {
  return (
    <nav className="body flex justify-between mt-10">
      <div className="">
        <ul className="flex gap-5 flex-wrap">
          <div className="flex items-center bg-gray-300 gap-1 rounded-full px-2 py-1 ">
            {/* <span className="font-medium text-base">Headphone</span>
            <svg
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg> */}

            <select
              className="bg-gray-300 "
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="Shoes">Shoes</option>
              <option value="Phones">Phones</option>
              <option selected value="Headsets">
                Headsets
              </option>
              <option value="T-shirt">T-shirt</option>
            </select>
          </div>
          <div className="flex items-center bg-gray-300 gap-1 rounded-full px-2 py-1 ">
            <span className="font-medium text-base">Price</span>
            <svg
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="flex items-center bg-gray-300 gap-1 rounded-full px-2 py-1 ">
            <span className="font-medium text-base">Hello</span>
            <svg
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="flex items-center bg-gray-300 gap-1 rounded-full px-2 py-1 ">
            <span className="font-medium text-base">Hello</span>
            <svg
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="flex items-center bg-gray-300 gap-1 rounded-full px-2 py-1 ">
            <span className="font-medium text-base">Hello</span>
            <svg
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="flex items-center bg-gray-300 gap-1 rounded-full px-2 py-1 ">
            <span className="font-medium text-base">Hello</span>
            <svg
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="flex items-center bg-gray-300 gap-1 rounded-full px-2 py-1 ">
            <span className="font-medium text-base">Hello</span>
            <svg
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </ul>
      </div>
      <div className="">
        <ul>
          <div className="flex  items-center w-fit border-2 border-gray-300 gap-1 rounded-full px-2 py-1">
            <span> Sort by</span>
            <svg
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default CategoriesNav;
