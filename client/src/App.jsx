import React, { useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Doctor from "./components/Doctor/Doctor";
import Patient from "./components/Patient/Patient";
import Charts from "./components/Patient/Charts";
import FileUpload from "./components/Patient/FileUpload";
import AIChatBot from "./components/Patient/Medica/AIChatBot";
import DashBoard from "./components/Doctor/DashBoard";
import DoctorChart from "./components/Doctor/DoctorChart";
import DoctorUpload from "./components/Doctor/upload/DoctorUpload";
function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the doctor page */}
        <Route path="/" element={<Main />} />
        <Route path="/doctor" element={<Doctor />} />
        {/* Route for the patient page */}
        <Route path="/patient" element={<Patient />} />
        <Route path="/patient/login" element={<Charts />} />
        <Route path="/patient/login/fileupload" element={<FileUpload />} />
        <Route path="/patient/login/ask" element={<AIChatBot />} />
        <Route path="/doctor/login" element={<DashBoard />} />
        <Route path="/doctor/login/view" element={<DoctorChart />} />
        <Route path="/doctor/login/fileupload" element={<DoctorUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
