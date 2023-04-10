import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate= useNavigate()
  return (
    <div className='Header_Main'>
        <div className='Header_Wrap'>
            <div className='Header_Logo_Wrap'>
            <img src='./Edu-Global.png' alt='' className='Header_Logo' />
            </div>
            <div className='Nav'>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
            </div>
            <div className='Header_Button'>
                <button className='Header_Button_SignUp' onClick={() => navigate('/signup')}>Sign Up</button>
                <button className='Header_Button_Login' onClick={()=> navigate('/login/loginadmin')}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Header