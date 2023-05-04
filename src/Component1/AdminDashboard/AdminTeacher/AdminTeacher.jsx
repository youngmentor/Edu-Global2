import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllTeacher from './AllTeacher'
import AddTeacher from './AddTeacher'
const AdminTeacher = () => {
    return (
        <div>
            <Routes>
                <Route path='allteacher' element={<AllTeacher />} />
                <Route path='addteacher' element={<AddTeacher />} />
            </Routes>
        </div>
    )
}

export default AdminTeacher