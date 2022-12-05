import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/AboutUs'><h2>About Us</h2></Link>
          </div>
          {/* <div class='footer-link-items'>
            
             <Link to='/ContactUs'><h2>ContactUs</h2></Link>
              
          </div> */}
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
             <h2>Social Media</h2>
          <a href='https://www.instagram.com/resfirmaevents/'>Instagram</a>
            <a href='https://www.facebook.com/profile.php?id=100075397520018'>Facebook</a>
            <a href= 'https://twitter.com/RefirmaE'>Twitter</a>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Footer;