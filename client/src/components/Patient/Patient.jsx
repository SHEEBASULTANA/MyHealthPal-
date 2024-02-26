import React, { useState } from 'react';
import './Patient.css';
import axios from 'axios';
import Chart from './Charts';
import { useNavigate } from "react-router-dom"
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";


function Patient() {
  const navigate = useNavigate()

  const [usern1, setUsern1] = useState("");
  const [usern, setUsern] = useState("");
  const [passd, setPassd] = useState("");
  const [cpass, setCpass] = useState("");
  const [dname, setDname] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [passSuccess, setPassSuccess] = useState(true);
  const [signinSuccess, setSigninSuccess] = useState(true);
  const [activeTab, setActiveTab] = useState("signin");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  function SignUp() {
    if (cpass === passd) {
      const postData = {
        username: usern,
        password: passd,
        doctorname: dname
      };
      axios.post('http://localhost:4000/patient/signup', postData)
        .then(response => {
          if (response.data.data === "yes") {
            setSignupSuccess(true);
          }
        })
        .catch(error => {
          console.error('Error sending data:', error);
        });

      // Clear the input field after adding the message
      setUsern("");
      setPassd("");
      setCpass("");
      setDname("");
    }
    else {
      setPassSuccess(false);
    }
  }

  function SignIn() {
    const postData = {
      username: usern,
      password: passd,
    };
    axios.post('http://localhost:4000/patient/signin', postData)
      .then(response => {
        if (response.data.data === "yes") {
          navigate('/patient/login',{ replace: true , state: { name: usern1 } });
        }
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });

    // Clear the input field after adding the message
    setUsern("");
    setPassd("");
  }

  return (
        <div className="main-div">
          <div className="login-wrap">
            <div className="login-html">
              <input id="tab-1" type="radio" name="tab" className="sign-in" checked={activeTab === "signin"} onChange={() => handleTabChange("signin")} /><label htmlFor="tab-1" className="tab">Sign In</label>
              <input id="tab-2" type="radio" name="tab" className="sign-up" checked={activeTab === "signup"} onChange={() => handleTabChange("signup")} /><label htmlFor="tab-2" className="tab">Sign Up</label>
              <div className="login-form">
                <div className={activeTab === "signin" ? "sign-in-htm" : "sign-in-htm hidden"}>
                  <div className="group">
                    <label htmlFor="user" className="label">Username</label>
                    <input value={usern} onChange={(e) => {setUsern(e.target.value); setUsern1(e.target.value)}} type="text" className="input" />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">Password</label>
                    <input value={passd} onChange={(e) => setPassd(e.target.value)} type="password" className="input" data-type="password" />
                  </div>
                  <div className="group">
                    
                    <button className="button" onClick={SignIn} >Sign In</button>
                    <br />
                    <button className="button" onClick={() => navigate('/', {replace:true})}>Home</button>

                  </div>
                  <div className="hr"></div>
                </div>
                <div className={activeTab === "signup" ? "sign-up-htm" : "sign-up-htm hidden"}>
                  <div className="group">
                    <label htmlFor="user" className="label">Username</label>
                    <input value={usern} onChange={(e) => setUsern(e.target.value)} type="text" className="input" />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">Password</label>
                    <input value={passd} onChange={(e) => setPassd(e.target.value)} type="password" className="input" data-type="password" />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">Repeat Password</label>
                    <input value={cpass} onChange={(e) => setCpass(e.target.value)} type="password" className="input" data-type="password" />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">Doctor Username</label>
                    <input value={dname} onChange={(e) => setDname(e.target.value)} type="text" className="input" />
                  </div>
                  <div className="group">
                    <input onClick={SignUp} type="submit" className="button" value="Sign Up" />
                  </div>
                  <div className="foot-lnk">
                    <label>{signupSuccess ? "Registered Successfully Signin Now" : null}</label>
                  </div>
                  <div className="foot-lnk">
                    <label>{passSuccess ? null : "Passwords Didn't Match"}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Patient;
