import React from 'react'
import pic from '../../Assests/girl.jpg'
import girlPic from '../../Assests/girl1.png'
import GlobalButton from '../../Reuseables/GlobalButton'
const gallery =[
    {
        img: pic,
        text: "Lorem Ipsum",
        disc: "The Molecular Basis",
        price: "$150/month",
    },
    {
        img: girlPic,
        text: "Lorem Ipsum",
        disc: "The Molecular Basis",
        price: "$150/month",
    },
    {
        img: pic,
        text: "Lorem Ipsum",
        disc: "The Molecular Basis",
        price: "$150/month",
    },
    {
        img: pic,
        text: "Lorem Ipsum",
        disc: "The Molecular Basis",
        price: "$150/month",
    },
    {
        img: pic,
        text: "Lorem Ipsum",
        disc: "The Molecular Basis",
        price: "$150/month",
    },
    {
        img: pic,
        text: "Lorem Ipsum",
        disc: "The Molecular Basis",
        price: "$150/month",
    },
    {
        img: pic,
        text: "Lorem Ipsum",
        disc: "The Molecular Basis",
        price: "$150/month",
    },
]
const Gallery = () => {
  return (
    <>
        <div className='flex justify-between flex-col gap-3'>
            {gallery.map((val, index) =>{
                return(
                        <>
                            <div className='w-full bg-gray-200 gap-5 py-[20px] px-[50px] flex flex-row'>
                                <img 
                                    src={val.img}
                                    alt='girl pic'
                                    className='w-2/5 rounded-lg'
                                />
                                <div className="flex flex-col justify-center w-3/5">
                                    <p className='font-bold text-[27px]'>{val.text}</p>
                                    <p className='text-[20px]'>{val.disc}</p>
                                    <div className='flex flex-row justify-between'>
                                        <p className='text-[20px]'>{val.price}</p>
                                        <div className='gap-4 flex items-end'>
                                            <GlobalButton
                                                title="learn more"
                                                styling="bg-[#1ebb90] hover:text-[#1ebb90] hover:bg-[#ffffff]"
                                            />
                                            <GlobalButton
                                                title="Buy Now"
                                                styling="bg-sky-400"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                );
            })}
        </div>
    </>
  )
}

export default Gallery