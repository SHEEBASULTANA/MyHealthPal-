import React from 'react';
import { Bar, Line, Pie, Doughnut, PolarArea, Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Filler, Legend } from 'chart.js';

ChartJS.register(CategoryScale, ArcElement, LinearScale, PointElement, LineElement, BarElement, RadialLinearScale, Title, Tooltip, Filler, Legend);


  

function LineChart(props) {

  const labels = props.labels;

  const options2 = {
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
    
    const data2 = {
      labels,
      datasets: [
        {
          label: props.label1,
          data: props.data1,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: props.label2,
          data: props.data2,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };

  return (
    <div><h2>{props.label}</h2>
    <Line options={options2} data={data2} /></div>
  )
}

export default LineChart;