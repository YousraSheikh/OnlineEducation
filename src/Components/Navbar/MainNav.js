import React from 'react'
import GlobalButton from '../../Reuseables/GlobalButton'
import {FiSearch} from 'react-icons/fi'
const btn =[
    {
        text: "Home",
        styled: '',
    },
    {
        text: "Features",
        styled: '',
    },
    {
        text: "Courses",
        styled: '',
    },
    {
        text: "Blogs",
        styled: '',
    },
    {
        text: "Gallery",
        styled: '',
    },
    {
        text: "Shop",
        styled: '',
    },
    {
        text: "Contact Us",
        styled: '',
    },
]
const MainNav = () => {
  return (
    <>
        <div className='py-[10px] px-[50px] w-full flex gap-2'>
            <div  className='w-[20%]'>
                <h2 className='text-[30px] font-bold italic text-white'>online Education.</h2>
            </div>
            <div  className='w-[80%] flex justify-end flex-row gap-2 font-bold'>
                {btn.map((val,index)=>{
                    return(
                        <>
                            <div className=''>
                                <button className='text-[#ffffff] p-[5px] w-[100px] hover:border-2'>
                                    {val.text}
                                </button>
                                
                            </div>
                        </>
                    )}
                )}
                <FiSearch className='p-[5px] text-[40px] text-white'/>
            </div>
        </div>
    </>
  )
}

export default MainNav