import React from 'react'
import jefferson from '../../Assests/jefferson.jpeg'
import mcqueen from '../../Assests/McQuee.jpeg'
import football from '../../Assests/football.jpeg'
import Allien from '../../Assests/Allien.jpeg'
const Learn = () => {
  return (
    <>
        <div className='py-[5px] px-[50px] flex flex-col items-center border-b-2'>
          <h2 className='text-[30px]'>School Partnership</h2>
          <p>Our online courses are built-in partnership withtechnology leaders and are relevent to industry needs.</p>
          <p>Upon Completing An Online Course you'll recieve a verified comp-letion Certificaterecognized by industry leaders</p>
          <div className='w-50% flex justify-center h-[100px]'>
            <ul className='flex flex-row mt-5 mb-5 gap-x-20'>       
              <li> <img src={jefferson} alt="brand pic"  /> </li>
              <li> <img src={Allien} alt="brand pic" /> </li>
              <li> <img src={football} alt="brand pic" /> </li>
              <li> <img src={mcqueen} alt="brand pic" /> </li>
              <li> <img src={jefferson} alt="brand pic" /> </li>
              <li> <img src={Allien} alt="brand pic" /> </li>
              <li> <img src={football} alt="brand pic" /> </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Learn;