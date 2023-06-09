import React, { useState,useEffect }  from 'react'
import './Dashboard.css'
import Calendar from 'react-calendar'
import { FaGraduationCap } from "react-icons/fa";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.Commerce.user)
  const [date, setDate] = useState(new Date());
  const [Allclass, setAllClass] = useState([])
  const [Allstudent, setAllStudent] = useState([])
  const [Allteacher, setAllTeacher] = useState([])

  const handleChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const getClass = async () => {
    const res = await axios.get(`https://eduglobal.onrender.com/api/admin/allClass/${user?._id}`)
    setAllClass(res.data.data)
    // console.log(res.data.data)
    // res.status === 201? dispatch(addClass(res.data.data)) : null
  };
  const getAllStudent = async (e) => {
    const res = await axios.get(`https://eduglobal.onrender.com/api/admin/allStudent/${user?._id}`)
    setAllStudent(res.data.data)
    // console.log(res.data.data)
  };
  const getAllTeacher = async (e) => {
    const res = await axios.get(`https://eduglobal.onrender.com/api/admin/allTeacher/${user?._id}`)
    setAllTeacher(res.data.data)
    // console.log(res.data.data)
  };
  useEffect(() => {
    getClass()
    getAllStudent()
    getAllTeacher()
  }, [])
  useEffect(() => {
    // console.log(res)
    // console.log(Allclass)
  }, [Allclass])
  return (
    <div className='Dashboard_Main'>
         <div className='AdminRightDiv'>
      {/* <div className='Admin_Msg' >
            <h4>Welcome to Admin Dashboard <br /> Your Account is verified</h4>
            <img src='/Message.png' alt='' className='Admin_Info_Mssg' />
          </div> */}
        <div className='AdminCardHolder'>
          <div className='AdminCard'  onClick={() => { navigate("/admin/student/addnstudents") }}>         
              <div className='AdminCardWrap'>
              <div className='AdminGraduationCap'>
                <h4>Total Students:</h4>
                <FaGraduationCap style={{ width: "50px", height: "50px" }} />
              </div>
              <div className='AdminCardDetails'>
                <h2>{Allstudent.length}</h2>
              </div>
            </div>     
          </div>
          <div className='AdminCard' onClick={() => { navigate("/admin/teachers/allteacher") }} >
            <div className='AdminCardWrap'>
              <div className='AdminGraduationCap'>
                <h4>Total Teachers:</h4>
                <FaGraduationCap style={{ width: "50px", height: "50px" }} />
              </div>
              <div className='AdminCardDetails'>
                <h2>{Allteacher.length}</h2>
              </div>
            </div>
          </div>
          <div className='AdminCard' onClick={() => { navigate("/admin/clases/allClasses") }}   >         
              <div className='AdminCardWrap'>
              <div className='AdminGraduationCap'>
                <h4>Total Classes:</h4>
                <FaGraduationCap style={{ width: "50px", height: "50px" }} />
              </div>
              <div className='AdminCardDetails'>
                <h2>{Allclass.length}</h2>
              </div>
            </div>
          </div>
        </div>
        <Calendar onChange={handleChange} value={date} className="Calender" />
      </div>
    </div>
  )
}

export default Dashboard