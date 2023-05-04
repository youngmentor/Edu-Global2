import React, { useState } from 'react'
import './AdminHeader.css'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
const AdminHeader = () => {
  const [school, setSchool] = useState(false)

const schoolDrop =(
  <>
     {
      school && (
        <div className='AdminHeader_SchoolDropMenu'>
           <p style={{cursor: 'pointer',}} >Profile</p>
           <p style={{cursor: 'pointer',}}>Log Out</p>
           <p style={{cursor: 'pointer',}}>Account Setting</p>
        </div>
      )
     }
  </>
)
  return (
    <div className='AdminHeader_Main'>
       <div className='AdminHeader_Main_Wrap'>
       <div className='AdminHeader_Logo-Wrap'>
       <img src='./Edu-Global.png' className='AdminHeader_Logo' />
       </div>
       <div className='AdminHeader_SchoolName'>
          <p>THE CURVE AFRICA</p>
          {school? <MdKeyboardArrowUp onClick={() => { setSchool(!school) }} style={{fontSize:"25", cursor:"pointer" }} /> : <MdKeyboardArrowDown onClick={() => { setSchool(!school) }} style={{fontSize:"25", cursor:"pointer" }}  />}
       </div>
       {school && schoolDrop}
       </div>
    </div>
  )
}

export default AdminHeader