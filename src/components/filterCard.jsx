import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Image from "../assets/images/headphone.png";
import { addtolist} from "../redux/reducers/wishlist";

 import 'react-toastify/dist/ReactToastify.css'
 import toast, { Toaster } from 'react-hot-toast';

 const FilterCard = ({product}) => {
    const dispatch=useDispatch()
    const cartt=useSelector((state)=>state.wishlist.cart)
    const items=cartt.map((item)=>item.id)

    
    const printId=()=>{
      cartt.find(id=>id)
    }
    const handelAddToCard=()=>{
      printId()
        dispatch(addtolist(product))
      
        
      }
   
    
   
  return (
    

    
    <div className=" border-2   w-11/12 py-5 items  rounded-2xl  " >
          <div className="  relative rounded-xl ">
            <div className="">
              <svg
                className="w-7 h-7  right-5 top-3  rounded-full p-1  absolute "
                xmlns="http://www.w3.org/2000/svg"
                fill='none'
                viewBox="0 0 24 24"
                // strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>

            <div className="  py-5 flex items-center justify-center  ">
              <img className=" h-60  " src={product.image} alt="" />
            </div>
          </div>
          <Toaster
  position="top-center"
  reverseOrder={false}
/>
          <div className="ml-2">
            <div className="  mt-3 flex justify-between ">
              <h1 className="font-semibold mb-0 ">{product.title.substring(0,10)}</h1>
           
              <h1 className="font-semibold">${product.price}</h1>
            </div>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <div className="flex">
              <svg
                className=" w-5"
                fill="#39b430"
                stroke="#39b430"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                className=" w-5"
                fill="#39b430"
                stroke="#39b430"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                className=" w-5"
                fill="#39b430"
                stroke="#39b430"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                className=" w-5"
                fill="#39b430"
                stroke="#39b430"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                className=" w-5"
                fill="#39b430"
                stroke="#39b430"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
            <Link to={`/products/${product.id}`} >
            <div  onClick={()=>handelAddToCard(product)} className=" hover:bg-primary hover:text-white hover:border-[#023d29] cursor-pointer ease-in duration-200 mt-3 font-medium items-center border-2  border-black gap-1 w-fit rounded-full px-2 py-1">
              <h1 > Buy</h1>
            </div>
            </Link>
            <div onClick={()=>handelAddToCard(product)}  className=" hover:bg-primary hover:text-white hover:border-[#023d29] cursor-pointer ease-in duration-200 mt-3 font-medium items-center border-2  border-black gap-1 w-fit rounded-full px-2 py-1">
              <h1 > Add to card</h1>
            </div>
          </div>
        </div>
        
  );
};

export default FilterCard;