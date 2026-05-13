import { useState } from 'react'
import useFetch from './hooks/useFetch'
import ImageCard from './components/ImageCard'

function App() {
  const {data, loading, error} = useFetch("https://api.escuelajs.co/api/v1/products")

  if(loading) {
    return (
      <div className='h-screen flex justify-center item-center text-white'>
        <h2>Loading...</h2>
      </div>
    )
  }

  if(error) {
    return (
      <div className='flex justify-center item-center text-white'>
       <h2>Error: {error} </h2>
      </div>
    )
  }
  console.log(typeof data, data)
  return (
    <div className='min-h-screen bg-[#1b1b1b] text-white p-6'>
      <h1 className='text-3xl font-medium text-center mb-6'>Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {data.map((product) => (
          <ImageCard product={product}/>
        ))}
      </div>
    </div>
  )
}

export default App
