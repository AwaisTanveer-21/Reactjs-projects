import React from 'react'
import {ReactTyped} from 'react-typed'


function Main() {
  return (
    <div className='bg-blue-500 h-screen mx-w-[1240px] text-center mx-auto py-[110px] transition-all'>
      <div className='my-4 '>
      <div className='text-2xl md:text-4xl 
      font-[lobster] transition-all duration-500'>
        learn with us
      </div>
    <div className='font-bold text-white
    text-4xl 
    md:text-7xl
    capitalize font-[jost] mt-4
    transition-all duration-500'>grow with us</div>
    <div className='text-4xl md:text-6xl font-[lobster] text-white fon-bold mt-4
    transition-all duration-500 capitalize '>
      learn 
      <ReactTyped
      className='pl-5 '
  strings={['Web development', 'Programming','Ethical hacking','Digital marketing','Graphic designing','App development']}
  typeSpeed={70}
  backSpeed={60}
  loop={true}
/>

    </div>
    <button className=' bg-black font-bold text-xl md:text-2xl
    capitalize
    text-white px-2 md:px-4 py-2 rounded-md border my-4
    transition-all duration-500 hover:opacity-70'>get started</button>








 </div>
    </div> 
  )
}

export default Main

