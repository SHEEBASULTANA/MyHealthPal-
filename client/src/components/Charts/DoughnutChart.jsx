import React from 'react';
import { Bar, Line, Pie, Doughnut, PolarArea, Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Filler, Legend } from 'chart.js';

ChartJS.register(CategoryScale, ArcElement, LinearScale, PointElement, LineElement, BarElement, RadialLinearScale, Title, Tooltip, Filler, Legend);


  

function DoughnutChart(props) {

  const data4 = {
    labels: props.labels,
    datasets: [
      {
        label: props.label,
        data: props.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  
  return (
    <div><h2>{props.label}</h2>
    <Doughnut data={data4} /></div>
  )
}

export default DoughnutChart