import React from 'react'
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import * as Loading  from '../assets/lottie/loading.json'

const Paymentmodal = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: Loading,
       
      };
  return (
   
    <div className="modalBackground">
    <div className="modalContainer">
        

     <Lottie options={defaultOptions}
              height={300}
              width={300}/>
       
            <h1 className='font-medium text-xl text-center ' >Your order has been accepted</h1>
            <p className='text-center font-normal text-gray-500 '>Transection ID:98668676</p>
            <Link to="/" >
            <button  className=" w-full bg-[#f6cd63] rounded-full lg:px-7 md:py-2 py-1 px-3 md:px-5 lg:py-3 md:mt-10 mt-3  lg:mt-10 text-white">
             Continue  Shopping
            </button>
            </Link>
      
     
      
    </div>
  </div>












  )
}

export default Paymentmodal