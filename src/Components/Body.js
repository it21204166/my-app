import React from 'react'
import Headerweb from './Headerweb'
import Home from '../Components/Home';
import About from './About';
import Service from './Service';

export default function Body() {
  return (
    <div>
      <Headerweb/>
      <Home/>
      <About/>
      <Service/>
      
    </div>
  )
}
