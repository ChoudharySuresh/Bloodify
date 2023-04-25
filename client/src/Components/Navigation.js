import React from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom'


const Navigation = () => {
  return (
    <>
        
       <nav className='container'>
        <Link to="/">  
            <h1 className='title'>Bloodify</h1>
        </Link>
        
        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/donor">Donate</Link> </li>
            <li> <Link to="/request">Request</Link></li>
        </ul>

        <Link to="/login">
           <button className='login-btn spacing'>Login
           </button>
        </Link>
       </nav> 
    </>
  )
}

export default Navigation
