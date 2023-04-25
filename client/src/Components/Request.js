import React, { useEffect, useState } from 'react'
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

function Request() {

  const [selectedOption, setSelectedOption] = useState('');
  const [value, setValue] = useState('');
  const [content, setContent] = useState([]);

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
  }

   const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
    console.log(typeof data)
  };

  const onFind = (findValue) => {
    setContent(findValue);
    // our api to fetch the search result
    console.log("search ", findValue);
    //console.log(typeof data)
  };

  function handleSubmit(event) {
    event.preventDefault();

    axios.get(`http://localhost:8081/request`, {params:{
      selectedOption: selectedOption,
      location: value
    }}).then((res) => {
      //console.log(res)
  setContent(prevContent => {
    const newContent = [...prevContent, ...res.data];
    console.log(newContent); // log the new state value
    return newContent;})
      // console.log(res)
      // setContent([...content, ...res.data])
      // console.log(content)
    })
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
            {/* <h2>{selectedOption}</h2> */}
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

          <div>
          
          <div className='item-container'>
          {content.map((item) => (
            <div onClick={() => onFind(item)} className='card' key={item.id}>
              {item.data}
            </div>
          ))}
          </div>
        </div>

          <button className='request-submitBtn' type='submit'>Submit</button>
        
        </form>
      </div>

    </>
  )
}

export default Request