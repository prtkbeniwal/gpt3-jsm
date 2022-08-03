import React from 'react'
import './Header.css'
import people from '../assets/people.png'
import ai from '../assets/ai.png'

function Header() {
  return (
    <div className='header section-padding' id='Home' >
      <div className='header-content'>
        <h1 className='gradient-text'> Lets Build Something Amazing With GPT-3 Open AI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='header-input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='header-people'>
          <img src={people} alt='people' />
          <p>1600 people requested access a visit in last 24 hrs</p>
        </div>
      </div>
      <div className='header-AI'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  )
}

export default Header