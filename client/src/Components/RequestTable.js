import React from 'react'
import './RequestTable.css';

const RequestTable = () => {
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
                <th>Blood Group</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Suresh choudhary Blood Bank</td>
                <td>Hadapsar , pune</td>
                <td>A+</td>
            </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default RequestTable
