<<<<<<< HEAD
import React, { useState  } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Request.css"
import Avatar from "../Images/Avatar.jpg"
import axios from 'axios'
var data = require("./address.json");
var cities = [
  "Mumbai",
  "Delhi",
  "Kolkata",
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Pune",
  "Surat",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Visakhapatnam",
  "Bhopal",
  "Patna",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Vadodara",
  "Varanasi",
  "Thane",
  "Meerut",
  "Faridabad",
  "Rajkot"
];
=======
import React, { useEffect, useState } from 'react'
import "./Request.css"
import Avatar from "../Images/Avatar.jpg"
import axios from 'axios'

>>>>>>> 042b7e69d268a0c03b41163e686d92a56cba2213

function Request() {

  const [selectedOption, setSelectedOption] = useState('');
<<<<<<< HEAD
  const [value, setValue] = useState('');

  const [result , setResult] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     axios.get(`http://localhost:8081/addres`)
  //       .then(data => console.log(data.data))
  //       .catch(err => console.log(err))
  //   });
  // }, [])

  // const fetchData = async (value) => {
    
  //   data.filter(item => {
      
  //     const search = value.toLowerCase();
  //     const fname = item.address.toLowerCase();
  //     // console.log(fname);
 
  //     if (fname.includes(search)){
  //       console.log(item.address)
  //       return item.address;
  //     };
  //   })
  //   // })
  // }

  const handleChange = (value) => {
    setValue(value)
    //fetchData(value)
=======
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

>>>>>>> 042b7e69d268a0c03b41163e686d92a56cba2213
  }

   const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
    console.log(typeof data)
  };

  function handleSubmit(event) {
    event.preventDefault();

    axios.get(`http://localhost:8081/request`, {params:{
      selectedOption: selectedOption,
      location: value
    }})
      .then(data => {
        let res = data.data;
        console.log(res);

        setResult([res,...result]);
        console.log(result)
      })
      .catch(err => console.log(err))

      navigate('/RequestTable');

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
<<<<<<< HEAD
            <select className='select' name='bloodGroup' id='bloodGroup' value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
=======
            <h2>{selectedOption}</h2>
            <select name='bloodGroup' id='bloodGroup' value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
>>>>>>> 042b7e69d268a0c03b41163e686d92a56cba2213
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
<<<<<<< HEAD
            <input type="text" placeholder='Enter Location' value={value} onChange={e => handleChange(e.target.value)}></input>
          </div>

          <div className='dropdown'>
            {cities
              .filter(item =>{
                const searchTerm = value.toLowerCase();
                const fname = item.toLowerCase();

                return(
                  searchTerm && fname.startsWith(searchTerm) &&
                  fname !== searchTerm
                )
              })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item)}
                className="dropdown-row"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>

          <button className='request-submitBtn' type='submit'>Submit</button>

=======
            <input type="text" placeholder='Enter Location' onChange={e => handleChange(e.target.value)}></input>
          </div>

          <button className='request-submitBtn' type='submit'>Submit</button>
>>>>>>> 042b7e69d268a0c03b41163e686d92a56cba2213
        </form>
      </div>

    </>
  )
}

export default Request