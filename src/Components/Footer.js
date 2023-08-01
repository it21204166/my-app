import React from 'react'
import '../Components/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div>
        <div className='footer'>
        <div className='footer-text'>
        <p>Copyright &copy; 2023 by Baro | All Right Reserved</p>
        </div>
        <div className='footer-iconTop'>
        <a href='#home'><div className='i'><FontAwesomeIcon icon={faArrowUp} /></div></a>
      </div>
      </div>

      
    </div>
  )
}
