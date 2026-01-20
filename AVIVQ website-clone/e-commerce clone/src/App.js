import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import Mains from './components/Mains';
import Services from './components/Services';

function App() {

  // ✅ 1. State for menu toggle
  const [toggle, setToggle] = useState(false);

  // ✅ 2. Function to change state (menu open/close)
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  // ✅ 3. return must be inside the function
  return (
    <div className=' bg-white text-black '>

      <nav className='relative w-full h-28 bg-gradient-to-l from-sky-400 to-sky-700 flex justify-between items-center fixed shadow-lg '>

        {/* Logo Section */}
        <div className='mx-10'>
          <img
            src="assets/AIVIQ_Logo_R_9bdc7f79-e09b-4147-aa79-b0855ed4ed21.webp"
            alt="logo"
            className='cursor-not-allowed object-cover box-border h-12 w-auto py-1 px-4 text-center my-1 invert'
          />
          <div className='cursor-pointer mb-2 text-center p-2 font-[lobster]'>
            <p className='text-nowrap'>Automation applicance agency</p>
          </div>
        </div>

        {/*Menu Items  */}
        <div className={`text-xl font-bold capitalize 
          ${toggle ? 'flex' : 'hidden'} 
          md:flex md:static md:h-auto md:w-auto md:top-0 md:justify-end md:items-center
          absolute top-0 left-0 h-[75vh] w-full grid items-center justify-center
          backdrop-blur-sm bg-sky-100/70 md:bg-transparent transition-all duration-500 ease-in-out`}>

          <ul className='flex gap-10 px-12 py-3 flex-col md:flex-row md:justify-end md:items-center mt-16 md:mt-0'>
            <li className='border border-transparent hover:border-gray-500 text-center rounded-md hover:opacity-70 duration-500 hover:scale-110 px-2 py-1'>
              <a href="#">Services</a>
            </li>
            <li className='border border-transparent hover:border-gray-500 text-center rounded-md hover:opacity-70 duration-500 hover:scale-110 px-2 py-1'>
              <a href="#">About</a>
            </li>
            <li className='border border-transparent hover:border-gray-500 text-center rounded-md hover:opacity-70 duration-500 hover:scale-110 px-2 py-1'>
              <a href="#">Contact</a>
            </li>
            <li className='border border-transparent hover:border-gray-500 text-center rounded-md hover:opacity-70 duration-500 hover:scale-110 px-2 py-1 md:ml-auto'>
              <a href="#">Catalog</a>
            </li>
          </ul>
        </div>

        {/* Bars & Close icons */}
        <div onClick={toggleMenu} className='absolute md:static flex z-50 right-3 mx-10 text-center px-4 py-2 cursor-pointer text-3xl'>
          {toggle ? <IoCloseSharp className='md:hidden' /> : <FaBars className='md:hidden' />}
        </div>

      </nav>

      {/* Other Components */}
      <Mains />
      <Services />

    </div>
  );
}

export default App;
