import React from 'react'
import Categories from '../../Reuseables/Categories'
import Gallery from './Gallery'
const index = () => {
  return (
    <>
        
        <div className='flex flex-row gap-4 p-[30px]'>
            <div className='w-[75%] bg-gray-100'><Gallery /></div>
            <div className='w-[25%] bg-gray-100'><Categories/></div>
        </div>
    </>
  )
}

export default index