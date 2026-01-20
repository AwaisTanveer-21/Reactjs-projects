

import React from 'react'

function Destructor({course,duration,fee},props) {
    // second method of destructing 
// let {course,duration,fee}=props 
  return (
    <div className='bg-white text-black my-4 py-4'>
<h1 className='bg-cyan-800 w-fit mx-auto my2 p-4'>this div is used for destructing of props</h1>
<p className='underline'>course : {course}</p>
<p className='underline'>duration : {duration}</p>
<p className='underline'>fee charges : {fee}</p>
      
    </div>
  )
}

export default Destructor
