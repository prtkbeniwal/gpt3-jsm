import React from 'react'
import './Footer.css'
import gpt3Logo from '../assets/logo.svg'

function Footer() {
  return (
    <div className='footer section-padding'>
      <div className='footer-heading'>
        <h1 className='gradient-text'>Do you want to step into the future before others</h1>
      </div>
      <div className='footer-btn'>
        <button type='button'>Request Early Access</button>
      </div>
      <div className='footer-content'>
        <div className='links-logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='footer-links'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='footer-links'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='footer-links'>
          <h4>Get In Touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
          <p></p>
        </div>
      </div>
      <div className='copyright'>
        <h5>© 2021 GPT-3. All rights reserved.</h5>
      </div>
    </div>
  )
}

export default Footer