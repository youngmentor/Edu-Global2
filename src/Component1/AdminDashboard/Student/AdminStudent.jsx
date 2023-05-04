import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AllStudent from './AllStudent'
import AddStudent from './AddStudent'
const AdminStudent = () => {
  return (
    <div>
        <Routes>
            <Route path='allstudent' element={<AllStudent/>}/>
            <Route path='addstudent' element={<AddStudent/>}/>
        </Routes>
    </div>
  )
}

export default AdminStudent