import React from 'react'

const Input = ({icon, type, placeholder,styles}) => {
  return (
    <>
    <div className='flex flex-row items-center border border-black gap-2 bg-white rounded-full p-[10px]'>
        <input
            className={styles}
            type={type}
            placeholder={placeholder}
        />
        <span className='flex items-end w-[10%] text-[25px] text-var(Green-color)'>{icon}</span>
    </div>
    </>
  )
}

export default Input
