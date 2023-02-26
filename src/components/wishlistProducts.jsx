import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { useSelector } from 'react-redux'

const WishlistProducts = () => {
    const cartt=useSelector((state)=>state.wishlist.cart)
    const test=()=>{
        if (cartt >= 1) {
            <h1>Hello</h1>
        } else {
            <h1>Hello 2</h1>
        }
    }
  return (
    
     <div className="">
    {
     
        cartt.map((item)=>{
          return(
            <div className="">
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
            <h1>${item.price}</h1>
          

           
           
        </div>
               </div>
          )

        })
    }
      </div>
   
  )
}
export default WishlistProducts;