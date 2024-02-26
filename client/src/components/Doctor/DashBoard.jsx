import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import './Dashboard.css'; // Import your CSS file for styling

function DashBoard() {
    const navigate = useNavigate();
    const location = useLocation();
    const { data } = location.state;
  
    const rowCount = Math.ceil(data.length / 3); // Calculate the number of rows
    const lastColumnIndex = data.length % 3 === 0 ? 3 : data.length % 3; // Calculate the index of the last column
    const logoutRow = rowCount + 1; // Place the logout button in the next row
    const logoutColumn = lastColumnIndex === 3 ? 1 : lastColumnIndex + 1; // Place the logout button in the next column or first column of the next row
  return (
    <div className="doctordashboardcontainer">
         {data.map((value, index) => (
            <div key={index} className="indoctorpatientcontainer" onClick={() => navigate('/doctor/login/view', { replace: true, state: { name: value, data: data } })}>
              <h3>{value}</h3>
              {/* Add additional patient details here if needed */}
            </div>
          ))}
          <div style={{backgroundColor:"#1161ee", color:"white"}} className="indoctorpatientcontainer" onClick={()=>navigate('/', {replace :true })}><h3>Logout</h3></div>

    </div>
  )
}

export default DashBoard