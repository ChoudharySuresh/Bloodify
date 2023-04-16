import React, { useEffect, useState } from 'react'
import "./Request.css"
import Avatar from "../Images/Avatar.jpg"
import axios from 'axios'


function Request() {

  const [selectedOption, setSelectedOption] = useState('');
  const [location, setLocation] = useState('');

  // useEffect(() => {
  //   setTimeout(() => {
  //     axios.get(`http://localhost:8081/addres`)
  //       .then(data => console.log(data.data))
  //       .catch(err => console.log(err))
  //   });
  // }, [])

  const fetchData = (value) => {
    axios.get(`http://localhost:8081/request`)
    .then((data) => {console.log(data.data[0])})
    //const values = Object.values(data)
    //console.log(typeof(data.data))
    // .then(data => {
    //   const results = data.filter((data) =>{
    //     return data && data.data.address && data.data.address.toLowerCase().includes(value);
    //   });
    //   console.log(results);
    // })
  }

  const handleChange = (value) => {
    setLocation(value)
    fetchData(value)
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios.get(`http://localhost:8081/request?selectedOption=${selectedOption}`)
      // .then(response => response.JSON())
      .then(data => console.log(data))
      .catch(err => console.log(err))

  }

  return (
    <>
      <div className='request-wrapper'>
        <img src={Avatar} alt='oops'></img>

        <form onSubmit={handleSubmit}>

          <div className='req-input'>
            <input type="text" placeholder='Enter Full Name'></input>
          </div>

          <div className='req-input'>
            <h2>{selectedOption}</h2>
            <select name='bloodGroup' id='bloodGroup' value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
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


          <div className='req-input'>
            <input type="text" placeholder='Enter Location' onChange={e => handleChange(e.target.value)}></input>
          </div>

          <button className='request-submitBtn' type='submit'>Submit</button>
        </form>
      </div>

    </>
  )
}

export default Request
