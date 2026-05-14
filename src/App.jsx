import { useState } from 'react'
import useFetch from './hooks/useFetch'
import ImageCard from './components/ImageCard'

function App() {
  const {data, loading, error} = useFetch("https://api.escuelajs.co/api/v1/products")

  if(loading) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <span class="loader"></span>
      </div>
    )
  }

  if(error) {
    return (
      <div className='min-h-screen flex justify-center items-center text-white'>
       <h2>Error: {error} </h2>
      </div>
    )
  }
  
  return (
    <div className='min-h-screen text-white p-6'>
      <h1 className='text-3xl font-medium text-center mb-6'>Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {data.map((product) => 
          <ImageCard key={product.id} product={product}/>
        )}
      </div>
    </div>
  )
}

export default App