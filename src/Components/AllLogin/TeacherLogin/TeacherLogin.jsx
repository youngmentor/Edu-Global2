import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TeacherLogin.css"
import Login from "../Login";
import Loading from "../../LoadingSpin/Loading";
import { addTeacher } from "../../../Redux/Features";
import axios from "axios";
// import Swal from 'sweetalert2'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const TeacherLogin = () => {
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
    // const logOut = async () => {
    //     const res = await axios.post(`https://eduglobal.onrender.com/api/admin/logout/${user?._id}`)
    //     console.log(res.data)
    //     res.status === 200 ? dispatch(clearUser()) : null
    //     res.status === 201 ? navigate('/loginuser/login') : null
        
    // }

    const handleChange = (event) => {
      setValue({ ...value, [event.target.name]: event.target.value })
  };
  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("clicked")
      setLoad(true)
      await axios.post(`https://eduglobal.onrender.com/api/teacher/login`, value)

          .then(function (res) {
              Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'You have successfully logged in',
                  showConfirmButton: false,
                  timer: 3000
                })
              console.log(res)
              console.log(res.data.message)
              res.data.data.email === value.email ? dispatch(addTeacher(res.data.data)) : null
              res.data.data.email === value.email ? navigate('/teacherdash') : null
          })
          .catch(function (error) {
              Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                  // footer: '<a href="">Why do I have this issue?</a>'
                })
              console.log(error);
              setLoad(false)
          })
  };

    useEffect(() => {
        setHerr(true)
        setTimeout(() => {
            setHerr(false)
        }, 5000);
    }, [err])

    return (
        <main className="LoginTeacher" >
            {/* {verifyAlert && <div className='AdminwelcomeMssg'>
                <div>
                    <p>Please check your Email a verification link has been sent to you</p>
                </div>
            </div>} */}            
            <form onSubmit={handleSubmit} className="login-WrapTeacher">    
                  
                <div className="LoginFormTeacher">  
                            
                    < div className="UserLogin">
                        <div className="Teacher" onClick={() => navigate("/login/loginteacher")}>Teacher</div>
                        <div className="Admin" onClick={() => navigate("/login/loginadmin")}>Admin</div>
                        <div className="Students" onClick={() => navigate("/login/loginstudent")}   >Student</div>
                    </div>
                    <div className="LoginType">
                        {/* <p>I'M an Admin</p> */}
                    </div>
                    {field.map((i) => (
                        <label key={i.id}>
                            <input
                                className="LoginInputTeacher"
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
                    <p className='forg' onClick={() => navigate("/forgetpassword")} >Forgot Paasword ?</p>
                    <button type="submit" className="LoginbttAdmin" >{load ? <Loading /> : "Login"}</button>
                     <span className="SignUp_Login_Mobile">
                          <p>Don't have an Account ? </p>
                          <b className="Sign_Login_Bttn_Mobile" onClick={() => navigate("/signup")}>SignUp</b>
               </span>
                </div>
               
                <div className="ImageWrapTeacher">
                    <div className="login-text">
                        <h1>Start managing now</h1>
                        <p>Stop struggling with common tasks and focus<br />
                            on the real choke points. Discover a full<br />
                            featured & 100% efficient platform.</p>
                    </div>
                   <img src="/Login.png"
                        alt="loginimg"
                        className='LoginPicTeacher' />
                        <span className="Login_SignUp">
                          <p>Don't have an Account ? </p>
                          <button className="Login_SignUp_Bttn" onClick={() => navigate("/signup")}>Sign Up</button>
                        </span>
                </div>
            </form>
        </main>
    );
};

export default TeacherLogin