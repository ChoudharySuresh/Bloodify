import React from 'react'
import './Donor.css'
import donateBlood from '../Images/donate-blood.jpg'

const Donor = () => {
  return (
    <div>
      <div className="donor-container">

          {/* <div className="donor-bg">
            <img src={donateBlood} alt="OOPs" />
          </div> */}

          <div className="donor-form-container">
            <div className="donor-info">
                <label htmlFor="donor-name">Name</label>
                <input type="text" placeholder='Enter Your Name' id='donor-name'/>
            </div>

            <div className="donor-info">
              <label htmlFor="donor-age">Age</label>
              <input type="number"  id="donor-age" />
            </div>


            <div className="donor-info">
              <label htmlFor="donor-blood-group">blood Group</label>
              <select name='donor-blood-group' id='donor-blood-group'>
                  <option>select Blood Group</option>
                  <option value="a_pos">A+</option>
                  <option value="a_neg">A-</option>
                  <option value="b_pos">B+</option>
                  <option value="b_neg">B-</option>
                  <option value="ab_pos">AB+</option>
                  <option value="ab_neg">AB-</option>
                  <option value="o_pos">O+</option>
                  <option value="o_neg">O-</option>
              </select>
            </div>

            <div className="donor-info">
              <label htmlFor="donor-unit">Amount Of Blood Unit</label>
              <input type="text"  id="donor-unit" />
            </div>

            <div className="donor-info">
              <label htmlFor="donor-location">Location</label>
              <input type="text"  id="donor-location" />
            </div>

            <button className='donor-submit-btn'>Donate</button>
          </div>

      </div>
    </div>
  )
}

export default Donor
