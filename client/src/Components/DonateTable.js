import React from 'react'
import './RequestTable.css';
import { useLocation } from 'react-router-dom';
const RequestTable = ({ props }) => {

    const location = useLocation();
    var selectedOption = location.state.selectedOption
    console.log(selectedOption)
    var arr = location.state.arr;
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
                            <th>Email ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((val, key) => {
                            return (
                                <tr key={key} onClick={() => console.log('Printed')}>
                                    <td>{key+1}</td>
                                    <td>{val.name}</td>
                                    <td>{val.address}</td>
                                    <td>{val.phoneno}</td>
                                    <td>{val.email}</td>
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
