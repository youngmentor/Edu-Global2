import React from 'react'
import LandingPage from './Components/LandingPage/LandingPage'
import AdminLogin from './Components/AllLogin/AdminLogin/AdminLogin'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Login from './Components/AllLogin/Login'
import "./App.css"
import StudentLogin from './Components/AllLogin/StudentLogin/StudentLogin'
import TeacherLogin from './Components/AllLogin/TeacherLogin/TeacherLogin'
import ForgetPasswordAmin from './Components/ForgetPassword/ForgetPassAdmin/ForgetPassAdmin'
import ForgetPasswordStudent from './Components/ForgetPassword/ForgetPassStudent/ForgetPassStudent'
import ForgetPasswordTeacher from './Components/ForgetPassword/ForgetPassTeacher/ForgetPassTeacher'
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
        </Routes>
     </HashRouter>
    </div>
  )
}

export default App