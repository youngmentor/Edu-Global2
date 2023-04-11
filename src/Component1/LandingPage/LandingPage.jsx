import React from 'react'
import "./LandingPage.css"
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
const LandingPage = () => {
  const navigate= useNavigate()
  return (
    <div className='Landing_Main'>
      <Header/>
        <h4>This site is currently under development</h4>
        <button onClick={()=> navigate("/signup")}>Click here</button>
        <p>to continue</p>
    </div>
  )
}

export default LandingPage