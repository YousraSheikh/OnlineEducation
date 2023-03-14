import React from 'react'

const   PopularButton = ({title}) => {
  return (
    <>
        <div>
            <button className='w-[80px] bg-green text-white rounded-md border p-[5px] hover:text-green  hover:bg-white  hover:drop-shadow-xl'>
                {title}
            </button>
        </div>
    </>
  )
}

export default PopularButton