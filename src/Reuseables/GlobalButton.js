import React from 'react';

const GlobalButton = ({title, styling}) => {
  return (
    <>
    <button className= {`text-[#ffffff] px-[10px] py-[5px] w-[100px] rounded-md ${styling}`}>
        {title}
    </button>
    </>
  );
};

export default GlobalButton;