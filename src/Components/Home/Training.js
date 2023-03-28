import React from 'react'
import {BsCameraVideo} from 'react-icons/bs'
import screen from '../../Assests/screen.jpg'
const Training = () => {
  return (
    <>
        <div className='w-full flex flex-row py-[10px] px-[50px] mt-3 mb-3 border-b-2'>
            <div className='w-[100%] md:w-[40%] flex flex-col md:ml-[20px]'>
                <BsCameraVideo className='text-[50px] text-blue-500'/>
                <h2 className='text-[25px] md:text-[30px] font-semibold'>Our Video Training for Microsoft products and technologies</h2>
                <div className='flex flex-row justify-between my-[10px]'>
                    <div>Posted March 23 2022</div>
                    <div className='border-r-2 border-black'></div>
                    <div>by Douglus Adam</div>
                    <div className='border-r-2 border-black'></div>
                    <div>in computer science</div>
                </div>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className='bg-blue-400 text-white px-[10px] py-[5px] w-[150px] rounded-md my-[10px]'>Browse Course</button>
            </div>
            <div className='w-[60%] hidden md:flex justify-end'>
                <img src={screen} alt='apple screen' className='bg-red-500 w-[70%]'/>
            </div>

        </div>
    </>
  )
}

export default Training