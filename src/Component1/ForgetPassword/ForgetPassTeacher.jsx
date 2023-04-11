import React, {useState} from 'react'
import { useRef } from 'react'
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
// import { NavLink } from 'react-router-dom';

import axios from 'axios';

// import axios from 'axios';
const ForgetPasswordTeacher = () => {
    const [email, setEmail] = useState('')
    const [Load, setLoad] =useState(false)
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate()
    
    const handleForget = async (e) => {
        console.log("clicked")
        e.preventDefault();
        try {
            setLoad(true)
            const response = await axios.post('https://eduglobal.onrender.com/api/teacher/forgotPassword', { email });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Check Your Email for A reset password link',
                showConfirmButton: false,
                timer: 3000
              })
            setLoad(false)
            // console.log(response.data); 
            setSuccessMessage(response.data.message)
        } catch (error) {
            console.log(error.response.data); 
        }
    };
    return (
        <div className='forget'>
            <form onSubmit={handleForget} className='forget_text' >
                <img src='./ForgotPassword.png' alt='ForgotPassword' className='ForgetImage'/>
                <h2>Forgot password?</h2>             
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='forget_input' placeholder='Email'/>
                    {/* {successMessage && <p>{successMessage}</p>} */}
                <button type="submit" className='forget_button pointer' >Submit</button>
                <div className='forget_back pointer' onClick={() => { navigate('/login/loginteacher') }} ><MdOutlineArrowBack fontSize={20} /><p>Back to login</p></div>
            </form>

        </div>
    )
}

export default ForgetPasswordTeacher