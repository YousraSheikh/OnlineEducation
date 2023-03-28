import React from 'react'
const colors = ["bg-blue-200", "bg-sky-100", "bg-green-200"];
const Card = ({ color, title, description, text, btn }) => (
  <div className={`flex flex-col gap-2 p-4 rounded-md shadow-md ${color}`}>
    <h3 className="text-lg font-bold  text-center  border-b-2 p-3">{title}</h3>
    <p className="my-2">{description}</p>
    <p className="text-sm text-gray-600">{text}</p>
    <button className='border bg-sky-300 rounded-md p-3 w-1/2'>{btn}</button>
  </div>
);
const PlansPricing = () => {
  return (
    <>
    <div className="bg-gray-100 w-full">
    <h2 className='text-[30px] text-center p-5'>Plans and Pricing</h2>
    <div className="mx-20  ">
      <div className="flex flex-col lg:flex-row gap-10 md:mb-5">
        {colors.map((color, index) => (
          <Card
            key={index}
            color={color}
            title={`Card ${index + 1}`}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            text="Some additional text."
            btn ="I want this plan"
          />
        ))}
      </div>
    </div>
  </div>
    </>
  )
}
export default PlansPricing