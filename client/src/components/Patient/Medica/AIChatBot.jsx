import React, { useState } from "react";
import "./AIChatBot.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';

function AIChatBot() {

  const navigate = useNavigate()


  const [countU, setCountU] = useState([]);
  const [countStr, setCountStr] = useState("");

  const location = useLocation();
  const { name } = location.state;
 
  function addCountStr(event) {
    // Get the value of the input field
    const stringEntered = event.target.value;
    setCountStr(stringEntered); // Update countStr state
  }
  function addCountU() {
    // Get the user input from countStr state
    const userInput = "you: " + countStr;
  
    // Add the user input to countU
    setCountU([...countU, userInput]);
  
    // Save the user input separately to ensure it's not cleared before the server responds
    const userInputForServer = countStr;
   const finalObject = { txt: userInputForServer , username :name}
    axios.post('http://localhost:4000/api/data', finalObject )
      .then(response => {
        setCountU(prevCountU => [...prevCountU,"Medica : " + response.data.data]);
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  
    setCountStr("");
  }
  
  function displayUser(message, index) {
    return (
      <div
        key={index}
        style={{
          border: "2px solid black",
          margin: "10px",
          padding: "10px",
          borderRadius: "10px",
          wordWrap: "break-word", // Ensure text wraps within the div
        }}
      >
        {message}
      </div>
    );
  }

  return (
    <div className = "main-div123">
      <div style={{ height: "90%", overflowY: "auto" }}>
        {countU.map((userMessage, index) => displayUser(userMessage, index))}
      </div>
      <footer className="footer123">
          <textarea 
          className="footer-input123"
          rows ="1"
            onChange={addCountStr}
            value={countStr}
          />
          <button onClick={addCountU}>Submit</button>
          <button onClick={()=>navigate('/patient/login', {replace :true, state: { name:name } })}>Exit</button>
      </footer>
    </div>
  );
}

export default AIChatBot;
