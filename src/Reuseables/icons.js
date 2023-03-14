import React from 'react'
import {AiOutlineTwitter, AiOutlineWifi} from 'react-icons/ai'
import {BiBasketball} from 'react-icons/bi'
import {FaPinterestP} from 'react-icons/fa'
import {FiFacebook} from 'react-icons/fi'
const icons = () => {
  return (
    <>
        <FiFacebook className='text-[50px] bg-blue-700 border border-blue-700 rounded-md'/>
        <FaPinterestP className='text-[50px] bg-red-600 border border-red-600 rounded-md'/>
        <AiOutlineTwitter className='text-[50px] bg-blue-700 border border-blue-700 rounded-md'/>
        <AiOutlineWifi className='text-[50px] bg-orange-400 border border-orange-400 rounded-md'/>
        <BiBasketball className='text-[50px] bg-pink-500 border border-pink-500 rounded-md'/>
    </>
  )
}

export default icons