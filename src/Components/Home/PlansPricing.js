import React from 'react'
const plan = [
    {
        heading :  "Trial",
        Price : "clock" ,
        text: "Free! 30 Days",
        button:"I want this plan"
    }
];
const PlansPricing = () => {
  return (
    <>
        <div className='flex flex-col py-[10px] px-[25px] mt-3 bg-gray-200'>
          <h2 className='text-[28px] font-bold flex justify-center'>Plan and Pricing</h2>
          <div className=''>
            {plan.map((val,index)=>{
                return(
                    <>
                        <div>
                            <h2>{val.heading}</h2>
                            <p>{val.Price}</p>
                            <p>{val.text}</p>
                            <button>{val.button}</button>
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