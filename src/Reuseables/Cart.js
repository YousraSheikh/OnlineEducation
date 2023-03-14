import React from 'react'

const Cart = ({img, heading, tutorName, price}) => {
  return (
    <>
        <div className='flex flex-col'>
            <img src={img} alt=""/>
            <h2>{heading}</h2>
            <div className='flex flex-row'>
                <p>{tutorName}</p>
                <p>{price}</p>
            </div>
        </div>
        
    </>
  )
}

export default Cart