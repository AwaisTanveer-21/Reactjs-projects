import React from 'react'
import Navbar from './Navbar'
import Foooter from './Foooter'

const Login = () => {
  return (
    <><Navbar/>
    <div className='h-screen w-full bg-gray-200 flex justify-center items-center flex-col gap-5'>
     
      {/* main div  */}
      <div className='min-w-72 w-[450px] shadow-xl drop-shadow-lg rounded-3xl'>

<div className='capitalize text-center text-2xl font-bold py-2'>login</div>

{/* 1st div  */}
    <div  className='flex flex-col gap-1 px-12 py-1 '>
        <label htmlFor="name" className='font-semibold font-[lobster] text-xl'>Name :</label>
        <input type="text" name="name" id="name" placeholder="enter your name" className='rounded-md placeholder:px-2 placeholder:text-slate-400 capitalize py-1 min-w-[200px] outline-none hover:bg-slate-200   duration-500 transition-all focus:border-black px-3 border-2'/>
    </div>
    {/* 2 div  */}

<div  className='flex flex-col gap-2 px-12 py-2 '>
        <label htmlFor="password" className='font-semibold font-[lobster] text-xl'>Password :</label>
        <input type="password" name="password" id="password" placeholder="********"  className='rounded-md placeholder:px-2 placeholder:text-slate-400 capitalize py-1 min-w-[200px] outline-none hover:bg-slate-200   duration-500 transition-all focus:border-black px-3 border-2'/>
    </div>

  {/* 3 div  */}

<div  className='flex flex-col gap-2 px-12 py-2 '>
        <label htmlFor="gmail" className='font-semibold font-[lobster] text-xl'>Gmail :</label>
        <input type="text" name="gmail" id="gmail" placeholder="you@example.com"  className='rounded-md placeholder:px-2 placeholder:text-slate-400 capitalize py-1 min-w-[200px] outline-none hover:bg-slate-200 duration-500 transition-all focus:border-black px-3 border-2'/>
    </div>



<div className='min-w-52 w-96 rounded-xl mx-auto hover:bg-orange-400 duration-500 transition-all bg-orange-500 text-white my-4 px-4 text-center font-bold text-2xl py-2'>
    <button className='capitalize'>login</button>
</div>

<div className='px-2 py-1 text-center my-6'>
    <p className='capitalize'>don't have an account? <span className='text-orange-600'>sign up</span></p>
</div>

      </div>
    </div>

    <Foooter/>
    </>
  )
}

export default Login
