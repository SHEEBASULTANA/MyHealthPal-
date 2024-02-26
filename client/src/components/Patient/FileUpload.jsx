import React, { useState } from 'react';
import FileEdit from './FileEdit';
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import './FileUpload.css';

function FileUpload(props) {
  const navigate = useNavigate()

  const location = useLocation();
  const { name } = location.state;

  const [file, setFile] = useState(null);
  const [data, setData] = useState(true);
  const [obj, setObj] = useState({});
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = () => {
    if (!file) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:4000/patient/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.data);
      setObj(data.data);
      setData(false);
      setFile(null); // Clear the file state
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while uploading the file.');
    });
  };

  return (
    <div className="file-upload-background" style={{ backgroundImage: 'url(C:\Users\HP\Downloads\WhatsApp Image 2024-02-22 at 9.08.55 AM.jpeg)' }}>
      {data ?
        <div className="container">
          <div className="card">
            <h3>Upload Files</h3>
            <div className="drop_box">
              <header>
                <h4>Select Image File here</h4>
              </header>
              <div className="button-row">
                <input type="file" id="fileInput" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                <label htmlFor="fileInput" className="browse-btn">
  {file ? file.name : "Select File"} {/* Display filename if file is selected, otherwise display "Select File" */}
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 6l-6 6h12z"/>
  </svg>
</label>


                <button className="btn" style={{ 
                  marginRight: '10px', 
                  /*backgroundColor: 'blue',*/ 
                  color: 'white',
                  cursor: 'pointer',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                }} 
                onMouseEnter={() => setIsSubmitHovered(true)}
                onMouseLeave={() => setIsSubmitHovered(false)}
                onClick={uploadFile}>Submit</button>
              </div>
              <button className="btn back-btn" onClick={() => navigate('/patient/login', {replace:true, state: { name: name } })}>Back</button>
            </div>
          </div>
        </div>
      :<FileEdit name={name} obj123={obj}/>}
    </div>
  );

}



export default FileUpload;
