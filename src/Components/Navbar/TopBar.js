import React from 'react'
import GlobalButton from '../../Reuseables/GlobalButton'
const TopBar = () => {
  return (
    <>
        <div className='py-[5px] px-[50px] w-full flex md:flex-row'>
            <div className='w-[100%] md:2/5 text-white'>Contact us on 0800 123 4567 or <a href='#' className='text-white underline'>supportthemerex.net</a></div>
            <div className='w-1/2 gap-5 md:gap-3 md:3/5 justify-end md:flex flex-row hidden'>
                <div className='flex gap-1'>
                    <button className=' px-[10px] py-[5px] rounded-md bg-red-400'>$</button>
                    <GlobalButton
                    title="Add to cart"
                    styling="bg-yellow-400"
                    />
                    <GlobalButton
                    title="English"
                    styling="bg-yellow-400"
                    />
                </div>
                <div className='flex gap-1'>
                    <GlobalButton
                    title="John Smith"
                    styling="bg-yellow-400"
                    />
                    <GlobalButton
                    title="login"
                    styling="bg-yellow-400"
                    />
                </div>
                
            </div>
        </div>
    </>
  )
}

export default TopBar