// this file is taken a props functionality 

import React from 'react'
import PropTypes from 'prop-types'

// we make a new function for using props methods
function Proptype(props) {
    
  return (
    <div>
      <h1 className='my-10 p-4 bg-yellow-300 w-fit mx-auto rounded-lg hover:bg-gray-50 capitalize'>this function is used for  props types  of reactjs </h1>
   

   {/* syntax of how to show your propos in browser  */}
    <p className='my-10 p-4 bg-blue-300 w-fit mx-auto rounded-lg hover:bg-gray-50 capitalize'>
       name : {props.name} , age : {props.age} , gender : {props.gender}
    </p>
    

    </div>
  )
}

Proptype.propTypes={
  name: PropTypes.string.isRequired,   // name lazmi string
  age: PropTypes.number,               // age number
  gender: PropTypes.string 
};

// for default propstype 


export default Proptype;

