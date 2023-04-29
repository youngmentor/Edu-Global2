import React from 'react'
import "./AdminDashboard.css"
import AdminDashboardLeft from './AdminDashboardLeft'
import AdminDashboardRight from './AdminDashboardRight'
import { Routes,Route } from 'react-router-dom'
const AdminDashboard = () => {
  return (
    <div className='AdminDashboard_Main'>
      <div className='AdminDasboard_Main_Left'>
        <AdminDashboardLeft/>
      </div>
      <div className='AdminDashboard_Main_Right'>
        {/* <Routes>
          <Route path="/admindashboardright" element={<AdminDashboardRight/>}/>
        </Routes> */}
        <AdminDashboardRight/>
      </div>
    </div>
  )
}

export default AdminDashboard