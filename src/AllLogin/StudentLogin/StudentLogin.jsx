import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import './StudentLogin.css'
// import LoginUser from "../LoginUser";
import axios from "axios";
import { addStudent, addUser } from "../../Redux/Features";
import { useDispatch } from "react-redux";
import Loading from "../../LoadingSpin/Loading";
import Swal from 'sweetalert2'
const StudentLogin = () => {
    const [load, setLoad] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [value, setValue] = useState({
        email: "",
        password: ""
    })
    const field = [
        {
            name: "email",
            label: "Email",
            placeholder: "Email",
            type: "text",
            required: true
        },
        {
            name: "password",
            label: "Password",
            placeholder: "Password",
            type: "password",
            required: true
        },
    ];
    // const [loginData, setLoginData] = useState({});
    const handleChange = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value })
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked")
        setLoad(true)
        await axios.post(`https://eduglobal.onrender.com/api/student/login`, value)

            .then(function (res) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You have successfully logged in',
                    showConfirmButton: false,
                    timer: 3000
                })
                console.log(res.data)
                console.log(res.data.message)
                res.data.data.email === value.email ? dispatch(addStudent(res.data.data)) : null
                res.data.data.email === value.email ? navigate('/studentdash') : null
            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! or incorrect password or username',
                    // footer: '<a href="">Why do I have this issue?</a>'
                })
                console.log(error);
                setLoad(false)
            })
    };

    return (
        <main className="LoginStudent" >
            <form onSubmit={handleSubmit} className="login-wrapStudent">

                <div className="LoginFormStudent">

                    < div className="UserLogin">
                        <div className="Teacher" onClick={() => navigate("/login/loginteacher")}>Teacher</div>
                        <div className="Admin" onClick={() => navigate("/login/loginadmin")}>Admin</div>
                        <div className="Students" onClick={() => navigate("/login/loginstudent")}   >Student</div>
                    </div>
                    <div className="LoginType">
                        <p>Welcome back Student</p>
                    </div>
                    {field.map((i) => (
                        <label key={i.id}>
                            <input
                                className="LoginInputStudent"
                                type={i.type}
                                name={i.name}
                                placeholder={i.placeholder}
                                // value={loginData[i.name] || ""}
                                onChange={handleChange}
                            />
                            <span className='Login_err'>{i.err}</span>
                        </label>
                    ))}
                    <p className='forg' onClick={() => navigate("/forgetpassstudent")} >Forgot Paasword ?</p>
                    <button type="submit" className="LoginbttAdmin" >{load ? <Loading /> : "Login"}</button>
                    <span className="SignUp_Login_Mobile">
                        <p>Don't have an Account ? </p>
                        <b className="Sign_Login_Bttn_Mobile" onClick={() => navigate("/signup")}>SignUp</b>
                    </span>
                </div>

                <div className="ImageWrapStudent">
                    <div className="login-text">
                        <h1>Start managing now</h1>
                        <p>Stop struggling with common tasks and focus<br />
                            on the real choke points. Discover a full<br />
                            featured & 100% efficient platform.</p>
                    </div>
                    <img src="/Login.png"
                        alt="loginimg"
                        className='LoginPicStudent' />
                    <span className="Login_SignUp">
                        <p>Don't have an Account ? </p>
                        <button className="Login_SignUp_Bttn" onClick={() => navigate("/signup")}>Sign Up</button>
                    </span>
                </div>
            </form>
        </main>
    );
};

export default StudentLogin;