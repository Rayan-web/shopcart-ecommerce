import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { CiShoppingCart } from 'react-icons/ci'
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { close, open } from '../redux/reducers/navbarOpen'



const NavmenuMob = ({setmenu,menu}) => {
  const dispatch=useDispatch()
  const state=useSelector((state)=>state.navbar.value)
  
  console.log(state)
  return (
    

    <section className='overlay   ' >
      <div className="w-72 h-screen absolute top-0 right-0 z-40 bg-white ">
        
      <div className=""   >
      <svg  onClick={()=>dispatch(open())}   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" border-2 absolute right-2 top-5 w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
      </div>
      <div className="">

      <ul className='mt-5 ml-4 space-y-5 '>
      <li  className="flex items-center text-lg  gap-1  ">
            Categories
            <IoIosArrowForward className="rotate-90 mt-1 " />
          </li>
     
          <li className='items-center text-lg'>Deals</li>
          <li className='items-center text-lg' >What's New</li>
          <li className='items-center text-lg'>Delivery</li>
      </ul>
      </div>
      
      <div className=" mt-5 px-2  relative ">
            <BiSearch className="absolute  top-2 right-4 text-gray-400 " />
            <input
              type="text"
              className=" pl-3 bg-gray-200 w-full  rounded-2xl py-1  focus:border-none   "
              placeholder="Search"
            />
          
      </div>
      <div className="mt-5 px-2 ">
      <div className="flex items-center text-lg gap-1 ">
          <AiOutlineUser />
          Account
        </div>
        <div className=" mt-3 items-center text-lg flex gap-1 ">
          <CiShoppingCart />
          Cart
        </div>
      </div>
      </div>
    </section>
    
  )
}

export default NavmenuMob