import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Image from "../assets/images/headphone.png"
import { addData, fetchProducts } from "../redux/reducers/products";
import Card from "./card";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Main = (props) => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const {productsId}=useParams()
  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])
  useEffect(()=>{
    
  },[products])
  return (
    <>

<div>

      <div className="body mt-10">
      <h1 className="font-bold text-2xl">For You!</h1>
      <main className="mt-5 pb-10 products  ">
  
        {/* <div className="">
        <Skeleton />
        <Skeleton count={1} />
        </div> */}

        {
          products.data.map((product)=>{
            return <Card key={product.id} product={product} />
          })
        }
          
      </main>
    </div>
   </div> 
   
    </>
  );
};

export default Main;
 