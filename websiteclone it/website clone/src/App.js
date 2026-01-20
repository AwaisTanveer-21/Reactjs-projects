import React from 'react'
import Navbar from './components/Navbar';
import  Main from './components/Main';
import Experts from './components/Experts';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Experts/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  );
  }

export default App
