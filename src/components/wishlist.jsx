import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from "react-rating-stars-component";
import wishlistProducts from"./wishlistProducts"
import { Link, Navigate } from "react-router-dom";
import { removeProduct } from '../redux/reducers/wishlist';
import { toast, Toaster } from 'react-hot-toast';

const Wishlist = () => {
  const cartt=useSelector((state)=>state.wishlist.cart)
  const dispatch=useDispatch()
  
  const handelremoveProduct =(item)=>{
    dispatch(removeProduct(item));  
    toast.error(` Product removed`);
  }
  if(cartt.length>=1){

    return (
      <section className='body mt-10 font-Montserrat '>
       
      {
       
          cartt.map((item)=>{
            return(
              <div className="">
                          <Toaster
                           position="top-center"
                          reverseOrder={false}
                                        />
          <div className=" md:flex justify-center   lg:flex md:justify-between  lg:justify-between items-center border-b-2 py-5 ">
              <div className=" md:flex  lg:flex  items-center ">
  
              <img src={item.image} className=' w-32' alt="" />
              <h1 className='ml-5' >{item.title.substring(0,10)}</h1>
              </div>
              <div className=" md:flex  lg:flex items-center ">
            
                <ReactStars
              count={5}
              value={item.rating.count}
              size={24}
               activeColor="#39b430"
    />
                <h1> ({item.rating.count}) </h1>
              </div>
              <div className="flex gap-3">
              <h1>${item.price}</h1>
                
<div className="" onClick={()=>handelremoveProduct(item)} >
                {/* <h1>Hell</h1> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>              </div>
</div>
            
  
             
             
          </div>
                 </div>
            )
  
          })
      }
     
        
      </section>
    )
  }else{
    return(
      <section className='body'>
        <h1 className='flex justify-center items-center font-semibold text-4xl mt-20  ' >Your cart is empty! <Link to='/' >  <span className='underline ml-1 text-primary ' >Go to shop</span></Link> </h1>
      </section>
    )
  }
}

export default Wishlist