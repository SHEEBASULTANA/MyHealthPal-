import React, { useState, useEffect } from 'react';
import AreaChart from '../Charts/AreaChart';
import BarChart from '../Charts/BarChart.jsx';
import DoughnutChart from '../Charts/DoughnutChart.jsx';
import PieChart from '../Charts/PieChart.jsx';
import PolarChart from '../Charts/PolarChart.jsx';
import LineChart from '../Charts/LineChart.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './DoctorChart.css';


function DoctorChart() {
  const navigate = useNavigate();

  const location = useLocation();
  const { name,data } = location.state;

  const [rbc, setRbc] = useState([]);
  const [hct, setHct] = useState([]);
  const [wbc, setWbc] = useState([]);
  const [mcv, setMcv] = useState([]);
  const [mch, setMch] = useState([]);
  const [mchc, setMchc] = useState([]);
  const [lymphocytes, setLymphocytes] = useState([]);
  const [neutrophils, setNeutrophils] = useState([]);
  const [monocytes, setMonocytes] = useState([]);
  const [eosinophils, setEosinophils] = useState([]);
  const [basophils, setBasophils] = useState([]);
  const [rdw, setRdw] = useState([]);

  const [login, setLogin] = useState([]);
  const [hemoglobin, setHemo] = useState([]);
  const [showUpload, setShowUpload] = useState(false);
  const [showAIChatBot, setShowAIChatBot] = useState(false);
  const [noData, setNoData] = useState(false);

    //getData(); // Run once when component mounts
  useEffect(() => {
    getData(); // Run once when component mounts
  }, []);
  
  function getData() {
    axios
      .post('http://localhost:4000/patient/chart', { username: name })
      .then((response) => {
        if (response.data.data === 'no') {
          console.log('not submitted');
          setNoData(false);
        } else {
          setHemo([]);
          setLogin([]);
          setRbc([]);
          setHct([]);
          setWbc([]);
          setMcv([]);
          setMch([]);
          setMchc([]);
          setLymphocytes([]);
          setNeutrophils([]);
          setMonocytes([]);
          setEosinophils([]);
          setRdw([]);
          setBasophils([]);
          console.log('submitted');
          setNoData(true);
          setHemo(response.data.data.map((obj) => parseInt(obj['Hemoglobin'])));
          setLogin(response.data.data.map((obj) => obj['login_date']));
          setRbc(response.data.data.map((obj) => parseInt(obj['RBC'])));
          setHct(response.data.data.map((obj) => parseInt(obj['HCT'])));
          setWbc(response.data.data.map((obj) => parseInt(obj['WBC'])));
          setMcv(response.data.data.map((obj) => parseInt(obj['MCV'])));
          setMch(response.data.data.map((obj) => parseInt(obj['MCH'])));
          setMchc(response.data.data.map((obj) => parseInt(obj['MCHC'])));
          setLymphocytes(response.data.data.map((obj) => parseInt(obj['Lymphocytes'])));
          setNeutrophils(response.data.data.map((obj) => parseInt(obj['Neutrophils'])));
          setMonocytes(response.data.data.map((obj) => parseInt(obj['Monocytes'])));
          setEosinophils(response.data.data.map((obj) => parseInt(obj['Eosinophils'])));
          setRdw(response.data.data.map((obj) => parseInt(obj['RDW'])));
          setBasophils(response.data.data.map((obj) => parseInt(obj['Basophils'])));
        }
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  }

  return (
    <div>
      <div className="doctorcharttopnavbar">
        <button onClick={() => navigate('/doctor/login', { replace: true, state: { data: data } })}>Back</button>
        <button onClick={() => navigate('/doctor/login/fileupload', { replace: true, state: { name: name, data: data } })}>Submit Record</button>
      </div>
      {noData ? (
        <div className="main-chart-div" >
        <div className='sub-chart-div'>
          <DoughnutChart label={"HEMOGLOBIN"} data={hemoglobin} labels={login} />
        </div>
        <div className='sub-chart-div'>
          <PieChart data={rbc} label={'RBC'} labels={login} />
        </div>
        <div className='sub-chart-div'>
          <PolarChart data={hct} label={'HCT'} labels={login} />
        </div>
        <div className='sub-chart-div'>
          <PieChart data={wbc} label={'WBC'} labels={login} />
        </div>
        <div className='sub-chart-div'>
          <DoughnutChart data={mcv} label={'MCV'} labels={login} />
        </div>
        <div className='sub-chart-div'>
          <PolarChart data={mch} label={'MCH'} labels={login} />
        </div>
        <div className='sub-chart-div'>
          <PieChart
            data={lymphocytes}
            label={'LYMPHOCYTES'}
            labels={login}
          />
      </div>
      <div className='sub-chart-div'>
          <DoughnutChart
            data={mchc}
            label={'MCH'}
            labels={login}
          />
      </div>
        <div className='sub-chart-div'>
          <PolarChart data={neutrophils} label={'NEUTROPHILS'} labels={login} />
        </div>
        <div className='sub-chart-div'>
          <PieChart data={monocytes} label={'MONOCYTES'} labels={login} />
        </div>
        <div className='sub-chart-div'>
          <DoughnutChart data={eosinophils} label={'EOSINOPHILS'} labels={login} />
        </div>
        <div className='sub-chart-div'>
          <PolarChart data={basophils} label={'BASOPHILS'} labels={login} />
        </div>
        <div className='sub-chart-div'>
          <PieChart data={rdw} label={'RDW'} labels={login} />
        </div>
      </div>
      ) : (
        <h1>Submit your records</h1>
      )}
      
    </div>
  );
}

export default DoctorChart;
