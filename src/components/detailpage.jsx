import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Headphone from "../assets/images/headphone.png";
import { decrement, increment } from "../redux/reducers/counter";
import { fetchProductsById, getSelectedProduct } from "../redux/reducers/products";
import Paypage from "./paypage";

const Detailpage = () => {
 
  const dispatch=useDispatch();
  const count=useSelector((state)=>state.counter.value)
  const total=useSelector((state)=>state.counter.value)
  const {id}=useParams();
  useEffect(()=>{
    dispatch(fetchProductsById(id))
  },[dispatch,id])
  const data=useSelector(getSelectedProduct)

  
  return (
    <section className="body font-Montserrat ">
          <div className="border-t-2 md:flex lg:flex gap-10  ">
          <div className="bg-gray-100  flex-1  rounded-xl mt-14 flex items-center justify-center  ">
            <img className=" w-1/2 " src={data.image} alt="" />
          </div>
          <div className="mt-14   flex-1  mx-10 lg:mx-0 md:mx-0 ">
            <h1 className="font-bold text-2xl mb-3 ">{data.title}</h1>
            <p className="" >
              {data.description}
            </p>
            <div className="flex mb-5 mt-4 ">
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
            <div className="border-t-2 border-b-2 mb-5  mt-5 ">
              <h1 className="font-semibold text-2xl mt-5 ">
            { count * data.price}$ 
          
              </h1>
              <p className="mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
                eius.
              </p>
            </div>
            <div className="flex rounded-full bg-slate-100 w-24 py-2  justify-around  ">
              <button
               disabled={count===1}
              onClick={()=>dispatch(decrement())}
             
              >

              <svg
              
                className="w-5"
                fill="#023d29"
                stroke="#023d29"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
              </svg>
              </button>
              <h1 className="text-primary font-medium text-lg">  {count}</h1>
              <svg
                onClick={()=>dispatch(increment())}
                className="w-5"
                fill="#023d29"
                stroke="#023d29"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </div>
            <div className="flex gap-10">
              <Link to={`/payment/${id}`} >
              <button className="bg-primary rounded-full lg:px-7 w-fit md:py-2 py-1 px-3 md:px-5 lg:py-3 md:mt-10 mt-3  lg:mt-10 text-white">
                Buy now
              </button>
            
              </Link>
              <button className="bg-white border-primary border-2 w-fit  rounded-full lg:px-7 md:py-2 py-1 px-1 md:px-5 lg:py-3 md:mt-10 mt-3  lg:mt-10 text-primary">
                Add to card
              </button>
            </div>
            <div className="mt-20 lg:block md:block hidden">
              <div className="border-2 w-fit">
                <div className=" border-b-2 m-5 ">
                  <div className="flex gap-2 items-center">
                    <svg
                      className="w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 52 52"
                    >
                      <path
                        fill="#d1af89"
                        d="M33 12H3c-.55 0-1 .45-1 1v22c0 .55.45 1 1 1h7c.55 0 1-.45 1-1 0-1.65 1.35-3 3-3s3 1.35 3 3c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V13c0-.55-.45-1-1-1zM18.87 33.87c-.03-.12-.06-.24-.1-.36-.14-.47-.35-.91-.63-1.3a3.58 3.58 0 0 0-.29-.39c-.1-.12-.21-.24-.32-.35a2.6 2.6 0 0 0-.35-.32c-.13-.11-.25-.2-.39-.29-.09-.07-.19-.13-.3-.19-.12-.07-.25-.14-.38-.2s-.26-.12-.4-.16c-.2-.08-.4-.14-.6-.18-.09-.02-.18-.04-.27-.05-.11-.03-.23-.04-.35-.05a3.903 3.903 0 0 0-.98 0c-.12.01-.24.02-.35.05-.09.01-.18.03-.27.05-.27.06-.54.14-.8.25-.07.03-.14.06-.2.09-.13.06-.25.13-.38.2-.11.06-.21.12-.3.19-.14.09-.26.18-.39.29-.08.06-.16.13-.23.21-.05.04-.1.09-.14.14-.11.1-.21.21-.3.32-.11.13-.2.25-.29.39-.28.39-.49.83-.63 1.3-.04.12-.07.24-.1.36L9.1 34H4V14h28v20H18.9l-.03-.13z"
                      />
                      <path
                        fill="#fff"
                        d="M32 14v20H18.9l-.03-.13c-.03-.12-.06-.24-.1-.36-.14-.47-.35-.91-.63-1.3a3.58 3.58 0 0 0-.29-.39c-.1-.12-.21-.24-.32-.35a2.6 2.6 0 0 0-.35-.32c-.13-.11-.25-.2-.39-.29-.09-.07-.19-.13-.3-.19-.12-.07-.25-.14-.38-.2s-.26-.12-.4-.16c-.2-.08-.4-.14-.6-.18-.09-.02-.18-.04-.27-.05-.11-.03-.23-.04-.35-.05a3.903 3.903 0 0 0-.98 0c-.12.01-.24.02-.35.05-.09.01-.18.03-.27.05-.27.06-.54.14-.8.25-.07.03-.14.06-.2.09-.13.06-.25.13-.38.2-.11.06-.21.12-.3.19-.14.09-.26.18-.39.29-.08.06-.16.13-.23.21-.05.04-.1.09-.14.14-.11.1-.21.21-.3.32-.11.13-.2.25-.29.39-.28.39-.49.83-.63 1.3-.04.12-.07.24-.1.36L9.1 34H4V14h28z"
                      />
                      <path
                        fill="#d1af89"
                        d="M49.97 29.76c-.51-2.1-1.2-4.17-2.05-6.16-.75-1.74-1.64-3.44-2.63-5.06A5.305 5.305 0 0 0 40.75 16H33c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1 0-1.65 1.35-3 3-3s3 1.35 3 3c0 .55.45 1 1 1h2c.27 0 .52-.11.71-.29l2-2c.18-.19.29-.44.29-.71v-3c0-.08-.01-.16-.03-.24zM48 32.59 46.59 34h-.69c-.13-.65-.39-1.26-.76-1.79a3.58 3.58 0 0 0-.29-.39c-.11-.14-.24-.28-.38-.41a3.58 3.58 0 0 0-.29-.26c-.13-.11-.25-.2-.39-.29-.09-.07-.19-.13-.3-.19-.12-.07-.25-.14-.38-.2a4.37 4.37 0 0 0-1-.34c-.09-.02-.18-.04-.27-.05-.27-.06-.55-.08-.84-.08-.29 0-.57.02-.84.08-.09.01-.18.03-.27.05-.27.06-.54.14-.8.25-.07.03-.14.06-.2.09-.13.06-.25.13-.38.2-.11.06-.21.12-.3.19-.14.09-.26.18-.39.29-.08.06-.16.13-.23.21-.05.04-.1.09-.14.14-.11.1-.21.21-.3.32-.11.13-.2.25-.29.39-.37.53-.63 1.14-.76 1.79H34V18h6.75c1.16 0 2.22.59 2.83 1.59.88 1.43 1.67 2.93 2.35 4.46.05.11.1.23.15.34.23.55.46 1.1.66 1.66.5 1.33.92 2.69 1.26 4.07v2.47z"
                      />
                      <path
                        fill="#d1af89"
                        d="M48 30.12v2.47L46.59 34h-.69c-.13-.65-.39-1.26-.76-1.79-.08-.13-.18-.26-.29-.39-.11-.14-.24-.28-.38-.41-.09-.1-.19-.18-.29-.26-.13-.11-.25-.2-.39-.29-.09-.07-.19-.13-.3-.19-.12-.07-.25-.14-.38-.2a4.37 4.37 0 0 0-1-.34c-.09-.03-.18-.04-.27-.05-.27-.06-.55-.08-.84-.08-.29 0-.57.02-.84.08-.09.01-.18.02-.27.05-.27.06-.54.14-.8.25a4.549 4.549 0 0 0-.58.29c-.11.06-.21.12-.3.19-.14.08-.27.18-.39.29-.08.06-.16.13-.23.21-.06.04-.11.09-.14.14-.11.1-.21.21-.3.32-.11.13-.2.25-.29.39-.37.53-.63 1.14-.76 1.79H34v-7.95h12.74c.5 1.33.92 2.69 1.26 4.07zM45.93 24.05H34V18h6.75c1.16 0 2.22.59 2.83 1.59.88 1.43 1.67 2.93 2.35 4.46z"
                      />
                      <path
                        fill="#d1af89"
                        d="m18.9 34-.03-.13c-.03-.12-.06-.24-.1-.36-.14-.47-.35-.91-.63-1.3a3.58 3.58 0 0 0-.29-.39c-.1-.12-.21-.24-.32-.35a2.6 2.6 0 0 0-.35-.32c-.13-.11-.25-.2-.39-.29-.09-.07-.19-.13-.3-.19-.12-.07-.25-.14-.38-.2s-.26-.12-.4-.16c-.2-.08-.4-.14-.6-.18-.09-.02-.18-.04-.27-.05-.11-.03-.23-.04-.35-.05a3.903 3.903 0 0 0-.98 0c-.12.01-.24.02-.35.05-.09.01-.18.03-.27.05-.27.06-.54.14-.8.25-.07.03-.14.06-.2.09-.13.06-.25.13-.38.2-.11.06-.21.12-.3.19-.14.09-.26.18-.39.29-.08.06-.16.13-.23.21-.05.04-.1.09-.14.14-.11.1-.21.21-.3.32-.11.13-.2.25-.29.39-.28.39-.49.83-.63 1.3-.04.12-.07.24-.1.36L9.1 34c-.07.32-.1.66-.1 1a5 5 0 0 0 9.9 1c.07-.32.1-.66.1-1 0-.34-.03-.68-.1-1zM14 38c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
                      />
                      <circle cx="14" cy="35" r="3" fill="#d1af89" />
                      <path
                        fill="#d1af89"
                        d="M45.9 34c-.13-.65-.39-1.26-.76-1.79a3.58 3.58 0 0 0-.29-.39c-.11-.14-.24-.28-.38-.41a3.58 3.58 0 0 0-.29-.26c-.13-.11-.25-.2-.39-.29-.09-.07-.19-.13-.3-.19-.12-.07-.25-.14-.38-.2a4.37 4.37 0 0 0-1-.34c-.09-.02-.18-.04-.27-.05-.27-.06-.55-.08-.84-.08-.29 0-.57.02-.84.08-.09.01-.18.03-.27.05-.27.06-.54.14-.8.25-.07.03-.14.06-.2.09-.13.06-.25.13-.38.2-.11.06-.21.12-.3.19-.14.09-.26.18-.39.29-.08.06-.16.13-.23.21-.05.04-.1.09-.14.14-.11.1-.21.21-.3.32-.11.13-.2.25-.29.39-.37.53-.63 1.14-.76 1.79-.07.32-.1.66-.1 1a5 5 0 0 0 9.9 1c.07-.32.1-.66.1-1 0-.34-.03-.68-.1-1zM41 38c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
                      />
                      <circle cx="41" cy="35" r="3" fill="#d1af89" />
                      <path
                        fill="#d1af89"
                        d="M48.41 25.05c0 .55-.44 1-1 1H33c-.55 0-1-.45-1-1s.45-1 1-1h14.41c.56 0 1 .45 1 1z"
                      />
                    </svg>
                    <h1 className="font-medium text-base">Free delivery </h1>
                  </div>
                  <h1 className="ml-8 underline text-gray-500 mb-5">
                    Enter your Postal code for delivery
                  </h1>
                </div>
                <div className=" m-5 ">
                  <div className="flex gap-2 items-center">
                    <svg
                      className="w-7"
                      fill="none"
                      stroke="#d1af89"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>
                    <h1 className="font-medium text-base">Return Delivery </h1>
                  </div>
                  <h1 className="ml-8 mb-5 text-gray-500">
                    Free 30days Delivery Returns.
                    <span className="underline">Details</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Detailpage;
