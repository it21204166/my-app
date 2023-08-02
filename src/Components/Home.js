import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faWhatsapp ,faLinkedinIn,faGithub} from '@fortawesome/free-brands-svg-icons';
import { faCode,faPalette,faLaptopCode,faDatabase } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import './Headerweb.css'
import ProfileImage from '../Components/Image/My photo1.png'


export default function Home() {
  return (
    <div>
      

{/* home section design */}
<section className="home" id="home" >
    <div className="home-content">
       <h3>Hello, I am</h3> 
       <h1>Geeshan Thisera</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum asperiores quasi alias impedit error aliquid voluptatum ducimus adipisci culpa nobis?</p>

       <div className="social-media">
            <a href="#facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#facebook"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="#facebook"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#facebook"><FontAwesomeIcon icon={faGithub} /></a>
       
       </div>
       <a href='#cv' className='btn-CV'>Download CV</a>
    </div>
    <div className='profession-container'>
        <div className='profession-box'>
            <div className='profession' style={{ "--i": 0 }}>
            <div className='i'><FontAwesomeIcon icon={faCode} /></div>
            <h3>Full-Stack Developer</h3>
            </div>


            <div className='profession'style={{ "--i": 1 }}>
            <div className='i'><FontAwesomeIcon icon={faPalette} /></div>
            <h3>Web Designer</h3>
            </div>

            <div className='profession'style={{ "--i": 2 }}>
            <div className='i'><FontAwesomeIcon icon={faLaptopCode} /></div>
            <h3>Frontend Developer</h3>
            </div>

            <div className='profession'style={{ "--i": 3 }}>
            <div className="i"><FontAwesomeIcon icon={faDatabase} /></div>
            <h3>Backend Developer</h3>
            </div>

            <div className='circle'></div>
        </div>
        <div className='overlay'></div>

    </div>
    <div className='home-image'>
            <img src={ProfileImage} alt='profile_photo'></img>
        </div>
</section>
    </div>
  )
}
