import React from 'react'
import Headerweb from './Headerweb'
import Home from '../Components/Home';
import About from './About';
import Service from './Service';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

export default function Body() {
  return (
    <div>
      <Headerweb/>
      <Home/>
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}
