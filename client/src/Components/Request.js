import React from 'react'
import "./Request.css"
import Avatar from "../Images/Avatar.jpg"
// import avatar from "../Images/avatar.svg"

function Request() {
  return (
    <>
      <div className='request-wrapper'>
        <img src={Avatar}></img>

        <form>

          <div className='req-input'>
              <input type="text" placeholder='Enter Full Name'></input>
          </div>

          <div className='req-input'>
          <select name='bloodGroup' id='bloodGroup'>
            <option>select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          </div>


          <div className='req-input'>
            <input type="text" placeholder='Enter Location (Pune Only)'></input>
          </div>

          <input type="submit"  className='request-submitBtn' ></input>
        </form>
      </div>
    </>
  )
}

export default Request
