import React from 'react'
import './RequestTable.css';
import { useLocation } from 'react-router-dom';
const RequestTable = ({props} )=> {
  
  const location = useLocation();
  var selectedOption = location.state.selectedOption
  console.log(selectedOption)
var arr =  location.state.arr;
  console.log(arr)
  return (
    <div>
      <h2 className='request-table-heading'>Blood Bank Details</h2>
      <div className="request-table-container">

      <table>
        <thead>
            <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Address</th>
                <th>PhoneNo</th>
                <th>Blood Group</th>
            </tr>
        </thead>
        <tbody>
        {arr.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.address}</td>
              <td>{val.phoneno}</td>
              {selectedOption === 'a_pos' ? <td>{val.a_pos}</td> : null}
              {selectedOption === 'a_neg' ? <td>{val.a_neg}</td> : null}
              {selectedOption === 'b_pos' ? <td>{val.b_pos}</td> : null}
              {selectedOption === 'b_neg' ? <td>{val.b_neg}</td> : null}
              {selectedOption === 'ab_pos' ? <td>{val.ab_pos}</td> : null}
              {selectedOption === 'ab_neg' ? <td>{val.ab_neg}</td> : null}
              {selectedOption === 'o_pos' ? <td>{val.o_pos}</td> : null}
              {selectedOption === 'o_neg' ? <td>{val.o_neg}</td> : null}

            </tr>
          )
        })}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default RequestTable
