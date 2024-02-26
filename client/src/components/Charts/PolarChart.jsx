import React from 'react';
import { Bar, Line, Pie, Doughnut, PolarArea, Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Filler, Legend } from 'chart.js';

ChartJS.register(CategoryScale, ArcElement, LinearScale, PointElement, LineElement, BarElement, RadialLinearScale, Title, Tooltip, Filler, Legend);


  

function PolarChart(props) {

  const data5 = {
    labels: props.labels,
    datasets: [
      {
        label: props.label,
        data: props.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };

  
  return (
    <div><h2>{props.label}</h2>
    <PolarArea data={data5} /></div>
  )
}

export default PolarChart