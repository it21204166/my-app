import React, { useEffect } from 'react';
import './Headerweb.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Headerweb() {
  useEffect(() => {
    const handleScroll = () => {
      let header = document.querySelector('.header');
      header.classList.toggle('sticky', window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="header">
        <a href='#a' className='logo'>Portfolio</a>

        <nav className='navbar'>
          <a href='#home' className='active'>Home</a>
          <a href='#about'>About</a>
          <a href='#service'>Services</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#contact'>Contact</a>
        </nav>

        <div className='bx bx-moon' id='darkMood-icon'>
          <FontAwesomeIcon icon={faMoon} />
        </div>
      </header>
    </div>
  );
}
