import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./Navigation.css"
import { Link , useHistory} from 'react-router-dom'
import axios from "axios";

const Navigation = () => {
  const [donors, setDonors] = useState([]);
  const navigate = useNavigate();

  async function handleClick(event) {
    event.preventDefault();

    await axios.get(`http://localhost:8081/listDonars`)
      .then((res) => {
        setDonors(res.data);

      })
      .catch(err => {
        console.log(err);
      });
    console.log(donors);
    
    if (donors.length > 0) {
      navigate('/DonorList', { state:{donars: donors }})
    }

  }
  return (
    <>

      <nav className='container'>
        <Link to="/">
          <h1 className='title'>Bloodify</h1>
        </Link>

        <ul>
          <li> <Link to="/">Home</Link> </li>
          <div className="dropdown">
            <Link to="/">Donate +</Link>
            <div className="dropdown-content">
              {/* <Link to="/donor">Donor</Link> */}
              <a href="/donor">Donor</a>
              <button onClick={handleClick}>List of Donors</button>
            </div>
          </div>
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