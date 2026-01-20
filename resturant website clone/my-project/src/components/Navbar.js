import React, { useState } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
     
import { Link } from "react-router-dom";



const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="">
      <nav className="relative h-20 md:h-16 w-full flex justify-between items-center fixed bg-white shadow-md">
        {/* Logo Section */}
        <div className="px-6 h-16 md:h-14 shadow-inner rounded-xl max-w-fit flex items-center box-border justify-center py-1 gap-1 cursor-pointer hover:opacity-80 transition-all duration-500">
          <img
            src="/assets/logo.jpg"
            alt="logo"
            className="rounded-lg ml-4 object-cover w-10 h-10 hover:scale-125 duration-500 transition-all"
          />
          <p className="capitalize text-xl md:text-2xl font-bold text-nowrap text-orange-600 hover:scale-105 duration-500 transition-all hover:shadow-xl px-1 rounded-lg">
            foodie order
          </p>
        </div>

        {/* Menu Items */}
        <div
          className={`absolute md:static top-20 left-0 w-full md:w-auto md:flex items-center justify-center transition-all duration-500 bg-white md:bg-transparent shadow-md md:shadow-none ${
            toggle ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          } md:opacity-100 md:translate-x-0`}
        >
          <ul className="flex flex-col md:flex-row items-center justify-around gap-4 md:gap-12 text-gray-700 text-lg font-semibold py-6 md:py-0 capitalize">
            <li className="cursor-pointer hover:text-orange-700 duration-500 font-[lobster]">
           <Link to="/">home</Link>   
            </li>
            <li className="cursor-pointer hover:text-orange-700 duration-500 font-[lobster]">
          <Link to="/restaurant">restaurant</Link>       
            </li>
            <li className="cursor-pointer hover:text-orange-700 duration-500 font-[lobster] flex items-center gap-2">
              <FaShoppingCart /> cart
            </li>
            <li className="mr-10 cursor-pointer rounded-xl text-white capitalize tracking-widest font-[lobster] bg-orange-400 duration-500 transition-all py-1 px-3 hover:opacity-75">
              <Link to="/login">login</Link>   
            </li>
          </ul>
        </div>

        {/* Toggle Icon */}
        <div className="w-16 md:hidden flex justify-center items-center mx-6 text-gray-800 text-2xl relative z-50">
          {toggle ? (
            <MdOutlineClose onClick={() => setToggle(false)} />
          ) : (
            <FaBars onClick={() => setToggle(true)} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
