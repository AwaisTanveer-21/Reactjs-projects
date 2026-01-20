import React from "react";
import laptop from "../assets/laptop.jpg";

function Experts() {
  return (
    <div className=" transition-all duration-500 max-w-[1240px] mx-auto my-12 px-4 grid md:grid-cols-2 gap-8">
      {/* Box 1 for Image */}
      <div className=" transition-all duration-500 flex justify-center items-center">
        <img
          src={laptop}
          alt="pic"
          className=" transition-all duration-500 object-contain max-h-92 min-w-full"
        />
      </div>

      {/* Box 2 for Text */}
      <div className=" transition-all duration-500 flex flex-col justify-center ">
        <h2 className=" transition-all duration-500 text-2xl md:text-3xl font-bold text-green-500 tracking-wide mb-4 px-5 py-4 shadow-md capitalize">
          Learn from Experts
        </h2>
        <p className="transition-all duration-500 text-black tracking-wide mb-6 px-5 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam sunt
          praesentium obcaecati. Necessitatibus, consectetur quidem. Alias quod
          animi vitae quam neque expedita necessitatibus possimus officiis
          soluta sapiente amet odio cupiditate tempora, dolorum maxime repellat.
        </p>

        <div className="flex justify-center md:justify-start">
          <button
            className="bg-black px-4 py-2 text-white text-lg md:text-xl rounded-xl 
             transition-all duration-500 border border-transparent hover:border-white hover:opacity-75 mx-10 my-5 capitalize">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Experts;
