import React from 'react'
import CoursesCart from '../../Reuseables/CoursesCart'
import webDevelopment from '../../Assests/web-development.jpg'
import graphics from '../../Assests/graphic-design.jpg'
import seo from '../../Assests/SEO.png'
import GlobalButton from '../../Reuseables/GlobalButton'
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
    heading: "Web Development",
    description: "Learn web development",
    price: "100$",
    starIcon: "4"
  },
  {
    img : seo,
    heading: "Web Development",
    description: "Learn web development",
    price: "100$",
    starIcon: "4"
  },  
];
const Courses = () => {
  return (
    <>
        <div className='flex flex-col py-[10px] px-[25px] mt-3  border-b-2'>
          <h2 className='text-[28px] font-bold flex justify-center'>Online Courses Started Soon</h2>
          <div className='flex flex-row gap-3 w-full h-[40vh] justify-between px-[100px] mt-3 mb-3'>
          {Cart.map((val,index) => {
            return(
            <>
            <CoursesCart
             image={val.img}
             heading ={val.heading}
             description= {val.description}
             price={val.price}
             StarIcon={val.starIcon}
           />
            </>
            );
          })}
          </div>
          <div className='flex flex-row w-full h-[40vh] justify-between  px-[100px] mt-3 mb-3'>
          {Cart.map((val,index) => {
            return(
            <>
            <CoursesCart
             image={val.img}
             heading ={val.heading}
             description= {val.description}
             price={val.price}
             StarIcon={val.starIcon}
           />
            </>
            );
          })}
          </div>
          <div className='flex flex-row w-full h-[40vh] justify-between  px-[100px] mt-3 mb-3'>
          {Cart.map((val,index) => {
            return(
            <>
            <CoursesCart
             image={val.img}
             heading ={val.heading}
             description= {val.description}
             price={val.price}
             StarIcon={val.starIcon}
           />
            </>
            );
          })}
          </div>
          <div className='flex flex-row w-full h-[40vh] justify-between  px-[100px] mt-3 mb-3'>
          {Cart.map((val,index) => {
            return(
            <>
            <CoursesCart
             image={val.img}
             heading ={val.heading}
             description= {val.description}
             price={val.price}
             StarIcon={val.starIcon}
           />
            </>
            );
          })}
          </div>
          <div className='flex flex-row w-full h-[40vh] justify-between  px-[100px] mt-3 mb-3'>
          {Cart.map((val,index) => {
            return(
            <>
            <CoursesCart
             image={val.img}
             heading ={val.heading}
             description= {val.description}
             price={val.price}
             StarIcon={val.starIcon}
           />
            </>
            );
          })}
          </div>
          <div className='flex flex-row w-full h-[40vh] justify-between  px-[100px] mt-3 mb-3'>
          {Cart.map((val,index) => {
            return(
            <>
            <CoursesCart
             image={val.img}
             heading ={val.heading}
             description= {val.description}
             price={val.price}
             StarIcon={val.starIcon}
           />
            </>
            );
          })}
          </div>
          <div className='w-full flex justify-center'>
            <GlobalButton
              styling="bg-green" title="View more"
            />
          </div>  
        </div>
    </>
  )
}

export default Courses