import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Footer from './components/Navbar/Footer/Footer';
function App() {


  return (
    <div className='bg-gray-500 h-screen'>
 <Navbar />
 <Home/>
 <About/>
 <Catalog/>
 <Contact/>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>



    <Footer/>

   </div>
  
  );
}

export default App;
