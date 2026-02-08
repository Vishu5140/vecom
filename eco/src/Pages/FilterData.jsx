import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import { CgUnavailable } from "react-icons/cg";
function FilterData() {
  const filterProducts=useSelector(state => state.product.filteredData)
  return (
   <>
      <div className='px-4 md:px-16 lg:px-24 mx-auto py-12'>
        {filterProducts.length >0 ? <><h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
          {
            filterProducts.map((product)=>{
              return(
                <div  >
                  <ProductCard key={product.id} product={product} />
                </div>
              )

            })
          }
        </div></>:
        <>
        <div className='flex justify-center flex-col items-center'>
        <CgUnavailable className='text-9xl' />
        <h1 className='text-3xl font-bold text-'>Not Available</h1>
        </div>

        </>}
        
      </div>
   </>
  )
}

export default FilterData