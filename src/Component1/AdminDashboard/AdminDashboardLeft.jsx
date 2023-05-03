import React, { useState } from 'react'
import Dashboard from './DashboardMain/Dashboard'
import { useNavigate } from 'react-router-dom'
import { AiFillHome, AiOutlineProfile } from "react-icons/ai";
import { MdOutlineClass,MdCoPresent } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
const AdminDashboardLeft = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [toggle, setToggle] = useState(false)
  const ClassDrop = (
    <>
      {isOpen && (
        <div className='AdminDashboardLeft_ClassDrop'>

          <p onClick={() => navigate("/admin/classes/newclass/")}>All class</p>
          <p onClick={() => navigate("/admin/classes/addclass")}>Add class</p>
        </div>

      )}
    </>
  )
  return (
    <div className='AdminDashboardLeft_Main_Wrap'>
       <div className='AdminDashboardLeft_Dashboard'>
       <AiFillHome />
      <p onClick={() => navigate("/admin")}>Dashboard</p>
       </div>
      <div className='AdminDashboardLeft_Class'>
        <MdOutlineClass />
        <p onClick={() => navigate("/admin/classes/")}>Class</p>
        {isOpen ? < IoIosArrowForward onClick={() => { setIsOpen(!isOpen) }} style={{fontSize:20}} /> : <SlArrowDown onClick={() => { setIsOpen(!isOpen) }} style={{fontSize:20}} />}
      </div>
      {isOpen && ClassDrop}
      <div className='AdminDashboardLeft_Attendance'>
        <MdCoPresent/>
      <p onClick={() => navigate("/admin/attendance/")}>Attendance</p>
      </div>
    </div>
  )
}

export default AdminDashboardLeft