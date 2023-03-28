import React from 'react'
import img from '../../Assests/jefferson.jpeg'
import img1 from '../../Assests/McQuee.jpeg'
import img2 from '../../Assests/football.jpeg'
import img3 from '../../Assests/Allien.jpeg'
const Learn = () => {
  return (
    <>
        <div className='py-[5px] px-[50px] flex flex-col items-center border-b-2'>
          <h2 className='text-[30px]'>Learn From Best</h2>
          <p>Our online courses are built-in partnership withtechnology leaders and are relevent to industry needs.</p>
          <p>Upon Completing An Online Course you'll recieve a verified comp-letion Certificaterecognized by industry leaders</p>
          <div className='lg:w- flex justify-center lg:h-[200px] h'>
        <div className='flex lg:flex-row flex-col mt-16 mb-16 lg:gap-x-20'>
          <div className='flex flex-row gap-x-10'>
           <img src={img} alt="brand pic" /> 
            <img src={img1} alt="brand pic" /> 
            <img src={img2} alt="brand pic" /> 
          </div>
          <div className='flex flex-row gap-x-10 lg:mt-0 mt-10'>
            <img src={img3} alt="brand pic" /> 
            <img src={img1} alt="brand pic" /> 
            <img src={img2} alt="brand pic" /> 
          </div>

        </div>
      </div>
        </div>
    </>
  )
}
export default Learn
