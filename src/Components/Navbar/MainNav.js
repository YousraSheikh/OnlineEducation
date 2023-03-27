import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import SideBar from "./Sidebar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const MenuItems = [
    { name: "Home", url: "/" },
    { name: "Features", url: "/courses" },
    { name: "Courses", url: "/event" },
    { name: "Blogs", url: "/blog" },
    { name: "Gallery", url: "/gallery" },
    { name: "Shop", url: "/shop" },
    { name: "Contact", url: "/contact"  },
  ];
  return (
    <>
      <SideBar toggle={toggle} setToggle={setToggle} />
      <div className="w-full h-[80px] shadow-lg flex flex-row justify-between items-center md:py-[5px]">
        <div className="w-full md:w-[30%]">
          <a href="/">
            <h2 className='text-[30px] font-bold italic text-white cursor-pointer pl-[50px]'>online Education.</h2>
          </a>
        </div>
        <div className="w-[60%] md:block hidden border-r-[1px] pr-[10px]">
          <ul className="flex flex-row justify-between uppercase font-semibold">
            {MenuItems.map((val, index) => {
              return (
                <>
                  <li className="cursor-pointer" key={index}>{val.name}</li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="md:w-[10%] md:px-[50px] md:block hidden">
          <BsSearch className="text-[20px]"/>
        </div>
        <div
          className="md:hidden block pr-[15px]"
          onClick={() => setToggle(true)}
        >
          <FaBars className="text-[20px]" />
        </div>
      </div>
    </>
  );
};

export default Navbar;