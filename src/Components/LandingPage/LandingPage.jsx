import React from 'react'
import "./LandingPage.css"
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {
  const navigate= useNavigate()
  return (
    <div className='Landing_Main'>
        <h4>This site is currently under development</h4>
        <button onClick={()=> navigate("/signup")}>Click here</button>
        <p>to continue</p>
    </div>
  )
}

export default LandingPage