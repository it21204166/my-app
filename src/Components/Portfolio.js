import React from 'react'
import pro1 from '../Components/Image/download.jpeg'
import './Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {
  return (
    <div>
      <section className='portfolio' id='portfolio'>
        <div>
        <h2 className='heading'>Latest <span>Project</span></h2>
        </div>
        <div className='portfolio-container'>
            <div className='portfolio-box'>
                <img src={pro1} alt='pro1'/>
                <div className='portfolio-layer'>
                    <h4>Web Design</h4>
                    <p>Lorem aksbfahsjsgdjhbcsd sfgdvjhfcv hjgvdajsf hjgvdsfajmsf hjgvdgfjahsdfj hjgvdhjads hjgvdhjadsvf hjgdvfvasdf hvgdhbvsad hvadhfvsafd </p>
                    <div className='i'><a href='#abc'><FontAwesomeIcon icon={faUpRightFromSquare} /></a></div>
                </div>
                </div>

                <div className='portfolio-box'>
                <img src={pro1} alt='pro1'/>
                <div className='portfolio-layer'>
                    <h4>Web Design</h4>
                    <p>Lorem aksbfahsjsgdjhbcsd sfgdvjhfcv hjgvdajsf hjgvdsfajmsf hjgvdgfjahsdfj hjgvdhjads hjgvdhjadsvf hjgdvfvasdf hvgdhbvsad hvadhfvsafd </p>
                    <div className='i'><a href='#abc'><FontAwesomeIcon icon={faUpRightFromSquare} /></a></div>
                </div>
            </div>

            <div className='portfolio-box'>
                <img src={pro1} alt='pro1'/>
                <div className='portfolio-layer'>
                    <h4>Web Design</h4>
                    <p>Lorem aksbfahsjsgdjhbcsd sfgdvjhfcv hjgvdajsf hjgvdsfajmsf hjgvdgfjahsdfj hjgvdhjads hjgvdhjadsvf hjgdvfvasdf hvgdhbvsad hvadhfvsafd </p>
                    <div className='i'><a href='#abc'><FontAwesomeIcon icon={faUpRightFromSquare} /></a></div>
                </div>
            </div>

            <div className='portfolio-box'>
                <img src={pro1} alt='pro1'/>
                <div className='portfolio-layer'>
                    <h4>Web Design</h4>
                    <p>Lorem aksbfahsjsgdjhbcsd sfgdvjhfcv hjgvdajsf hjgvdsfajmsf hjgvdgfjahsdfj hjgvdhjads hjgvdhjadsvf hjgdvfvasdf hvgdhbvsad hvadhfvsafd </p>
                    <div className='i'><a href='#abc'><FontAwesomeIcon icon={faUpRightFromSquare} /></a></div>
                </div>
            </div>
            
        </div>


        
        
      </section>
    </div>
  )
}
