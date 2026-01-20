import React from 'react'

function Eventhandler() {

let Name="sardar awais"
let Fullname='Awais Tanveer'

function Click(prop){
  
  alert("you clicked here and then your nick name is : " + Name)
}

function Dblclick(){
 alert( console.warn("you double clicked fr print your full name tht is :" +Fullname))
}

  return (
    <div className='bg-gray-400 text-black grid'>
      <h1>this is used for event handler in reactjs components</h1>
      <button className='bg-red-700 text-2xl items-center my-6 rounded-xl px-8 w-fit mx-auto py-4' value="click" onClick={Click}>click me</button>
      <button className='bg-red-700 text-2xl items-center my-6 rounded-xl px-8 w-fit mx-auto py-4' value="click" onClick={Dblclick}>double click here </button>
    

    </div>
  )
}

export default Eventhandler
