import React from 'react'
import Navbar  from '../Navbar'
import Typography from './Typography'
import Categories from '../../Reuseables/Categories'
import Feedback from '../../Reuseables/Feedback'
import Footer from '../Footer'
const index = () => {
  return (
    <>
    <div className='bg-gray-100'>
      <Navbar/>
      <div className='flex flex-col md:flex-row gap-10 px-[70px] mt-10 mb-5 '>
        <div className='w-[100%] lg:w-[70%] bg-white'><Typography /></div>
        <div className='w-[100%] lg:w-[30%] bg-white'><Categories/></div>
      </div>
      <Feedback />
      <Footer/>
      </div>
    </>
  )
}

export default index