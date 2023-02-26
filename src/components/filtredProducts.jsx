import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import FilterCard from './filterCard'

const FiltredProducts = () => {
    const {category}=useParams()
    const filterProducts=useSelector((state)=>state.products.filtredProducts)
    // console.log(filterProducts)
  
  return (
    <section className='body products mt-5 pb-10 ' >
      {
        filterProducts.map((product)=>{
          return <FilterCard key={product.id} product={product} />
        })
        // filterProducts.map((item)=>{
        //   console.log(item.map((name)=>name.name))
        //   return <h1 key={item.id} >{item.name}</h1>
        // })
      }
      {/* item map next  */}
     
      
    </section>
  )
}

export default FiltredProducts;