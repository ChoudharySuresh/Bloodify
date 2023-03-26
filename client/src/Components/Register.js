import React, { useState } from 'react'
import "./Register.css"
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import signUpPic from "../Images/Sign up.svg"
import { MdMailOutline , MdLockOutline , MdOutlinePhone , MdPermIdentity} from "react-icons/md";
import Validation from './RegisterValidation'

const Register = () => {
    const [values , setValues] = useState({
        name:'',
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

        if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/signup' , values)
            .then(res => {
                navigate('/login');
            })
            .catch(err => console.log(err));
        }
    }


    return (
    <>
      <div className='register-wrapper'>
        <div className='register-form'>
            <h2>Sign Up</h2>

            <form action='' onSubmit={handleSubmit}>

                <div className='input-field'>
                    <input name='name' type="text" placeholder='Enter User Name' onChange={handleInput}></input>
                    <MdPermIdentity size="1.5rem" className="in-Icon"></MdPermIdentity>
                </div>
                {errors.name && <span style={{color:"red"}}>{errors.name}</span>}

                <div className='input-field'>
                    <input type="email" name='email' placeholder='Your Email' onChange={handleInput}></input>
                    <MdMailOutline size="1.5rem" className="in-Icon"></MdMailOutline>
                </div>
                {errors.email && <span style={{color:"red"}}>{errors.email}</span>}

                <div className='input-field'>
                    <input type="password" name='password' placeholder='Password' onChange={handleInput}></input>
                    <MdLockOutline size="1.5rem" className="in-Icon"></MdLockOutline>
                </div>
                {errors.password && <span style={{color:"red"}}>{errors.password}</span>}
                
                <div>
                    <button type='submit' className='sign-up-btn'>Register</button>
                </div>
            
            </form>
        </div>

        <div className='register-img'>
            <img src={signUpPic}></img>
        </div>
      </div>
    </>
  )
}

export default Register
