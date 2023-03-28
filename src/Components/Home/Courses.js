import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import graphics from '../../Assests/graphic-design.jpg'
import seo from '../../Assests/SEO.png'
import digitalMarketing from '../../Assests/digitalMarket.png'
import cloudcomputing from '../../Assests/cloudcomputing.jpg'
import GlobalButton from '../../Reuseables/GlobalButton'
function Stars({starIcon}){
  const stars=[];
  for(let i=0; i < starIcon; i++){
      stars.push(<AiFillStar key={i}/>);
  }
  return <>{stars}</>;
  }
const Cart = [
  {
    img : graphics,
    heading: "Graphic Desiging",
    description: "Learn about Graphics",
    price: "100$",
    starIcon: "4"
  },
  {
    img : digitalMarketing,
    heading: "Digital Market",
    description: "Learn Digital Market",
    price: "100$",
    starIcon: "5"
  },
  {
    img : cloudcomputing,
    heading: "Cloud Computing",
    description: "Learn Cloud Computing",
    price: "100$",
    starIcon: "2"
  },
  {
    img : seo,
    heading: "SEO",
    description: "Search Engine Optimization ",
    price: "100$",
    starIcon: "3"
  },  
];
const Courses = () => {
  return (
    <>
        <div className='flex flex-col py-[10px] px-[25px] mt-3'>
          <h2 className='text-[28px] font-bold flex justify-center'>Online Courses Started Soon</h2>
          <div className='w-full flex flex-col px-[10px] justify-center gap-10 md:flex-row items-center'>
          {Cart.slice(0, 4).map((val) => {
            return (
              <>
                <div
                  className="mt-2 w-full md:w-1/5 border-2 drop-shadow-xl hover:cursor-pointer mb-2 flex flex-col rounded-lg"
                >
                  <div className="w-full">
                    <img
                      src={val.img}
                      alt="Course_Pic"
                      className=" border w-full rounded-lg md:h-[230px] h-[200px]"
                    />
                  </div>
                  <div className="gap-2 px-[16px] h-[150px] flex flex-col py-[20px]">
                    <h2 className="text-[18px] font-bold mt-2">{val.heading}</h2>
                    <p>{val.description}</p>
                    <p className="font-bold">
                      {val.price}
                    </p>
                      <div className="flex flex-row items-center bg-green-500 text-[#ffd700]">
                        <Stars starIcon={val.starIcon}
                        />
                        <p className="text-[#ffd700] flex flex-row items-center text-[18px] ">
                        
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          </div>
          <div className='w-full flex justify-center mt-3'>
            <GlobalButton
              styling="bg-green" title="View More"
            />
          </div>  
        </div>
    </>
  )
}

export default Courses