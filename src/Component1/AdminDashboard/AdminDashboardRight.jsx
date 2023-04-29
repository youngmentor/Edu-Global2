import React from 'react'
import Dashboard from './Dashboard'
import Classes from './Classes'
import { Route, Routes } from 'react-router-dom'
const AdminDashboardRight = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/classes' element={<Classes/>}/>
        </Routes>
    </div>
  )
}

export default AdminDashboardRight