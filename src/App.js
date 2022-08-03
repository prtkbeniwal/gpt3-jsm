import React from 'react'
import './App.css'
import {Brand , CTA , NavBar } from './components/index'
import {Blog , Features , Footer , Header , Possibility , WhatGPT3} from './containers/index'


function App() {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <NavBar/>
          <Header/>          
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App