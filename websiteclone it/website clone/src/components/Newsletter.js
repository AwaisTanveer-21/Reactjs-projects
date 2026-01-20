import React from 'react'

function Newsletter() {
  return (
    <div className="bg-blue-500 text-white max-w-full flex flex-col md:flex-row gap-10 md:gap-6 justify-evenly items-center py-10 px-6">
      
      {/* Box 1 - Text Section */}
      <div className="text-center w-full md:w-1/2 flex flex-col justify-center items-center gap-3">
        <h1 className="font-bold text-2xl md:text-4xl tracking-wider capitalize">
          Want to learn latest <span>I.T</span> skills?
        </h1>
        <p className="text-sm md:text-base">
          Sign up to our newsletter and stay up to date
        </p>
      </div>

      {/* Box 2 - Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-3">
        <form className="flex flex-col md:flex-row items-center">
          <input 
            type="text"  
            placeholder="Enter your email"
            className="min-w-[280px] border border-gray-300 text-black rounded-md md:rounded-r-none px-3 py-2 outline-none"
          />
          <button 
            className="bg-black text-white text-lg font-[jost] rounded-md md:rounded-l-none px-6 py-2 mt-2 md:mt-0"
          >
            Subscribe
          </button>
        </form>
        <p className="text-center text-sm md:text-base">
          We care about the protection of your data. Read our{" "}
          <span className="text-black underline cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </div>
  )
}

export default Newsletter
