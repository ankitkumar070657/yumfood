import React, { useState } from "react";

import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";

const TopNav = () => {
  const [SideNav, setSideNav] = useState(false);
  return (
    <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setSideNav(!SideNav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Yum<span>Eats</span>
        </h1>
        <div className="hidden lg:flex item-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-2 text-bold ">
            Free
          </p>
          <p className="text-bold p-2 gap-5">Delivery</p>
        </div>
        <div className="bg-gray-200 ml-20 px-2 rounded-full flex items-center w-[300px] ">
          <AiOutlineSearch size={20} />
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Search Meals"
          />
        </div>
      </div>
      <button className="bg-orange-700 text-white rounded-full md:flex items-center py-2 px-2">
        <BsFillCartFill size={20} />
        cart
      </button>
      {SideNav ? (
        <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          SideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-200"
            : "fixed top-0 left-[-100%] w-[300px]  h-screen bg-white z-10 duration-200"
        }
      >
        <AiOutlineClose
          onClick={() => setSideNav(!SideNav)}
          size={25}
          className=" absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 ">Yum<span className="text-orange-700 font-bold">Eat</span></h2>
        <nav>
        <ul className="flex flex-col p-4 text-gray-900">
        <li className="text-xl py-4 flex">
        <BsPerson size={25}
        className='mr-4 text-white bg-black rounded-full'/>
        My Account
        </li>

        <li className="text-xl py-4 flex">
        <BsPerson size={25}
        className='mr-4 text-white bg-black rounded-full'/>
        My Favourite
        </li>

        <li className="text-xl py-4 flex">
        <BsPerson size={25}
        className='mr-4 text-white bg-black rounded-full'/>
        My Wallet
        </li>

        <li className="text-xl py-4 flex">
        <BsPerson size={25}
        className='mr-4 text-white bg-black rounded-full'/>
        Delevery
        </li>

        <li className="text-xl py-4 flex">
        <BsPerson size={25}
        className='mr-4 text-white bg-black rounded-full'/>
        Help
        </li>
        </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
