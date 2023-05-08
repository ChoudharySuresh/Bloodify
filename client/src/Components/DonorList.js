import React, { useState } from "react";
import './DonorList.css';
import axios from "axios";
import { useLocation } from 'react-router-dom';

const DonorList = ({ props }) => {

  const location = useLocation();
  const donors = location.state.donars;
  const [currentPage, setCurrentPage] = useState(1);
  const [donorsPerPage] = useState(10);

  // Calculate index of last donor of current page
  const indexOfLastDonor = currentPage * donorsPerPage;

  // Calculate index of first donor of current page
  const indexOfFirstDonor = indexOfLastDonor - donorsPerPage;

  // Get current page of donors
  const currentDonors = donors.slice(indexOfFirstDonor, indexOfLastDonor);

  // Calculate the serial count for current page
  const currentSerialCount = (currentPage - 1) * donorsPerPage;

  // Change page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="donor-list-table-wrapper">
        <h2 className="donor-list-table-heading">List Of Donors</h2>
        <div className="donor-list-table-container">
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
              {currentDonors.map((donor, index) => (
                <tr key={index}>
                  <td>{currentSerialCount + index + 1}</td>
                  <td>{donor.name}</td>
                  <td>{donor.address}</td>
                  <td>{donor.bloodgroups}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: Math.ceil(donors.length / donorsPerPage) }, (_, i) => {
              if (i >= currentPage - 1 && i <= currentPage + 2) {
                return (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={currentPage === i + 1 ? 'active' : ''}
                  >
                    {i + 1}
                  </button>
                );
              }
              return null;
            })}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === Math.ceil(donors.length / donorsPerPage)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorList;
