import React from 'react'


let  Arrowfun =(props)=>{
let Name="sardar awais"
let Fullname='Awais Tanveer'

function Click(name){
  
  alert("you clicked here and then your nick name is : " +name)
}

function Dblclick(){
 alert( console.warn("you double clicked fr print your full name tht is :" +Fullname))
}

    return(
 <div className='bg-blue-400 text-black grid'>
      <h1>this is used for event handler thorugh arrow function in reactjs components</h1>
      <button className='bg-red-700 text-2xl items-center my-6 rounded-xl px-8 w-fit mx-auto py-4' value="click" onClick={ () => Click(props.name)}>click me</button>
      <button className='bg-red-700 text-2xl items-center my-6 rounded-xl px-8 w-fit mx-auto py-4' value="click" onClick={Dblclick}>click here </button>
    

    </div>



    )
}
export default Arrowfun;