import React from 'react'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Resturant from './components/Resturant'
import Foooter from './components/Foooter'
import {Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="login" element={<Login/>}/>
<Route path="/resturant" element={<Resturant/>}/>
{/* <Route path="/footer" element={<Footer />}/> */}

<Route path="/Cart" element={<Cart/>}/>
        <Route path="home" element={<Home/>}/>
        
        
        
        
        
        </Routes>
       
     {/* <Login/> */}
     <Navbar/>
     <Home/>
     <Cart/>
     <Resturant/>
    <Foooter />
    </div>
  )
}

export default App
