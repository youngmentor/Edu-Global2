import React, { useState } from 'react'
import Dashboard from './DashboardMain/Dashboard'
import { useNavigate } from 'react-router-dom'
import { AiFillHome, AiOutlineProfile } from "react-icons/ai";
import { MdOutlineClass, MdCoPresent, MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
const AdminDashboardLeft = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [isTeacherNesting, setIsTeacherNesting] = useState(false)
  const [isStudentNesting, setIsStudentNesting] = useState(false)
  const ClassDrop = (
    <>
      {isOpen && (
        <div className='AdminDashboardLeft_ClassDrop'>

          <p onClick={() => navigate("/admin/classes/newclass/")}>Add class</p>
          <p onClick={() => navigate("/admin/classes/allclass")}>All class</p>
        </div>

      )}
    </>
  )
  const TeacherDrop = (
    <>
      {isTeacherNesting && (
        <div className='AdminDashboardLeft_ClassDrop'>

          <p onClick={() => navigate("/admin/adminteacher/allteacher/")}>All Teachet</p>
          <p onClick={() => navigate("/admin/adminteacher/addteacher")}>Add New Teacher</p>
        </div>

      )}
    </>
  )
  const StudentDrop = (
    <>
      {isStudentNesting && (
        <div className='AdminDashboardLeft_ClassDrop'>

          <p onClick={() => navigate("/admin/adminstudent/allstudent/")}>All Student</p>
          <p onClick={() => navigate("/admin/adminstudent/addstudent")}>Add New Student</p>
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
        <div className='AdminDashboardLeft_ClassWrap'>
          <MdOutlineClass />
          <p>Class</p>
        </div>
        {isOpen ? < MdKeyboardArrowUp onClick={() => { setIsOpen(!isOpen) }} style={{ fontSize: "25", cursor: "pointer" }} /> : <MdKeyboardArrowDown onClick={() => { setIsOpen(!isOpen) }} style={{ fontSize: "25", cursor: "pointer" }} />}
      </div>
      {isOpen && ClassDrop}
      <div className='AdminDashboardLeft_Attendance'>
        <MdCoPresent />
        <p onClick={() => navigate("/admin/attendance/")}>Attendance</p>
      </div>
      <div className='AdminDashboardLeft_Teacher'>
        <div className='AdminDashboardLeft_TeacherWrap'>
          <AiOutlineProfile />
          <p>Teachers</p>
        </div>
        {isTeacherNesting ? < MdKeyboardArrowUp onClick={() => { setIsTeacherNesting(!isTeacherNesting) }} style={{ fontSize: "25", cursor: "pointer" }} /> : <MdKeyboardArrowDown onClick={() => { setIsTeacherNesting(!isTeacherNesting) }} style={{ fontSize: "25", cursor: "pointer" }} />}
      </div>
      {isTeacherNesting && TeacherDrop}
      <div className='AdminDashboardLeft_Student'>
     <div className='AdminDashboardLeft_StudentWrap'>
     <AiOutlineProfile />
        <p>Student</p>
     </div>
     {isStudentNesting ? < MdKeyboardArrowUp onClick={() => { setIsStudentNesting(!isStudentNesting) }} style={{ fontSize: "25", cursor: "pointer" }} /> : <MdKeyboardArrowDown onClick={() => { setIsStudentNesting(!isStudentNesting) }} style={{ fontSize: "25", cursor: "pointer" }} />}
      </div>
      {isStudentNesting && StudentDrop}
    </div>
  )
}

export default AdminDashboardLeft