import React from 'react'
import webDevelopment from '../../Assests/web-development.jpg'
import graphics from '../../Assests/graphic-design.jpg'
import GlobalButton from '../../Reuseables/GlobalButton';
const Cart = [
  {
    img : webDevelopment,
    heading: "Web Development",
    description: "Learn web development",
    price: "100$",
    starIcon: "4"
  },
  {
    img : graphics,
    alt: "Graphics",
    heading: "Web Development",
    description: "Learn web development",
    price: "100$",
    starIcon: "4"
  },
  
];
const Courses = () => {
  return (
    <>
     <div className='flex gap-y-10 flex-col'>
      <div className='flex flex-row gap-5 justify-around'>
        {Cart.map((val,index) => {
            return(
            <>
              <div className='relative flex flex-col border-2 h-full w-[30%] hover-blur hover:cursor-pointer hover:shadow-2xl'>
                <img src={val.img} alt={val.alt} className='w-full h-[95%]'/>
                <div className='flex flex-col ml-3 h-[5%] bottom-2'>
                  <h2  className='font-bold text-[20px]'>{val.heading}</h2>
                  <p>{val.price}</p>
                  <GlobalButton
                    styling="bg-green" title="View More"
                  />
                </div>
              </div>
            </>
            );
          })}
      </div>
          <div className='flex flex-row gap-5 justify-around'>
              {Cart.map((val,index) => {
            return(
            <>
      <div className='relative flex flex-col border-2 h-full w-[30%] hover-blur hover:cursor-pointer hover:shadow-2xl'>
        <img src={val.img} alt={val.alt} className='w-full h-[70%]'/>
        <div className='flex flex-col ml-3 h-[30%]'>
            <h2  className='font-bold text-[20px]'>{val.heading}</h2>
            <p className='text-[20px]'>{val.description}</p>
            <div className='flex flex-row gap-5 w-full'>
                <div><p>{val.price}</p></div>
                <div className="flex flex-row items-center bg-green-500 text-[#ffd700]">
                
                </div>
            </div>
        </div>
    </div>
            </>
            );
          })}
          </div>
          <div className='flex flex-row gap-5 justify-around'>
              {Cart.map((val,index) => {
            return(
            <>
      <div className='relative flex flex-col border-2 h-full w-[30%] hover-blur hover:cursor-pointer hover:shadow-2xl'>
        <img src={val.img} alt={val.alt} className='w-full h-[70%]'/>
        <div className='flex flex-col ml-3 h-[30%]'>
            <h2  className='font-bold text-[20px]'>{val.heading}</h2>
            <p className='text-[20px]'>{val.description}</p>
            <div className='flex flex-row gap-5 w-full'>
                <div><p>{val.price}</p></div>
                <div className="flex flex-row items-center bg-green-500 text-[#ffd700]">
                
                </div>
            </div>
        </div>
    </div>
            </>
            );
          })}
          </div>
    </div> 
    <div className='w-full flex justify-center py-[5px]'>
            <GlobalButton
              styling="bg-green" title="View More"
            />
</div>  
    </>
  )
}



export default Courses