import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import './Main.css'
function Main() {
  return (
    <div className="main-div-1">
      <div class="home-main-div">

<div class="content">
  <h2>MyHealthPal</h2>
  <h2>MyHealthPal</h2>
</div>


<div className="first-heading">
  
  <span></span>
<span>Welcome</span>
<span>to</span>
<span>MyHealthPal</span>
<span>At</span>
<span>MyHealthPal,</span>
<span>we</span>
<span>believe</span>
<span>in</span>
<span>the</span>
<span>power</span>
<span>of</span>
<span>collaboration</span>
<span>between</span>
<span>patients</span>
<span>and</span>
<span>doctors.</span>  
<span>Whether</span>
<span>you're</span>
<span>a</span>
<span>patient</span>
<span>seeking</span>
<span>support</span>
<span>or</span>
<span>a</span>
<span>doctor</span>
<span>providing</span>
<span>guidance,</span>
<span>MyHealthPal</span>
<span>is</span>
<span>your</span>
<span>trusted</span>
<span>companion</span>
<span>every</span>
<span>step</span>
<span>of</span>
<span>the</span>
<span>way.</span>
<span>Let's</span>
<span>Get</span>
<span>Started</span>
<span>-</span>
<span>Are</span>
<span>You:</span>
</div>

</div>
      <div className="main-div-11">
        <Link className="main-div-link first-heading" to="/doctor" replace>Doctor </Link>
        <Link  className="main-div-link first-heading" to="/patient" replace>Patient</Link>
      </div> 
  </div>
  );
}

export default Main;