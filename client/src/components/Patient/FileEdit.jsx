import React, { useState } from 'react';
import axios from 'axios';
import Charts from './Charts';
import { useNavigate } from "react-router-dom"
import './FileEdit.css';


function FileEdit(props) {

  const navigate = useNavigate()
  const [change, setChange] = useState(true);
  const [object, setObject] = useState(props.obj123);
  const [updatedValues, setUpdatedValues] = useState({});

  const handleInputChange = (key, value) => {
    setUpdatedValues({ ...updatedValues, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedObject = { ...object, ...updatedValues };

    // Get current date and time in Indian time zone
    const currentDate = new Date();
    const options = { timeZone: 'Asia/Kolkata', hour12: true };
    const formattedDate = currentDate.toLocaleString('en-IN', options);

    // Extract date and time components and combine them
    const datePart = formattedDate.substring(0, 10);
    const timePart = formattedDate.substring(11, 19);
    const formattedDateTime = `${datePart} ${timePart}`;

    // Combine current date and time with the updated object
    const finalObject = {
      data: { ...updatedObject, 'login_date': formattedDateTime },
      username: props.name
    };

    axios.post('http://localhost:4000/patient/submitrecord', finalObject)
      .then(response => {
        navigate('/patient/login', {replace :true , state: { name: props.name } });
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  };

  return (
        <div className="Editcontainer">
          <div className="Editformcontainer">
            <h2>Object Editor</h2>
            <form onSubmit={handleSubmit}>
              {/* Render each key-value pair as a label and an input field */}
              {Object.entries(object).map(([key, value]) => (
                <div key={key} className="Editinputgroup">
                  <label htmlFor={key}>{key}</label>
                  <input
                    type="text"
                    id={key}
                    value={updatedValues[key] || value}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                  />
                </div>
              ))}
              <button type="submit">Submit</button>
            
            </form>
            <button onClick={() => navigate('/patient/login', {replace:true, state: { name: props.name } })}>Back</button>

          </div>
        </div>
  );
}

export default FileEdit;
