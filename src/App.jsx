import React from 'react'
import LandingPage from './Components/LandingPage/LandingPage'
import AdminLogin from './Components/AllLogin/AdminLogin/AdminLogin'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Login from './Components/AllLogin/Login'
import "./App.css"
import StudentLogin from './Components/AllLogin/StudentLogin/StudentLogin'
import TeacherLogin from './Components/AllLogin/TeacherLogin/TeacherLogin'
import ForgetPasswordAmin from './Components/ForgetPassword/ForgetPassAdmin'
import ForgetPasswordStudent from './Components/ForgetPassword/ForgetPassStudent'
import ForgetPasswordTeacher from './Components/ForgetPassword/ForgetPassTeacher'
import ResetPasswordAmin from './Components/ForgetPassword/ResetPasswordAdmin'
import ResetPasswordStudent from './Components/ForgetPassword/ResetPasswordStudent'
import ResetPasswordTeacher from './Components/ForgetPassword/ResetPasswordTeacher'
import Form from './Components/SignUp/Form'
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