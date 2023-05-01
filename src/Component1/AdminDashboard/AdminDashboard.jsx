import React from 'react'
import "./AdminDashboard.css"
import AdminDashboardLeft from './AdminDashboardLeft'
import AdminDashboardRight from './AdminDashboardRight'
import { Routes,Route } from 'react-router-dom'
// import AdminHeader from './AdminHeader'
import AdminHeader from './AdminHeader/AdminHeader'
const AdminDashboard = () => {
  return (
    <div className='AdminDashboard_Main'>
      <AdminHeader/>
     <div className='AdminDashboard_Main_Wrap'>
      <div className='AdminDasboard_Main_Left'>
        <AdminDashboardLeft/>
      </div>
      <div className='AdminDashboard_Main_Right'>
        <AdminDashboardRight/>
      </div>
     </div>
    </div>
  )
}

export default AdminDashboard