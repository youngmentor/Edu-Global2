import React from 'react'
import LandingPage from './Component1/LandingPage/LandingPage'
import AdminLogin from './Component1/AllLogin/AdminLogin/AdminLogin'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Login from './Component1/AllLogin/Login'
import "./App.css"
import StudentLogin from './Component1/AllLogin/StudentLogin/StudentLogin'
import TeacherLogin from './Component1/AllLogin/TeacherLogin/TeacherLogin'
import ForgetPasswordAmin from './Component1/ForgetPassword/ForgetPassAdmin'
import ForgetPasswordStudent from './Component1/ForgetPassword/ForgetPassStudent'
import ForgetPasswordTeacher from './Component1/ForgetPassword/ForgetPassTeacher'
import ResetPasswordAmin from './Component1/ForgetPassword/ResetPasswordAdmin'
import ResetPasswordStudent from './Component1/ForgetPassword/ResetPasswordStudent'
import ResetPasswordTeacher from './Component1/ForgetPassword/ResetPasswordTeacher'
import Form from './Component1/SignUp/Form'
const App = () => {
  return (
    <div className='App'>
     <HashRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login/*' element={<Login/>}/>
          <Route path='loginstudent' element={<StudentLogin/>}/>
          <Route path='loginteacher' element={<TeacherLogin/>}/>
          <Route path='loginadmin' element={<AdminLogin/>}/>
          <Route path='signup' element={<Form/>}/>
          <Route path='forgetpassadmin' element={<ForgetPasswordAmin/>}/>
          <Route path='forgetpassstudent' element={<ForgetPasswordStudent/>}/>
          <Route path='forgetpassteacher' element={<ForgetPasswordTeacher/>}/>
          <Route path='resetpassadmin/:id/:token' element={<ResetPasswordAmin/>}/>
          <Route path='resetpassstudent/:id/:token' element={<ResetPasswordStudent/>}/>
          <Route path='resetpassteacher/:id/:token' element={<ResetPasswordTeacher/>}/>
        </Routes>
     </HashRouter>
    </div>
  )
}

export default App