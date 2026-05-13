import React from 'react'

function ImageCard({ product }) {
   
   return (
      <div className='w-72 h-80 p-8 m-3 border-2 border-white'>
         <img
            className='aspect-square w-60 mb-1'
            src={product.images[0]} alt="Product image"
         />
         <h2 className='text-white flex-wrap'> {product.title} </h2>
      </div>
   )
}

export default ImageCard