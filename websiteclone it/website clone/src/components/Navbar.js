// import React, { useState } from 'react'

// import { AiOutlineAlignRight,AiOutlineClose } from "react-icons/ai";

// function navbar() {

// const [toogle,Settoogle] = useState(false)

//   return (
//     <div className='flex h-24 max-w-[1240px] mx-auto justify-between items-center bg-blue-500 px-12'>
//         {/* div for logo  */}
//       <div className='text-xl md:text-2xl font-bold text uppercase '>
//         <h3 className='text-nowrap font-[lobster,san-serif] bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-black to-red-800 tracking-widest'>at developer</h3>
//       </div>
// {/* div for making a list items  */}
// <div className=' md:flex absolute left-0 top-0 my-20 w-full bg-black md:bg-transparent items-center text-white py-2 text-center capitalize font-medium text-xl md:static md:left-auto md:w-auto md:py-auto md:my-auto text-nowrap md:px-4'>
//     <ul className='flex-col md:flex md:flex-row justify-center items-center gap-2'>
//         <li className='border hover:border-white duration-500 px-4 border-transparent my-5 w-fit mx-auto rounded-lg hover:scale-110 transition-all'><a href="/">home</a></li>
//         <li className='border hover:border-white duration-500 px-4 border-transparent my-5 w-fit mx-auto rounded-lg hover:scale-110 transition-all'><a href="/">about us</a></li>
//         <li className='border hover:border-white duration-500 px-4 border-transparent my-5 w-fit mx-auto rounded-lg hover:scale-110 transition-all'><a href="/"></a>catalog</li>
//         <li className='border hover:border-white duration-500 px-4 border-transparent my-5 w-fit mx-auto rounded-lg hover:scale-110 transition-all'><a href="/">company</a></li>
//         <li className='border hover:border-white duration-500 px-4 border-transparent my-5 w-fit mx-auto rounded-lg hover:scale-110 transition-all'><a href="/">resources</a></li>
//         <li className='border hover:border-white duration-500 px-4 border-transparent my-5 w-fit mx-auto rounded-lg hover:scale-110 transition-all'><a href="/">contact-us</a></li>
//     </ul>
// </div>
// {/* makingg a div for buttons  */}
// <div className='flex justify-between items-center mx-6'>
//   <button className='border mx-2 px-2 rounded-sm opacity-70 md:hidden text-nowrap '>sign up</button>
//    <button className='border mx-2 px-2 rounded-sm opacity-70 md:hidden text-nowrap '>sign in</button>
// </div>
// {/* for icons  */}

// {
//   toogle ?
//   <div className='flex justify-start items-center md:hidden mx-6'>
// <AiOutlineClose />
// </div>
// }

//     </div>
//   )
// }

// export default navbar

// making a react website clone by wscube texh leacture

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";

function Navbar() {

const [toogle, settoogle] = useState(false)





  return (
    <div className="flex h-24 max-w-full mx-auto justify-between items-center bg-blue-500 px-12 text-white transition-all duration-300">
      {/* div for logo  */}
      <div className="text-xl md:text-2xl font-bold text uppercase ">
        <h3 className="text-nowrap font-[lobster,san-serif] bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-black to-red-800 tracking-widest transition-all duration-300">
          at developer
        </h3>
        </div>
        <div className="mx-10 ">
          <ul className="md:flex justify-between items-center gap-3 capitalize text-lg font-medium ">
            <li><a href="#">home</a></li>
            <li><a href="#">company</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">catalog</a></li>
            <li><a href="#">sign up</a></li>
          </ul>
        </div>
        {/* for making a responsive  */}
            
          <ul className={` capitalize text-lg font-medium md:hidden  absolute w-full bg-black text-white my-12 border backdrop-blur-md opacity-90 h-screen py-10 top-[46px] text-center duration-500 transition-all rounded-lg ${toogle ? 'left-[0px]' :'left-[-100%] '}`} >
            <li className="p-3 my-2 border border-transparent hover:border-white"><a href="">home</a></li>
            <li className="p-3 my-2 border border-transparent hover:border-white"><a href="">company</a></li>
            <li className="p-3 my-2 border border-transparent hover:border-white"><a href="">about</a></li>
            <li className="p-3 my-2 border border-transparent hover:border-white"><a href="">catalog</a></li>
            <li className="p-3 my-2 border border-transparent hover:border-white"><a href="">sign up</a></li>
          </ul> 

        { 
          toogle ?
           <AiOutlineClose onClick={()=>{settoogle(!toogle)}} className="text-3xl text-white block md:hidden "/>
    :
  <AiOutlineAlignRight onClick={()=>{settoogle(!toogle)}} className="text-3xl text-white block md:hidden"/>
        }

    </div>
  );
}

export default Navbar;
