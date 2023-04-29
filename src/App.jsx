import React from 'react'
import LandingPage from './Component1/LandingPage/LandingPage'
import AdminLogin from './AllLogin/AdminLogin/AdminLogin'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Login from './AllLogin/Login'
import "./App.css"
import StudentLogin from './AllLogin/StudentLogin/StudentLogin'
import TeacherLogin from './AllLogin/TeacherLogin/TeacherLogin'
import ForgetPasswordAmin from './ForgetPassword/ForgetPassAdmin'
import ForgetPasswordStudent from './ForgetPassword/ForgetPassStudent'
import ForgetPasswordTeacher from './ForgetPassword/ForgetPassTeacher'
import ResetPasswordAmin from './ForgetPassword/ResetPasswordAdmin'
import ResetPasswordStudent from './ForgetPassword/ResetPasswordStudent'
import ResetPasswordTeacher from './ForgetPassword/ResetPasswordTeacher'
import AdminDashboard from './Component1/AdminDashboard/AdminDashboard'
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
          <Route path='/admin/*' element={<AdminDashboard/>}/>
        </Routes>
     </HashRouter>
    </div>
  )
}

export default App