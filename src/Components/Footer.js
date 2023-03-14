import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import Icons from '../Reuseables/icons'
const Footer = () => {
  return (
    <>
        <div className='flex flex-col justify-center py-[5px]'>
            <div className='flex flex-col items-center gap-5 bg-black text-white'>
                <div className='font-bold text-[30px] p-[5px] mt-7'>Online Education</div>
                <div className='flex flex-row'>
                    <div className='flex items-end flex-col p-[10px] text-gray-400'>
                        <p className='text-[20px]'>1234 Some St</p>
                        <p className='text-[20px]'>San Francisco, CA 94102, US</p>
                    </div>
                    <div className='flex items-start flex-col p-[10px]  text-gray-400'>
                        <p className='text-[20px]'>Phone: 1.800.123.4567</p>
                        <p className='text-[20px]'>Fax: 1.800.123.4566</p>
                    </div>
                </div>
                <div className='flex flex-row space-x-4 my-2 mb-7'>
                    <Icons />
                </div>
            </div>
            <div className='flex flex-row justify-center py-[10px] px-[5px] border-b-2'>
                <p>Online Education 2014</p>
                <AiOutlineCopyrightCircle className='text-[22px]'/>
                <p>-All rights Reserved</p>
            </div>
        </div>
    </>
  )
}

export default Footer;