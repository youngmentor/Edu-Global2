import React, { useState } from 'react'
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom'
import { AiFillHome, AiOutlineProfile } from "react-icons/ai";
import { MdOutlineClass } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
const AdminDashboardLeft = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [toggle, setToggle] = useState(false)
  const ClassDrop =(
    <>
       {isOpen &&(
       <div>
         <p onClick={() => navigate("/admin/classes/newclass/")}>All class</p>
        <p onClick={() => navigate("/admin/classes/addclass")}>Add class</p>
       </div>

       ) }
    </>
  )
  return (
    <div>
        <h1 onClick={() => navigate("/admin")}><AiFillHome/>Dashboard</h1>
       <div>
       <h1 onClick={() => navigate("/admin/classes/")}><MdOutlineClass/>classes</h1>
       {isOpen ? < IoIosArrowForward onClick={() => { setIsOpen(!isOpen) }} /> : <SlArrowDown onClick={() => { setIsOpen(!isOpen) }} />}
       </div>
       {isOpen && ClassDrop}
        <h1 onClick={() => navigate("/admin/attendance/")}>Attendance</h1>
    </div>
  )
}

export default AdminDashboardLeft