import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Headphone from "../assets/images/headphone.png"
import { fetchProductsById, getSelectedProduct } from '../redux/reducers/products'
import Paymentmodal from './paymentmodal'
const Paypage = () => {
  const[paypal,setpaypal]=useState(false)
  const[card,setcard]=useState(false)
  const[err,seterr]=useState(false)
  const[check,setcheck]=useState(false)
  const[cardCheck,setCardCheck]=useState(false)
  const handelcheck=(data)=>{
    // console.log(data)
    if(data=="paypal")
    {
      setcheck(!check)
      console.log(check)
      if(paypal==false ){
        
        }
        setpaypal(!paypal)
          seterr(!paypal)
       
    }
    if(data=="card")
    {
      setCardCheck(!cardCheck)
      
        setcard(!card)
        seterr(!card)
    }

    
    
   
  }
const[modal,setmodal]=useState(false)
const dispatch=useDispatch();
const {id}=useParams();

const count=useSelector((state)=>state.counter.value)

useEffect(()=>{
  dispatch(fetchProductsById(id))
},[dispatch,id])
const data=useSelector(getSelectedProduct)
  
  return (
    <>
    <section className='body lg:flex  mt-14 gap-10 font-Montserrat '>
        <div className="flex-1">
            <div className="  border-2 rounded-2xl p-5 ">
                <h1 className='font-semibold  text-2xl'>Review Item and shipping</h1>
                <div className=" flex justify-between items-center mt-5 ">
                
                    <img className='w-1/3   bg-gray-200 rounded-xl ' src={data.image} alt="" />
                    <div className="flex flex-1 justify-between gap-10">

                    
                    <div className="ml-5">
                        <h1 className='font-semibold text-xl'>{data.title}</h1>
                        <p className='text-gray-600'>color:pink</p>
                    </div>
                    <div className="">
                        <h1 className='font-semibold text-xl'> ${ count * data.price} </h1>
                        <p className='text-gray-600'>Quantity:{count}</p>
                    </div>
                    </div>
                </div>
            </div>
           
            <div class="  border-2 rounded-2xl gap-10 mt-10 px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane"/>
      <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************"/>
      <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-2">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="90210"/>
    </div>
  </div>
                </div>
        
        </div>
        <div className="border-2 px-10 rounded-xl p-10 md:w-full w-full lg:w-1/3 flex-0 flex flex-col ">
            <h1 className='font-semibold text-xl mb-5 ' >Order Summery</h1>
            <hr className='w-full ' />
            <div className="mt-5 relative ">
                <input className='bg-gray-300 inputfoc rounded-full focus:border-primary w-full py-4 px-5' type="text" name="" id="" placeholder='56gg77' />
                <div className="  btn  bg-primary px-3 py-2 w-fit rounded-full">
                    <h1 className='text-white text-center text-lg '>Apply coupon</h1>
                </div>
            </div>
            <hr className='w-full mt-10 ' />
            <h1 className='font-semibold text-lg mt-5 '>Payment Details</h1>
           <div className="">
                <form>
               
            
              <input   onClick={()=>setcheck(true)}  disabled={cardCheck} onChange={()=>handelcheck("paypal")} className='checked:bg-primary myinput bg-black '  type="checkbox" id="vehicle1" name="vehicle1" value={paypal}/>
              <label for="vehicle1"> Paypal</label><br/>
              <input  disabled={check} onClick={()=>setCardCheck(true)} onChange={()=>handelcheck("card")} className='myinput' type="checkbox" id="vehicle3" name="vehicle3" value={card}/>
              <label for="vehicle3">Credit card</label><br/>
              
                </form>
           </div>
           {
            paypal&&
            <button type="button" class=" mt-5 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
<svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
Check out with PayPal
</button>
           }
           {
            card&&
           <div className="">
           <div class="mb-6">
    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email </label>
    <input placeholder='Email' type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
              <div class="mb-6">
    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Holder Name</label>
    <input placeholder='Full name' type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
              <div class="mb-6">
    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Number </label>
    <input placeholder='8765*****' type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
              <div className="flex gap-10">
              <div class="mb-6 flex-1 ">
    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expiry</label>
    <input type="number" placeholder='MM/YY'  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
              <div class="mb-6">
    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CVC</label>
    <input type="number" placeholder='000'  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
              </div>
           </div>
           }
         
           <Link to="modal" >
           <button disabled={!check && !cardCheck} style={{opacity:err?'100%':'70%'}} onClick={()=>setmodal(true)}  className=" w-full bg-primary rounded-full lg:px-7 md:py-2 py-1 px-3 md:px-5 lg:py-3 md:mt-10 mt-3  lg:mt-10 text-white">
              Pay $ { count * data.price}
            </button>
           </Link>

            
        </div>
        
           
    </section>
          </>
  )
}

export default Paypage




{/* <button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
<svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
Check out with PayPal
</button> */}