import React from 'react'

function ImageCard({ product }) {
   
   return (
      <div className='w-[97%] h-[97%] p-6 border-2 border-white flex flex-col justify-between'>
         <img
            className='w-full mb-1'
            src={product.images[0]} alt="Product image"
         />
         <h2 className='text-white flex-wrap'> {product.title} </h2>
      </div>
   )
}

export default ImageCard