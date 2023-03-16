import React from 'react'
import pic from '../../Assests/boy.webp'
import {BsArrowRightShort} from 'react-icons/bs'
const Typography = () => {
  return (
    <>
        <div className='flex flex-col px-[40px]'>
            <div className=' flex flex-col mt-5'>
                <div>
                <h1 className='text-[30px]'>Heading 1</h1>
                <p className='text-[28px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div><br/>
                <div>
                <h2 className='text-[27px]'>Heading 2</h2>
                <p className='text-[25px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div><br/>
                <div>
                <h3 className='text-[23px]'>Heading 3</h3>
                <p className='text-[23px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div><br/>
                <div>
                <h4 className='text-[20px]'>Heading 4</h4>
                <p className='text-[20px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div><br/>
                <div>
                <h5 className='text-[18px]'>Heading 5</h5>
                <p className='text-[18px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div><br/>
                <div>
                <h6 className='text-[15px]'>Heading 6</h6>
                <p className='text-[15px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div><br/>
            </div><br/><br/>
            <div className='border-b-4'></div><br/>

            <div className='flex flex-col mt-5'>
                <h2 className='text-[27px]'>DropCaps</h2>
            </div><br/><br/>
            <div className='border-b-4'></div><br/>

            <div className='flex flex-col mt-5'>
                <h2 className='text-[27px]'>Quote Format</h2><br/>
                <p className='italic text-[20px]'> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div><br/><br/>
            <div className='border-b-4'></div><br/>

            <div className='flex flex-col mt-5'>
                <h2 className='text-[27px]'>Toolip/Highlights</h2>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
            </div><br/><br/>
            <div className='border-b-4'></div><br/>

            <div className='flex flex-col mt-5'>
                <h2 className='text-[27px]'>Image Allignment</h2>
                <div className='flex flex-row m-3 gap-5'>
                    <div className='w-[40%]'><img src={pic} className='border rounded-lg'/></div>
                    <div className='w-[60%]'><p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
                </div>
                <div className='flex flex-row m-3 gap-5'>
                <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>                  
                </div>
                <div className='flex flex-row m-3 gap-5'>
                    <div className='w-[60%]'><p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
                    <div className='w-[40%]'><img src={pic} className='border rounded-lg'/></div>
                </div>
            </div><br/><br/>
            <div className='border-b-4'></div><br/>

            <div className='flex flex-col mt-5'>
                <h2 className='text-[27px] mb-3'>Lists</h2>
                <div className='flex flex-row justify-between ml-5'>
                        <ol className='list-decimal'>
                            <li>Lorem Ipsum</li>
                            <li>Dolor Aset</li>
                            <li>Eiusmood consecture</li>
                            <li>Ut Adminim</li>
                            <li>Quisnostruid</li>
                        </ol>
                        <ol className='list-disc'>
                            <li>Lorem Ipsum</li>
                            <li>Dolor Aset</li>
                            <li>Eiusmood consecture</li>
                            <li>Ut Adminim</li>
                            <li>Quisnostruid</li>
                        </ol>
                        <ol className='list-none'>
                            <li>Lorem Ipsum</li>
                            <li>Dolor Aset</li>
                            <li>Eiusmood consecture</li>
                            <li>Ut Adminim</li>
                            <li>Quisnostruid</li>
                        </ol>
                </div>
            </div><br/><br/>
            <div className='border-b-4'></div><br/>



        </div>
    </>
  )
}

export default Typography