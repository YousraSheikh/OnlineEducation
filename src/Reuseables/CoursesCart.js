import React from 'react'
import {AiFillStar, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
function Stars({icons}){
    const stars=[];
    for(let i=0; i < icons; i++){
        stars.push(<AiFillStar key={i}/>);
    }
    return <>{stars}</>;
    }
const Courses = ({image, alt, heading, description, price, StarIcon}) => {
  return (
    <>
    <div className='relative flex flex-col border-2 h-full w-[30%] hover-blur hover:cursor-pointer hover:shadow-2xl'>
        <div className="absolute top-0 left-0 w-full h-full bg-gray-100 py-[30%] px-[10%] opacity-0 hover:opacity-100 transition-opacity">
            <p className='flex justify-center font-bold'>Make yourself upto date with new techology and stay conected  with  us.</p>
            <div className='flex flex-row justify-center p-[10px] space-x-3'>
                <BsFacebook   className='text-blue-600 text-[30px]'/>
                <AiFillInstagram className='text-pink-600  text-[35px]'/>
                <AiOutlineTwitter className='text-blue-600 text-[35px]'/>
            </div>
        </div>
        <img src={image} alt={alt} className='w-full h-[70%]'/>
        <div className='flex flex-col ml-3 h-[30%]'>
            <h2  className='font-bold text-[20px]'>{heading}</h2>
            <p className='text-[20px]'>{description}</p>
            <div className='flex flex-row gap-5 w-full'>
                <div><p>{price}</p></div>
                <div className="flex flex-row items-center bg-green-500 text-[#ffd700]">
                <Stars
                    icons={StarIcon}
                />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Courses