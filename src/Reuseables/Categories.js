import React from "react";
import Icons from "./icons";
import Input from "./Input";
import { BsSearch } from "react-icons/bs";
import pic from "../Assests/girl.jpg";
import boypic from "../Assests/boy.webp";
import { BiMessage } from "react-icons/bi";
import GlobalButton from "./GlobalButton";
import Calendar from "react-calendar";
const Post = [
  {
    image: pic,
    text: "Curabitur massa odio",
    date: "September 6, 2013",
    msg: "321",
  },
  {
    image: boypic,
    text: "Incredibly flexible layout",
    date: "September 6, 2013",
    msg: "321",
  },
  {
    image: pic,
    text: "Theme is good",
    date: "September 6, 2013",
    msg: "321",
  },
];
const Categories = () => {
  return (
    <>
      <div className="flex flex-col gap-x-3">
        <div className="flex flex-col gap-2 m-4">
          <h2 className="text-[25px] font-bold">Categories</h2>
          <ul className="list-disc px-[7px] text-[18px]">
            <li>New (12)</li>
            <li>Design (22)</li>
            <li>Most Popular (42)</li>
            <li>Photography (16)</li>
            <li>History (38)</li>
            <li>Video (10)</li>
            <li>Chemistry (5)</li>
            <li>Computer Science (34)</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 m-4">
          <h2 className="text-[25px] font-bold">Recent Posts</h2>
          <div className="flex flex-col gap-2">
            {Post.map((val, index) => {
              return (
                <>
                  <div className="flex flex-row">
                    <img
                      src={val.image}
                      alt="Girl pic"
                      className="w-2/5 border rounded-lg p-[2px]"
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
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2 m-4">
          <h2 className="text-[25px] font-bold">Calender</h2>
          <Calendar className="border-2 border-black p-[5px]" />
        </div>
        <div className="flex flex-col gap-2 m-4">
          <h2 className="text-[25px] font-bold">tags</h2>
          <div className="flex flex-row gap-2">
            <GlobalButton styling="bg-[#1ebb90]" title="Computer" />
            <GlobalButton styling="bg-sky-400" title="Science" />
            <GlobalButton styling="bg-var(Green-color)" title="Biology" />
          </div>
          <div className="flex flex-row gap-2">
            <GlobalButton styling="bg-sky-400" title="Uncategorized" />
            <GlobalButton styling="bg-[#1ebb90]" title="Academy" />
            <GlobalButton styling="bg-sky-400" title="University" />
          </div>
        </div>
        <div className="flex flex-col gap-2 m-4">
          <h2 className="text-[25px] font-bold">Flickr Photo</h2>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <img src={pic} alt="pic" className="w-1/3 rounded-lg px-[3px]" />
              <img
                src={boypic}
                alt="pic"
                className="w-1/3 rounded-lg px-[3px]"
              />
              <img src={pic} alt="pic" className="w-1/3 rounded-lg px-[3px]" />
            </div>
            <div className="flex flex-row">
              <img
                src={boypic}
                alt="pic"
                className="w-1/3 rounded-lg p-[3px]"
              />
              <img src={pic} alt="pic" className="w-1/3 rounded-lg p-[3px]" />
              <img
                src={boypic}
                alt="pic"
                className="w-1/3 rounded-lg p-[3px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 m-4">
          <h2 className="text-[25px] font-bold">Search</h2>
          <Input
            icon={<BsSearch />}
            type="text"
            placeholder="Search here "
            styles="bg-transparent w-[95%]"
          />
        </div>
        <div className="flex flex-col gap-2 m-4">
          <h2 className="text-[25px] font-bold">Follow Us</h2>
          <p className="text-[18px]">
            Curabitur massa odio vulpulate vel fringilla vitae posuere
          </p>
          <div className="flex flex-row space-x-3 text-white">
            <Icons />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;