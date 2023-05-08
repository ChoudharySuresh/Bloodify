import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'
import Avatar from "../Images/Avatar.jpg"
import './Donor.css'
import donateBlood from '../Images/donate-blood.jpg'
var cities = [
  'Pune',
  'Pimpri Chinchwad',
  'Khed',
  'Bhor',
  'Haveli',
  'Daund',
  'Indapur',
  'Ambegaon',
  'dehu road',
  'paud road',
  'Loni Kalbhor',
  'sant tukaram nagar',
  'station road',
  'talegaon',
  'yashwanthnagar',
  'kharalwadi',
  'aundh camp',
  'saras baugh road',
  'tukaram road',
  'Hadapsar',
  'dhankawadi campus',
  'baramati',
  'karve road',
  'daund',
  'sadashiv peth',
  'saswad',
  'rastha peth',
  'Magarpatta',
  'Koregaon Park',
  'Baner',
];

const Donor = () => {

  const [selectedOption,setSelectedOption] = useState('');
  const [value, setValue] = useState('');
  const [content, setContent] = useState([]);
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const handleChange = (value) => {
    setValue(value)
    //fetchData(value)
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
    // console.log(typeof data)
  };

  const onFind = (findValue) => {
    setContent(findValue);
    // our api to fetch the search result
    console.log("search ", findValue);
    //console.log(typeof data)
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const token = localStorage.getItem("token");
    console.log(token)
    if (token == null) {
      navigate('/login');
    }

    await axios.get(`http://localhost:8081/donate`, {
      params: {
        selectedOption: selectedOption,
        location: value,
        nname: value,
        phoneno: value
      },
      headers: {
        Authorization: `${token}`
      }
    }).then((res) => {
      // setContent( res.data);
      setList(res.data);

    }).catch(err => console.log(err))
    console.log(list)

    if (list.length > 0) {
      navigate('/DonateTable', { state: { arr: list, selectedOption: selectedOption } });
      // {<RequestTable arr={[1,2]} />}
    }

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="donor-container">
          <img src={Avatar} alt='oops'></img>
          <div className='donor-info'>
            <input type="text" placeholder='Name' value={value} onChange={e => handleChange(e.target.value)}></input>
          </div>

          <div className='donor-info'>
            <input type="text" placeholder='Phone No.' value={value} onChange={e => handleChange(e.target.value)}></input>
          </div>

          <div className='donor-info'>
           {/* <h2>{selectedOption}</h2>  */}
            <select className='select' name='bloodGroup' id='bloodGroup' value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
              <option>Select Blood Group</option>
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

          <div className='donor-info'>
            <input type="text" placeholder='Enter Location' value={value} onChange={e => handleChange(e.target.value)}></input>
          </div>

          <div className='dropdown'>
            {cities
              .filter(item => {
                const searchTerm = value.toLowerCase();
                const fname = item.toLowerCase();

                return (
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
          <button className='donor-submitBtn' type='submit'>Donate</button>
        </div>
      </form>
    </div>
  )
}

export default Donor
