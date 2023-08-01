import React from 'react'
import './Headerweb.css'



export default function Headerweb() {
  return (
    <div>
      <header className="header">
        <a href='#a' className='logo'>Portfolio</a>

        <nav className='navbar'>
            <a href='#home' className='active'>Home</a>
            <a href='#about'>About</a>
            <a href='#services'>Services</a>
            <a href='#portfolio'>Portfolio</a>
            <a href='#contact'>Contact</a>
        </nav>

        <div className='bx bx-moon' id='darkMood-icon'><i class="bi bi-moon"></i></div>
      </header>
    </div>
  )
}
