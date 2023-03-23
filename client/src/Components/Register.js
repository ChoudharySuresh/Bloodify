import React, { useState } from 'react'
import "./Register.css"
import Axios from 'axios'
import signUpPic from "../Images/Sign up.svg"
import { MdMailOutline , MdLockOutline , MdOutlinePhone , MdPermIdentity} from "react-icons/md";

const Register = () => {

const [userNameReg , setUserNameReg]= useState("");
const [emailReg , setEmailReg]= useState("");
const [mobileNoReg , setMobileNoReg]= useState("");
const [passwordReg , setPasswordReg]= useState("");


const register = () =>{
    Axios.post("http://localhost:3001/register" , {
        username : userNameReg,
        email : emailReg,
        mobileNo : mobileNoReg,
        password : passwordReg
    }).then((response) => {
        console.log(response)
    });
};



  return (
    <>
      <div className='register-wrapper'>
        <div className='register-form'>
            <h2>Sign Up</h2>

                <div className='input-field'>
                    <input type="text" placeholder='Enter User Name' onChange={(e) => setUserNameReg(e.target.value)}></input>
                    <MdPermIdentity size="1.5rem" className="in-Icon"></MdPermIdentity>
                </div>

                <div className='input-field'>
                    <input type="email" placeholder='Your Email' onChange={(e) => setEmailReg(e.target.value)}></input>
                    <MdMailOutline size="1.5rem" className="in-Icon"></MdMailOutline>
                </div>

                <div className='input-field'>
                    <input type="number" placeholder='Mobile Number' onChange={(e) => setMobileNoReg(e.target.value)}></input>
                    <MdOutlinePhone size="1.5rem" className="in-Icon"></MdOutlinePhone>
                </div>

                <div className='input-field'>
                    <input type="password" placeholder='Password' onChange={(e) => setPasswordReg(e.target.value)}></input>
                    <MdLockOutline size="1.5rem" className="in-Icon"></MdLockOutline>
                </div>

                <div className='input-field'>
                    <input type="password" placeholder='Confirm Password'></input>
                    <MdLockOutline size="1.5rem" className="in-Icon"></MdLockOutline>
                </div>
                
                <div className="submit-btn reg-btn">
                    <button className='btn' onClick={register}>Register</button>
                </div>
            
        </div>

        <div className='register-img'>
            <img src={signUpPic}></img>
        </div>
      </div>
    </>
  )
}

export default Register
