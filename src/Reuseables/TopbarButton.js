import React from 'react'

const TopbarButton = ({styling, title, btn}) => {
  return (
    <>
        <div className={`flex flex-row w-full h-[20%] justify-between ${styling}`}>
            <div>{title}</div>
            <div>
                <button className='bg-[#ffffff] p-[10px] w-[100px] rounded-md'>{btn}</button>
                <button className='bg-[#ffffff] p-[10px] w-[100px] rounded-md'></button>
            </div>

        </div>
    </>
  )
}

export default TopbarButton;