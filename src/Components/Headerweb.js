import React, { useEffect, useState } from 'react';
import './Headerweb.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Headerweb() {
  const [activeLink, setActiveLink] = useState('home'); // Set default active link

  const handleNavLinkClick = (id) => {
    setActiveLink(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      let header = document.querySelector('.header');
      header.classList.toggle('sticky', window.scrollY > 100);

      // Update active navigation link based on scroll position
      let fromTop = window.scrollY;
      let navLinks = document.querySelectorAll('header nav a');

      navLinks.forEach((link) => {
        let section = document.querySelector(link.hash);
        if (
          section.offsetTop - 150 <= fromTop &&
          section.offsetTop + section.offsetHeight - 150 > fromTop
        ) {
          setActiveLink(link.hash.slice(1)); // Remove '#' from the hash
        }
      });
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
          <a href='#home' className={activeLink === 'home' ? 'active' : ''} onClick={() => handleNavLinkClick('home')}>
            Home
          </a>
          <a href='#about' className={activeLink === 'about' ? 'active' : ''} onClick={() => handleNavLinkClick('about')}>
            About
          </a>
          <a href='#service' className={activeLink === 'service' ? 'active' : ''} onClick={() => handleNavLinkClick('service')}>
            Services
          </a>
          <a href='#portfolio' className={activeLink === 'portfolio' ? 'active' : ''} onClick={() => handleNavLinkClick('portfolio')}>
            Portfolio
          </a>
          <a href='#contact' className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleNavLinkClick('contact')}>
            Contact
          </a>
        </nav>

        <div className='bx bx-moon' id='darkMood-icon'>
          <FontAwesomeIcon icon={faMoon} />
        </div>
      </header>
    </div>
  );
}
