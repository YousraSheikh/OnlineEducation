import React from 'react'
import {AiOutlineRocket} from 'react-icons/ai'
import {BsGlobe2} from 'react-icons/bs'
import{CgGirl} from 'react-icons/cg'
const IconsText = () => {
  return (
    <>
        <div className='py-[10px] px-[50px] mt-3 mb-3 border-b-2 w-full flex flex-row justify-between'>
            <div className='w-1/4 flex items-center flex-col'>
                <div>
                    <CgGirl className='text-[60px] text-green'/>
                </div>
                <div className='text-[20px] text-green'>
                    Take online computer science course with personalized support
                </div>
            </div>
            <div className='w-1/4 flex items-center flex-col'>
                <div>
                    <AiOutlineRocket className='text-[60px] text-green '/>
                </div>
                <div className='text-[20px] text-green'>Build cool projects to showcase your skills</div>
            </div>
            <div className='w-1/4 flex items-center flex-col'>
                <div>
                    <BsGlobe2 className='text-[60px] text-green '/>
                </div>
                <div className='text-[20px] text-green'>
                    Earn Certification recognize by industry
                </div>
            </div>
        </div>
    </>
  )
}

export default IconsText