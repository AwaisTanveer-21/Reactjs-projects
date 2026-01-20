import React from 'react'
import Double from '../assets/double.png'
import Single from '../assets/single.png'
import Triple from '../assets/triple.png'

function Cards() {
  return (
    <div className='max-w-full mx-auto grid md:grid-cols-3 place-items-center gap-6 py-10'>
{/* 1st  */}
        <div className='hover:scale-110 transition-all duration-500 rounded-lg mx-4 shadow-xl border my-4 h-[500px] px-10 py-4 text-center '>
        <div className=' px-4 flex justify-center items-center'><img src={Single} alt="" className='h-24 w-24 '/>  </div>
        <div className='font-bold text-2xl capitalize my-4 md:text-nowrap'><h1>web development</h1></div>
        <div className='my-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iure voluptate commodi.
         <div className='shadow-md px-4 py-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<div/></div>
        </div>
        <button className='my-4 bg-green-400
        px-4 py-2 rounded-lg capitalize font-semibold
        tracking-wider hover:opacity-85 transition-all hover:scale-105 duration-500 '>start trails</button>

        </div>
        {/* 2nd div  */}
            <div className='bg-slate-200 hover:scale-110 transition-all duration-500 rounded-lg mx-4 shadow-xl border my-4 h-[500px] px-10 py-4 text-center'>
        <div className=' px-4 flex justify-center items-center'><img src={Double} alt="" className='h-24 w-24 '/>  </div>
        <div className='font-bold text-2xl capitalize my-4 md:text-nowrap'><h1>app development</h1></div>
        <div className='my-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iure voluptate commodi.
            <div className='shadow-md px-4 py-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<div/> </div>
        </div>
        <button className='my-4 bg-black text-white
        px-4 py-2 rounded-lg capitalize font-semibold
        tracking-wider hover:opacity-85 transition-all duration-500 hover:scale-105'>start trails</button>

        </div>
        {/* 3rd div  */}
            <div className='hover:scale-110 transition-all duration-500 rounded-lg shadow-xl border my-4 h-[500px] px-10 py-4 text-center mx-6'>
        <div className=' px-4 flex justify-center items-center'><img src={Triple} alt="" className='h-24 w-24 '/>  </div>
        <div className='font-bold text-2xl capitalize my-4 md:text-nowrap'><h1>digital marketing</h1></div>
        <div className='my-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iure voluptate commodi.
         <div className='shadow-md px-4 py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<div/></div>
        </div>
        <button className='my-4 bg-green-400
        px-4 py-2 rounded-lg capitalize font-semibold
        tracking-wider hover:opacity-85 transition-all hover:scale-105 duration-500 '>start trails</button>

        </div>

        
    </div>
  )
}

export default Cards
