import React from 'react'
const plan = [
    {
        heading :  "Trial",
        Price : "clock" ,
        text: "Free! 30 Days",
        button:"I want this plan"
    },
    {
      heading :  "Trial",
      Price : "clock" ,
      text: "Free! 30 Days",
      button:"I want this plan"
  },
  {
    heading :  "Trial",
    Price : "clock" ,
    text: "Free! 30 Days",
    button:"I want this plan"
},
];
const PlansPricing = () => {
  return (
    <>
        <div className='flex flex-col gap-4 py-[10px] px-[50px] mt-3 bg-gray-200'>
          <h2 className='text-[28px] font-bold flex justify-center'>Plan and Pricing</h2>
          <div className='flex flex-row justify-between px-[50px] w-full'>
            {plan.map((val,index)=>{
                return(
                    <>
                        <div className=' border-2 border-black px-[30px] py-[20px] flex gap-2 flex-col w-1/6'>
                            <h2  className='text-[25px] font-bold border-b-2 border-black'>{val.heading}</h2>
                            <p className='flex justify-center py-[2px]'>{val.Price}</p>
                            <p className='text-[20px]'>{val.text}</p>
                            <button className='flex justify-center border border-black p-[3px] rounded-md'>{val.button}</button>
                        </div>
                    </>
                )
            })}
          </div>    
        </div>
    </>
  )
}
export default PlansPricing