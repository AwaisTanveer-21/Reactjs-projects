import React from 'react'
import './App.css';
// import any type of name and write from then loction of file 
import {Header} from './components/header';
import Footer from './components/footer';
import Slidebar from './components/slidebar';
import Prop from './components/property';
// for props-type first import pros-type 
import Proptype from './components/propt';
import Arrowfun from './components/arrowfunc';
import Destructor from './components/destructor';
import Eventhandler from './components/eventhandler';
import Evtarrfun from './components/evtarrfun';






function App() {
  // initilize props here this is a second way 
let a="awais tanveer"
let b= 25

let c="learn reactjs"
let d="2months"
const f=10000



return(
  <div className="">
{/* this is main heading in APP.JS file  */}
<h1 className='p-4 bg-gray-100 w-fit mx-auto rounded-lg hover:bg-gray-50 capitalize font-bold text-xl my-4'>hello my name is awais tanveer.this is my App.js file </h1>
{/* ----------------------------------------------------------------------------------------- 
 now for display components in browser we write function names here  
 must write that name  used when import your fie  */}
<div className='bg-black w-fit mx-auto p-6 rounded-xl font-bold text-center capitalize border-4 hover:border-red-900 duration-500 hover:ring-8 ring-yellow-600 outline shadow-md hover:shadow-2xl'>
<Header/>
<Footer/>
<Slidebar/>

{/* this is a function that defines props of rectjs  .it goes an property.js file*/}
<Prop name="awais" age={21} gender="male">
{/* for mking a children of props :here is its syntax that how to makee a child of props  */}
<p>this is children 1 data</p>
</Prop>
{/* for multiple props we write like taht above  */}
<Prop name="ayesha" age={22} gender="female">
  {/* for mking a children of props :here is its syntax that how to makee a child of props  */}
<p>this is children 2 data</p>
</Prop>
{/* second way for props that initialized first above  */}
<Prop name={a} age={b} gender="N/A">
{/* for mking a children of props :here is its syntax that how to makee a child of props  */}
<p>this is children 3 data</p>
</Prop>
{/* define propstypes here  */}
<Proptype gender="male"/>

{/* how to make an arrow function in reactjs  */}
<Arrowfun name="arrowfunction" age={40} gender="N/A"/>

{/* now for destructing of props methods  */}
<Destructor  course={c} duration={d} fee={f}/>

{/* now for used of event handler in reactjs  */}
<Eventhandler/>

{/* event handler by arrow function n also used parameterr  */}
<Evtarrfun name="ali" age={34}/>


</div>













  </div>
)  
}

export default App;
