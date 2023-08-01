import React from 'react'
import ProfileImage2 from '../Components/Image/My photo2.png'
import './About.css';

export default function About() {
    
  return (
    <div>
      <section className='about' id='about'>
        <div className='about-img'>
            <img src={ProfileImage2} alt=''></img>
        </div>
        <div className='about-content'>
            <h2 className='heading'>About <span> Me</span></h2>
            <h3>Hi, I'm Here To Help Your Next Project!</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatibus ut possimus natus iste facere quae praesentium, totam perferendis beatae quia dicta aliquid harum officia deserunt incidunt minus quis blanditiis similique laboriosam? At alias explicabo sapiente architecto voluptates voluptatum ipsam?</p>
            <a href='#abc' className='btn'>Read More</a>
        </div>
      </section>
    </div>
  )
}
