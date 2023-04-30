import React from 'react'
import Dashboard from './DashboardMain/Dashboard'
import Classes from './Clas/Classes'
import Attendance from './Attendance'
import { Route, Routes } from 'react-router-dom'
const AdminDashboardRight = () => {
  return (
    <div className='AdminDashboardRight_Main'>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/classes/*' element={<Classes/>}/>
            <Route path='/attendance' element={<Attendance/>}/>
        </Routes>
    </div>
  )
}

export default AdminDashboardRight