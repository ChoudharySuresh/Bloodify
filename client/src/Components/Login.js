import React from 'react'
import { useState } from 'react'
import "./Login.css"
import signinpic from "../Images/login-pic.jpg"
import { Link } from 'react-router-dom'
import { MdMailOutline , MdLockOutline ,MdArrowOutward} from "react-icons/md";
import Axios from "axios"

const Login = () => {
    const [email , setEmail]= useState("");
    const [password , setPassword]= useState("");

    const login = () =>{
        Axios.post("http://localhost:3001/login" , 
        {
            email : email,
            password : password,

        }).then((response) => {
            console.log(response)
        });
    }

  return (
    <div className="wrapper">

        <div className="login-img">
            <img src={signinpic} style={{width:"21rem"}}></img>
            <Link className="Link" to="/register">Create an Account <MdArrowOutward size="1rem"></MdArrowOutward></Link>
        </div>

        <div className="login-form">
            <h1>Sign In</h1>

                <div className="input-field">
                    <input type="email" name="email" id="email" placeholder="Your Email" required  onChange={(e) => setEmail(e.target.value)} ></input>
                    <MdMailOutline size="1.5rem" className="in-Icon"></MdMailOutline>
                </div>

                <div className="input-field">
                    <input type="password" name="password" id="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} ></input>
                    <MdLockOutline size="1.5rem" className="in-Icon"></MdLockOutline>
                </div>

                <div className="submit-btn">
                    <input type="submit" value="Log In" onClick={login}></input>
                </div>
        </div>
    </div>
  )
}

export default Login
