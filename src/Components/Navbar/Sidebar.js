import { Drawer } from "@mui/material";
import * as React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const SideBar = ({ toggle, setToggle }) => {
  const MenuItems = [
    // { name: "Home" },
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Features", url:  "/feature" },
    { name: "Blogs", url: "/blog" },
    { name: "Gallery", url: "/gallery" },
    { name: "Shop", url: "/shop" },
    { name: "Contact Us", url:"/Contact-Us" },
  ];
  return (
    <div>
      <Drawer open={toggle}>
        <div className="w-[300px]">
          <div className="flex flex-row p-[10px] justify-end">
            <FaTimes onClick={() => setToggle(false)} />
          </div>
          <ul className="p-[15px] flex flex-col gap-4">
            {MenuItems.map((val, index) => {
              return (
                <>
                  <li key={index} className="cursor-pointer text-[20px]">
                    <Link to={val.url}>{val.name}</Link>
                  </li>
                  
                </>
              );
            })}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;