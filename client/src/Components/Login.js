import React from 'react'
import { useState } from 'react'
import "./Login.css"
import signinpic from "../Images/login-pic.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { MdMailOutline , MdLockOutline } from "react-icons/md";
import axios from "axios"
import Validation from './LoginValidation';

const Login = () => {
    const [values , setValues] = useState({
        email:'',
        password:''
    });

    const [errors , setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) =>{
        setValues(prev => ({...prev , [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        if(errors.email === "" && errors.password === ""){
            console.log(values)
            axios.post('http://localhost:8081/login' , values)
            .then(res => {
                console.log(res)
                    localStorage.setItem("token",res.data.token);
                if(res.status == 200){
                    navigate('/');
                }else{
                    alert("Account Not Existed..")
                }
            })
            .catch(err => console.log(err));
        }
    }


  return (
    <div className="wrapper">

        <div className="login-img">
            <img src={signinpic} style={{width:"21rem"}} alt='oops'></img>
        </div>

        <div className="login-form">
            <h1>Sign In</h1>
            
            <form action='' onSubmit={handleSubmit}>

                <div className="input-field">
                    <input type="email" name="email" id="email" placeholder="Your Email"   onChange={handleInput}></input>
                    <MdMailOutline size="1.5rem" className="in-Icon"></MdMailOutline>
                </div>
                {errors.email && <span style={{color:"red"}}>{errors.email}</span>}

                <div className="input-field">
                    <input type="password" name="password" id="password" placeholder="Password"  onChange={handleInput} ></input>
                    <MdLockOutline size="1.5rem" className="in-Icon"></MdLockOutline>
                </div>
                {errors.password && <span style={{color:"red"}}>{errors.password}</span>}

                <div>
                    <button type='submit' className='sign-in-btn'>Log In</button>
                </div>

                <span className='sign-in-bottom-link'>No Account? <Link className="Link" to="/register">Create One</Link></span>

            </form>
        </div>
    </div>
  )
}

export default Login
