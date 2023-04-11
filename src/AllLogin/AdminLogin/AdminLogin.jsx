import React, { useEffect, useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import './AdminLogin.css'
import axios from 'axios';
import Loading from "../../Component1/LoadingSpin/Loading";
import { addUser } from "../../Redux/Features";
import { clearUser } from "../../Redux/Features";
import { useDispatch, useSelector } from "react-redux";
// import { ThemeContext } from "../../ContextApi/Context";
import Swal from 'sweetalert2'
import "./AdminLogin.css"
import 'animate.css';
import { BiHomeAlt } from "react-icons/bi";
const AdminLogin = () => {
    // const { verifyAlert, login_alert } = useContext(ThemeContext)

    const dispatch = useDispatch()
    const user = useSelector((state) => state.Commerce.user)
    const navigate = useNavigate()
    const [herr, setHerr] = useState(false)
    const [err, setErr] = useState('')
    const [value, setValue] = useState({
        email: "",
        password: ""
    })
    const [load, setLoad] = useState(false)
    const field = [
        {
            id: 1,
            name: "email",
            label: "email",
            placeholder: "Email",
            type: "text",
            err: "input a valid email",
            required: true

        },
        {
            id: 2,
            name: "password",
            label: "Password",
            placeholder: "Password",
            type: "password",
            err: "forget password",
            required: true
        },
    ]


    const [focus, setFocus] = useState(false)

    const handleFocus = (e) => {
        setFocus(true)
    }
    const logOut = async () => {
        const res = await axios.post(`https://eduglobal.onrender.com/api/admin/logout/${user?._id}`)
        console.log(res.data)
        res.status === 200 ? dispatch(clearUser()) : null
        res.status === 201 ? navigate('/loginuser/login') : null
        
    }

    const handleLogin = async (e) => {
        console.log("clicked")
        setLoad(true)
        e.preventDefault();
        await axios.post('https://eduglobal.onrender.com/api/admin/login', value)     
            .then(function (res) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You have successfully logged in',
                    showConfirmButton: false,
                    timer: 3000
                  })
                res.data.data.email === value.email ? dispatch(addUser(res.data.data)) : null
                res.data.data.email === value.email ?  navigate('/admin') : null
                // if (res.data.data.isVerifield === true ) {
                //     navigate('/admin') 
                //   } else {
                //     logOut()
                //     setLoad(false)
                //   }
                

            })
            .catch(function (error) {
                
                console.log(error);
                setErr(error.response.data.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    // footer: '<a href="">Why do I have this issue?</a>'
                  })
                setLoad(false)
            });
    }
    const handleChange = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value })
    };

    useEffect(() => {
        setHerr(true)
        setTimeout(() => {
            setHerr(false)
        }, 5000);
    }, [err])

    return (
        <main className="LoginAdmin" >
            {/* {verifyAlert && <div className='AdminwelcomeMssg'>
                <div>
                    <p>Please check your Email a verification link has been sent to you</p>
                </div>
            </div>} */}            
            <form onSubmit={handleLogin} className="login-WrapAdmin">    
                  
                <div className="LoginFormAdmin">  
                            
                    < div className="UserLogin">
                        <div className="Teacher" onClick={() => navigate("/login/loginteacher")}>Teacher</div>
                        <div className="Admin" onClick={() => navigate("/login/loginadmin")}>Admin</div>
                        <div className="Students" onClick={() => navigate("/login/loginstudent")}   >Student</div>
                    </div>
                    <div className="LoginType">
                        <p>Welcome back Admin</p>
                    </div>
                    {field.map((i) => (
                        <label key={i.id}>
                            <input
                                className="LoginInputAdmin"
                                type={i.type}
                                name={i.name}
                                placeholder={i.placeholder}
                                onChange={handleChange}
                                required={i.required}
                                pattern={i.pattern}
                                onBlur={handleFocus}
                                focused={focus.toString()}
                            />
                            <span className='Login_err'>{i.err}</span>
                        </label>
                    ))}
                    <p className='forg' onClick={() => navigate("/forgetpassadmin")} >Forgot Paasword ?</p>
                    <button type="submit" className="LoginbttAdmin" >{load ? <Loading /> : "Login"}</button>
                     <span className="SignUp_Login_Mobile">
                          <p>Don't have an Account ? </p>
                          <b className="Sign_Login_Bttn_Mobile" onClick={() => navigate("/signup")}>SignUp</b>
               </span>
                </div>
               
                <div className="ImageWrapAdmin">
                    <div className="login-text">
                        <h1>Start managing now</h1>
                        <p>Stop struggling with common tasks and focus<br />
                            on the real choke points. Discover a full<br />
                            featured & 100% efficient platform.</p>
                    </div>
                   <img src="/Login.png"
                        alt="loginimg"
                        className='LoginPic' />
                        <span className="Login_SignUp">
                          <p>Don't have an Account ? </p>
                          <button className="Login_SignUp_Bttn" onClick={() => navigate("/signup")}>Sign Up</button>
                        </span>
                </div>
            </form>
        </main>
    );
};

export default AdminLogin