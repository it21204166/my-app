import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode,faPalette,faLaptopCode,faDatabase  } from '@fortawesome/free-solid-svg-icons';
import '../Components/Service.css'

export default function Service() {
  return (
    <div>
      <section className='service' id='service'>
        <h2 className='heading'>My <span>Services</span></h2>

        <div className='services-container'>
            <div className='services-box'>
            <div className='i'><FontAwesomeIcon icon={faCode} /></div>
            <h3>Full-Stack Development</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quae doloribus atque quaerat, est molestiae quidem excepturi quis dolorum. Iure sapiente libero aliquid, ipsam, accusantium commodi vitae quasi, sunt sed tenetur facilis nam? Suscipit sapiente impedit autem qui laudantium? Tempore.</p>
            <a href='#abc' className='btn'>Read More</a>
            </div>

            <div className='services-box'>
            <div className='i'><FontAwesomeIcon icon={faPalette} /></div>
            <h3>Web Designer</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quae doloribus atque quaerat, est molestiae quidem excepturi quis dolorum. Iure sapiente libero aliquid, ipsam, accusantium commodi vitae quasi, sunt sed tenetur facilis nam? Suscipit sapiente impedit autem qui laudantium? Tempore.</p>
            <a href='#abc' className='btn'>Read More</a>
            </div>

            <div className='services-box'>
            <div className='i'><FontAwesomeIcon icon={faLaptopCode} /></div>
            <h3>Frontend Developer</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quae doloribus atque quaerat, est molestiae quidem excepturi quis dolorum. Iure sapiente libero aliquid, ipsam, accusantium commodi vitae quasi, sunt sed tenetur facilis nam? Suscipit sapiente impedit autem qui laudantium? Tempore.</p>
            <a href='#abc' className='btn'>Read More</a>
            </div>

            <div className='services-box'>
            <div className="i"><FontAwesomeIcon icon={faDatabase} /></div>
            <h3>Backend Developer</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quae doloribus atque quaerat, est molestiae quidem excepturi quis dolorum. Iure sapiente libero aliquid, ipsam, accusantium commodi vitae quasi, sunt sed tenetur facilis nam? Suscipit sapiente impedit autem qui laudantium? Tempore.</p>
            <a href='#abc' className='btn'>Read More</a>
            </div>
        </div>
      </section>
    </div>
  )
}
