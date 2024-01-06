import { useState } from 'react';
import './css/app.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar/>

      {/* <AboutMe/> */}

      <Portfolio/>

      {/* <Contact/> */}

      <Footer/>
    </>
  )
}

export default App;


// look to activity 22 to learn how to render one section at a time