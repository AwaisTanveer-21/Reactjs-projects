import React from 'react'

const Arrowfun = (props)=> {
return(

<>
<h1 className='bg-gray-100 w-fit mx-auto text-black rounded-xl text-center font-bold m-3 p-3'>
hello i am a arrow function
</h1>
<h2 className='bg-gray-600  mx-auto text-black rounded-xl text-center font-bold my-7 p-3'>now here to define props in rrow function</h2>
{/* now for defines props in arrow function  */}
<p className='bg-white p-4 rounded-xl '>name: {props.name}, age:  {props.age} ,gender: {props.gender}</p>
<div className='w-full h-1 my-8 bg-white'></div>


</>



)

}

export default Arrowfun;
