import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { filtedProducts } from "../redux/reducers/products";
const CategoriesNav = () => {
  const dispatch=useDispatch()
  const cartt=useSelector((state)=>state.wishlist.cart)
  // const handelCat=(cat)=>{
  //     cartt.filter((curDate)=>{
  //     return curDate.category===cat;
  //   });
    
  // }
  const {category}=useParams()
  return (
    <nav className="body flex justify-between mt-10">
      <div className="">
        <ul className="flex gap-5 flex-wrap">
          <Link to={"filteredby/jewelery"} >
          <div onClick={()=>dispatch(filtedProducts('jewelery'))} className="flex items-center bg-gray-300 gap-1 rounded-full px-2 py-1 ">
            <span className="font-medium text-base">jewelery</span>
            
          </div>
          </Link>
          <Link to={"filteredby/electronic"} >
          <div onClick={()=>dispatch(filtedProducts('electronics'))}  className="flex items-center bg-gray-300 gap-1 rounded-full px-2 py-1 ">
            <span className="font-medium text-base">electronics</span>
            
          </div>
          </Link>
        <Link to={"filteredby/men's clothing"} >
          <div onClick={()=>dispatch(filtedProducts("men's clothing"))} className="flex items-center bg-gray-300 gap-1 rounded-full px-2 py-1 ">
            <span className="font-medium text-base">men's clothing</span>
            
          </div>
        </Link>
        <Link to={"filteredby/woman's clothin"}  >
          <div onClick={()=>dispatch(filtedProducts("women's clothing"))} className="flex items-center bg-gray-300 gap-1 rounded-full px-2 py-1 ">
            <span className="font-medium text-base">women's clothing</span>
            
          </div>
        </Link>
       
       
        </ul>
      </div>
      <div className="">
      <div   className="flex items-center border-2 border-gray-400  bg-white gap-1 rounded-full px-2 py-1 ">
            <span className="font-medium text-base">Sort By</span>
            <IoIosArrowForward className="rotate-90 mt-1 " />
            
          </div>
      </div>
    </nav>
  );
};

export default CategoriesNav;
