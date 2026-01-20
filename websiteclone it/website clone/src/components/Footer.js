import React from 'react'

function Footer() {
  return (
    <div className='max-w-full   bg-blue-500 mt-4 md:grid md:grid-col-4 grid-flow-col py-8 text-center '>
      
<div className='py-4 px-6 text-xl text-black col-span-1 mx-4 md:text-justify text-center'>
    <h2 className='capitalize text-center font-bold py-3'>aT developer</h2>
    <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Cupiditate perferendis unde ut suscipit?<br/> Illum odio consequatur cupiditate doloribus. Molestias?</p>
</div>

<div className='py-4 px-6 text-xl text-black col-span-1 mx-4 md:text-justify text-center'>
    <h2 className='capitalize  font-bold py-3'>solutions</h2>
     <ul className='text-white capitalize'>
        <li>analytics</li>
        <li>marketing</li>
        <li>commerce</li>
        <li>insights</li>
       
    </ul>
</div>

<div className='py-4 px-6  mx-4 text-xl text-black col-span-1 md:text-justify text-center'>
    <h2 className='capitalize  font-bold py-3'>support</h2>
    <ul className='text-white capitalize'>
        <li>pricing</li>
        <li>documentation</li>
        <li>guides</li>
        <li>api status</li>
       
    </ul>
</div>

<div className='py-4 px-6 mx-4 text-xl text-black capitalize col-span-1 md:text-justify text-center'>
    
     <h2 className='capitalize  font-bold py-3'>company</h2>
     <ul className='text-white capitalize '>
        <li>about</li>
        <li>block</li>
        <li>jobs</li>
        <li>press</li>
        <li>career</li>
    </ul>
</div>

    </div>
  )
}

export default Footer
