import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import "./Request.css"
import Avatar from "../Images/Avatar.jpg"
import axios from 'axios'
var data = require("./address.json");
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

function Request() {

  const [selectedOption, setSelectedOption] = useState('');
  const [value, setValue] = useState('');
  const [content, setContent] = useState([]);
  const [reqname, setReqname] = useState('')

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
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
    //console.log(typeof data)
  };

  const onFind = (findValue) => {
    setContent(findValue);
    // our api to fetch the search result
    console.log("search ", findValue);
    //console.log(typeof data)
  };
  const [list, setList] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:8081/requestauth', { value: reqname })
      .then(res => {
        console.log(res)
        if (res.status=== 200) {
          alert('Input value exists');
        } else if(res.status === 400) {
          alert('Input value does not exist');
        }
      })
      
      .catch(err => console.log(err));
      const token = localStorage.getItem("token");
      console.log(token)
      if(token == null){
        navigate('/login');
      }
      await axios.get(`http://localhost:8081/request`, {
        params: {
          selectedOption: selectedOption,
          location: value
        },
        headers: {
          Authorization: `${token}`
        }
      }).then((res) => {
        // setContent( res.data);
        setList(res.data);
      }).catch(err => console.log(err));

    console.log(list)
    
    if (list.length > 0) {
        navigate('/RequestTable', { state: { arr: list, selectedOption: selectedOption } });
      // {<RequestTable arr={[1,2]} />}
    }
    // else{
    //   alert('Data Not Found...')
    // }
  }


  return (
    <>
      <div className='request-wrapper'>
        <img src={Avatar} alt='oops'></img>
        <form onSubmit={handleSubmit}>

          {/* <div className='req-input'>
            <input type="text" placeholder='Enter Full Name' value={reqname} onChange={e => setReqname(e.target.value)}></input>
          </div> */}

          <div className='req-input'>
            {/* <h2>{selectedOption}</h2> */}
            <select className='select' name='bloodGroup' id='bloodGroup' value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
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

          <button className='request-submitBtn' type='submit'>Submit</button>
          {/* <RequestTable data={content} /> */}

        </form>
      </div>

    </>
  )
}

export default Request