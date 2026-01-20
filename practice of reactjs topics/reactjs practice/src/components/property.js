// this file is taken a props functionality 

import React from 'react'

// we make a new function for using props methods
function Property(props) {
    
  return (
    <div>
      <h1 className='my-10 p-4 bg-yellow-300 w-fit mx-auto rounded-lg hover:bg-gray-50 capitalize'>this function is used for making a props of reactjs </h1>
   

   {/* syntax of how to show your propos in browser  */}
    <p className='my-10 p-4 bg-blue-300 w-fit mx-auto rounded-lg hover:bg-gray-50 capitalize'>
       name : {props.name} , age : {props.age} , gender : {props.gender}
    </p>
    
{/* for display children  props  */}
   <p className='my-10 p-4 bg-green-800 w-fit mx-auto rounded-lg hover:bg-gray-50 capitalize text-black border-4'>{props.children}</p>

    
    </div>
  )
}

export default Property;
