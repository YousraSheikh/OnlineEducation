import React from 'react'
import Navbar from '../Navbar'
import Categories from '../../Reuseables/Categories'
import Gallery from './Gallery'
import Footer from '../Footer'
import Feedback from '../../Reuseables/Feedback'
const index = () => {
  return (
    <>
        <Navbar/>
        <div className='flex flex-row gap-4 p-[30px]'>
            <div className='w-[75%] bg-gray-100'><Gallery /></div>
            <div className='w-[25%] bg-gray-100'><Categories/></div>
        </div>
        <Feedback/>
        <Footer/>
    </>
  )
}

export default index