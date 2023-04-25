import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import Hero from "../Images/Hero.jpg"
import About from './About'
import './About.css'

const Home = () => {
  return (
    <>
    <div className='container-hero'>
      <div className='info'>
        <h1>Be a hero, donate blood today.</h1>
        <p>Saving lives starts with you. By donating blood, you have the power to make a difference in the lives of others. Every donation has the potential to save up to three lives, and every day there are patients who rely on the generosity of donors like you. </p>
        <Link to="/donor">
            <button className='donate-btn spacing'>Donate</button>
        </Link>
      </div>
      <div className='hero-img'>
          <img src={Hero}></img>
      </div>
    </div>
    <About></About>
    </>
  )
}

export default Home