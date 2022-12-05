import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function HeroSection() {
  let history= useHistory();
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted /> 
       <p>What you need, is an Event, to remember for a lifetime</p> 
      <div className='hero-btns'>
         <Link
          className='ld'
          to='/LiveDemo'
        >
          LIVE DEMO
         
        </Link> 
        
      </div>
    </div>
  );
}

export default HeroSection;