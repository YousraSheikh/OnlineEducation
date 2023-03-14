import React from 'react'
import Calendar from 'react-calendar'
import Btn from './PopularButton'
import {AiFillStar} from 'react-icons/ai'

import pic from '../Assests/girl.jpg'
import boypic from '../Assests/boy.webp'
import { BiMessage } from "react-icons/bi"; 
const PopularRating= [
    {
        title:"Innovating in Health Care", 
        name:"UC Barkely", 
        nameStyle:"text-green font-bold text-[18px]",
        rating:4,
        iconStyle:"text-green"
    }, 
    {
        title:"Hypersonics-From ShockWaves to Scramjets", 
        name:"UQ", 
        nameStyle:"text-green font-bold text-[18px]",
        rating:5
    }, 
    {
        title:"Justice", 
        name:"Harvard", 
        nameStyle:"text-blue-400 font-bold text-[18px]",
        rating:3
    }, 
    {
        title:"Justice", 
        name:"Harvard", 
        nameStyle:"text-blue-400 font-bold text-[18px]",
        rating:4
    }, 
];
function Stars({icons}){
    const stars=[];
    for(let i=0; i < icons; i++){
        stars.push(<AiFillStar key={i}/>);
    }
    return <>{stars}</>;
    }
const PopularPost =  [
    {
        img: pic,
        text:  "Incredibly flexible layout",
        date: "31 September 2019",
        msg: "321"
    },
    {
        img: boypic,
        text: "Incredibly flexible layout",
        date: "September 6, 2013",
        msg: "321",
    },
    {
        img: pic,
        text: "Theme is good",
        date: "September 6, 2013",
        msg: "321",
    },
];
const CalenderSection = () => {
  return (
    <>
        <div className='flex flex-col md:flex-row lg:gap-2 md:gap-1 py-[10px] px-[50px] w-full'>
            <div  className='md:w-1/3'>
                <h2 className='text-[20px] font-bold'>Calender</h2>
                <Calendar className="border-2 border-black w-[80%]"/>
            </div>
            <div className='md:w-1/3 flex flex-col gap-2 '>
                <h2 className='text-[20px]  font-bold'>Popular</h2>
                <div className='flex flex-col '>
                    <div className='flex flex-row gap-x-2'>
                        <Btn 
                            title="Courses"
                        />
                        <Btn 
                            title="Post"
                        />
                        <Btn 
                            title="Views"
                        />
                    </div>
                    <div></div>
                </div>
                <div className='flex flex-col gap-3'>
                    {PopularRating.map((val, index)=>{
                        return(
                            <>
                                <div className='flex flex-col gap-1'>
                                    <h2 className='text-[20px] font-bold'>{val.title}</h2>
                                    <div className='flex flex-row gap-x-2'>
                                        <div className={val.nameStyle}>{val.name}</div>
                                        <div className='flex items-center text-[#ffd700] text-[18px]'>
                                            
                                            <Stars
                                            icons={val.rating}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className='md:w-1/3'>
            <h2 className='text-[20px] font-bold'>Recent Post</h2>
                <div className='flex flex-col gap-2'>
                    {PopularPost.map((val, index) =>{
                        return(
                            <>
                            <div className='flex flex-row'>
                                <img 
                                    src={val.img} 
                                    alt='girl pic'
                                    className='w-2/5 border rounded-lg   p-[2px]'
                                />
                                <div className="flex flex-col w-3/5 ml-2">
                                    <p className="font-semibold text-[17px]">{val.text}</p>
                                    <p>{val.date}</p>
                                    <div className="flex flex-row">
                                        <BiMessage className="text-[25px] py-[3px]" />
                                        <p>{val.msg}</p>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )}
export default CalenderSection