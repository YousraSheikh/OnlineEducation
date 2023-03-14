import React from 'react'
import Navbar  from '../Navbar'
import  Footer from  '../Footer'
import Categories from '../../Reuseables/Categories'
import Shop from './Shop'
import Feedback from '../../Reuseables/Feedback'
const index = () => {
  return (
    <>
        <Navbar/>
        <div>
            <div className='flex flex-row gap-10 p-[30px]'>
            <div className='w-[75%] bg-gray-100'><Shop/></div>
            <div className='w-[25%] bg-gray-100'><Categories/></div>
        </div>
        <Feedback/>
        <Footer/>
        </div>
    </>
  )
}

export default index