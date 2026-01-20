import React from "react";
// import icons
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineZoomIn } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsBoxes } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FcMindMap } from "react-icons/fc";
import { TfiWorld } from "react-icons/tfi";

function App() {
  return (
    <div className="text-center bg-stone-700/80 h-screen w-full">
      <header className="fixed top-0 left-0 w-full bg-stone-700/80 z-50">
        <nav className="h-16 w-full">
          {/*1. div parent*/}
          <div className="flex justify-between items-center h-full w-full bg-stone-700/80 px-2">
            {/*1.1 icons of next,prev,refresh  */}
            <div className="flex gap-2 md:mx-6 mx-3 text-gray-300 item-center justify-center flex-shrink-0">
              <div className="text-lg rounded-full hover:bg-stone-700 duration-500 px-1 py-2">
                <HiArrowSmallLeft />
              </div>
              <div className="text-lg rounded-full hover:bg-stone-700 duration-500 px-1 py-2">
                <HiArrowSmallRight />
              </div>
              <div className="text-lg rounded-full hover:bg-stone-700 duration-500 px-1 py-2">
                <FaArrowRotateRight />
              </div>
            </div>

            {/*2. div for search anything parent ---------*/}
            <div className="px-1 py-1 group hover:bg-stone-700 duration-500 active:outline-sky-500 active:outline bg-zinc-700 flex justify-between items-center gap-2 flex-1 max-w-[850px] mx-2 rounded-full">
              {/*1.1 google icon child 1*/}
              <div className="px-1 py-1 text-xl">
                <FcGoogle />
              </div>

              {/*1.2 search box url child 2*/}
              <div className="flex-1">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="search google or type any url"
                  className="w-full p-1 group-hover:bg-stone-700 duration-500 bg-zinc-700 text-white placeholder:text-white focus:outline-none"
                />
              </div>

              {/* for zoom icon 1.3 */}
              <div className="flex gap-2 mx-1 px-1 py-1 text-lg justify-center item-center text-white">
                <MdOutlineZoomIn className="md:hidden" />
                <IoStarOutline className="" />
              </div>
            </div>

            {/* 3. div for ad extension and its icons  */}
            <div className="text-white mx-1 flex justify-center items-center gap-2 duration-500 hover:outline rounded-full group px-1 py-2 hover:outline-stone-700 flex-shrink-0">
              {/* 3.1 any extension icon used  */}
              <div className="font-bold bg-blue-700 px-1 rounded-full hover:bg-stone-700 duration-500">
                zm
              </div>

              {/* 3.2 extension symbol  */}
              <div className="text-xl hover:bg-stone-700 rounded-full px-1 py-2 duration-500">
                <IoExtensionPuzzleOutline />
              </div>
            </div>

            {/* 4 div for break of border display */}
            <div className="h-8 w-[1px] bg-slate-500 mx-1 flex-shrink-0"></div>

            {/* 5 div for display id login icon */}
            <div className="mx-1 px-1 flex justify-center items-center flex-shrink-0">
              {/*5.1 icon  */}
              <div className="h-10 w-8 duration-500 hover:bg-stone-700 rounded-full p-2">
                <img
                  src="/assets/s-wmgzPPdV5Z.jpeg"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>

              {/* 5.2 for display setting  */}
              <div className="text-xl ml-2 px-1 hover:bg-stone-700 duration-500 rounded-full py-1">
                <HiOutlineDotsVertical />
              </div>
            </div>
            {/* main 1 parent div closed  */}
          </div>
        </nav>

        {/* div 2 for sub navbar  */}
        {/* main div parent */}
        <div className="bg-stone-700/80 h-10 w-full flex items-center text-gray-300 ">
          {/*child 1  div for 4 boxes  */}
          <div className="mx-3 px-1 py-2 hover:bg-stone-700 rounded-full flex-shrink-0">
            <BsBoxes />
          </div>

          {/* 2 child div for break of border display */}
          <div className="h-8 w-[1px] bg-slate-500 mx-3 flex-shrink-0"></div>

          {/* 3 child now div for gmail and its logo  */}
          <div className="flex items-center justify-center gap-[6px] hover:bg-stone-700 py-1 px-2 duration-500 rounded-full flex-shrink-0">
            {/* gmail logo */}
            <div className="">
              <SiGmail className="text-red-600" />
            </div>
            {/* div for para of gmial */}
            <div>
              <p>Gmail</p>
            </div>
          </div>

          {/* 4 child now div for youtube and its logo  */}
          <div className="flex items-center justify-center gap-[6px] hover:bg-stone-700 py-1 px-2 duration-500 rounded-full flex-shrink-0">
            {/* youtube logo */}
            <div className="">
              <FaYoutube className="text-red-600" />
            </div>
            {/* div for para of gmail */}
            <div>
              <p>YouTube</p>
            </div>
          </div>

          {/* 5 child now div for map and its logo  */}
          <div className="flex items-center justify-center gap-[6px] hover:bg-stone-700 py-1 px-2 duration-500 rounded-full flex-shrink-0">
            {/* youtube logo */}
            <div className="">
              <FcMindMap />
            </div>
            {/* div for para of gmail */}
            <div>
              <p>Maps</p>
            </div>
          </div>

          {/* 6child now div for youtube and its logo  */}
          <div className="flex items-center justify-center gap-[6px] hover:bg-stone-700 py-1 px-2 duration-500 rounded-full flex-shrink-0">
            {/* youtube logo */}
            <div className="">
              <FaYoutube className="text-red-600" />
            </div>
            {/* div for para of gmail */}
            <div>
              <p>Creating your first youtube</p>
            </div>
          </div>

          {/* 7child now div for youtube and its logo  */}
          <div className="flex items-center justify-center gap-[6px] hover:bg-stone-700 py-1 px-2 duration-500 rounded-full flex-shrink-0">
            {/* youtube logo */}
            <div className="">
              <TfiWorld />
            </div>
            {/* div for para of gmail */}
            <div>
              <p>Adobe Acrobat</p>
            </div>
          </div>

          {/* main div closed  */}
        </div>
          <div className="h-12 w-full border flex justify-end gap-12  items-center text-gray-300 capitalize">
<div className="mx-3 duration-500 hover:bg-stone-700 rounded-full p-2">
  gmail
</div>
<div className="mr-14 duration-500 hover:bg-stone-700 rounded-full p-2">
  images
</div>
{/* 5 div for display id login icon */}
            <div className="px-1 flex justify-center items-center flex-shrink-0 mx-12">
              {/*5.1 icon  */}
              <div className="h-10 w-8 duration-500 hover:bg-stone-700 rounded-full p-2">
                <img
                  src="/assets/s-wmgzPPdV5Z.jpeg"
                  className="h-full w-full object-cover rounded-full"
                />
              </div> </div>


          </div>
      </header>

<main>
  <section className="h-screen flex-col gap-12 w-full flex items-center justify-center  text-white capitalize">
   <div className="text-8xl">google</div> 

              {/*1.2 search box url child 2*/}
              <div className="flex-1 flex flex-row">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="search google or type any url"
                  className="w-full p-1 duration-500 bg-zinc-700 text-white placeholder:text-white focus:outline-none"
                />
              
</div>
              {/* for zoom icon 1.3 */}
              <div className="flex gap-2 mx-1 px-1 text-lg justify-center item-center text-white">
                <MdOutlineZoomIn className="md:hidden" />
                <IoStarOutline className="" />
              </div>
            
  </section>
</main>
   
    </div>
  );
}

export default App;
