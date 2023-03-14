import React from 'react'
const plan = [
    {
        heading :  "Trial",
        Price : "clock" ,
        text: "Free! 30 Days",
        button:"I WANT THIS PLAN"
    },
    {
      heading :  "Monthly",
      Price : "$89/month" ,
      text: "Save $50 every year by comparing plan by year",
      button:"I WANT THIS PLAN"
  },
  {
    heading :  "Yearly",
    Price : "$1000/year" ,
    text: "Save $50 every year by comparing plan by year",
    button:"I WANT THIS PLAN",
    btnStyle: ""
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
                        <div className=' border-2 border-black px-[30px] py-[20px] flex gap-2 flex-col bg-sky-200 w-1/4 rounded-md'>
                            <h2  className='text-[25px] font-bold border-b-2 border-black h-1/5'>{val.heading}</h2>
                            <p className='flex justify-center py-[2px] text-[23px] h-1/5'>{val.Price}</p>
                            <p className='text-[20px] h-2/5'>{val.text}</p>
                            <button className="flex justify-center border bg-sky-400 border-black p-[5px] rounded-md h-1/5 ">{val.button}</button>
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