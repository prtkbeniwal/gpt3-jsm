import React, { useState } from 'react'
import './NavBar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../assets/logo.svg'

const Menu = () => (
  <>
    <p><a href='#Home'>Home</a></p>
    <p><a href='#WhatGPT3'>What is GPT</a></p>
    <p><a href='#Features'>Case Studies</a></p>
    <p><a href='#Possibility'>Open AI</a></p>
    <p><a href='#Blog'>Library</a></p>
  </>  
)

function NavBar() {


  const [toggleMenu,setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='links-container'>
          <Menu />
        </div>
      </div>
      <div className='navbar-sign'>
        <p>Sign In</p>
        <button type='nav-button'>Sign Up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='white' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='white' size={27} onClick={() => setToggleMenu(true)} />
        }
        { toggleMenu && (
          <div className='menu-container scale-up-center'>
            <div className='container-links'>
              <Menu />
              <div className='container-links-sign'>
                <p>Sign In</p>
                <button type='nav-button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar