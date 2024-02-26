import React from 'react';
import { Bar, Line, Pie, Doughnut, PolarArea, Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Filler, Legend } from 'chart.js';

ChartJS.register(CategoryScale, ArcElement, LinearScale, PointElement, LineElement, BarElement, RadialLinearScale, Title, Tooltip, Filler, Legend);


function BarChart(props) {

  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
         
      },
    },
  };

  const labels = props.labels;

  const data = {
    labels,
    datasets: [
      {
        label: props.label1,
        data: props.data1,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  


  return (
    <div >
    <h2>{props.label1 +" " + props.label2}</h2>
    <Bar options={options} data={data} />
    </div>
  )
}

export default BarChart