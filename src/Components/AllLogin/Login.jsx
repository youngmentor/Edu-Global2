import React,{useState} from 'react'
import AdminLogin from './AdminLogin/AdminLogin'
import StudentLogin from './StudentLogin/StudentLogin'
import TeacherLogin from './TeacherLogin/TeacherLogin'
// import Loading from '../LoadingSpin/Loading'
import { Route, Routes, } from 'react-router-dom'
import "./Login.css"
const Login = () => {
    const [load, setLoad]= useState(false)
  return (
    <div className='AllLogin'>
               
                <Routes>
                    <Route path="loginadmin" element={<AdminLogin />} />
                    <Route path='loginteacher' element={<TeacherLogin />} />
                    <Route path='loginstudent' element={<StudentLogin />} />
                </Routes>
    </div>
  )
}

export default Login