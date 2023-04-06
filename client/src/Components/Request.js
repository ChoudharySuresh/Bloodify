import React, { useState } from 'react'
import "./Request.css"
import Avatar from "../Images/Avatar.jpg"
import axios from "axios"
// import avatar from "../Images/avatar.svg"

function Request() {
  const [showOutput , setShowOutput] = useState("");
  const URL = "https://www.eraktkosh.in/BLDAHIMS/bloodbank/nearbyBB.cnt?hmode=GETNEARBYSTOCKDETAILS&stateCode=27&districtCode=521&bloodGroup=all&bloodComponent=11";

  // const getData = () =>{
  //   fetch(URL)
  //   .then(res => res.json())
  //   .then(data => {
  //    var result = JSON.stringify(data);
  //    var op =  result.replace(/<[^>]*>/g, '');
  //    var op2 = JSON.parse(op);
  //    console.log(op2.data);
  //    setShowOutput(op2.data[0][1]);
  //   })
// }

  async function getData(){
    const response = await fetch(URL)
    const data = await response.json();

    const myObj = {...data};
    
    console.log(myObj.data);
    setShowOutput(myObj.data);

    // console.log("Length : ", myObj.data.length);
    
  }

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

          {/* <input type="submit"  className='request-submitBtn' ></input> */}
        </form>
          <button className='request-submitBtn' onClick={getData}>Submit</button>
      </div>
      {showOutput}
    </>
  )
}

export default Request
