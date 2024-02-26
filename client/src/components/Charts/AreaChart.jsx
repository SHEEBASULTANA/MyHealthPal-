import React from 'react';
import { Bar, Line, Pie, Doughnut, PolarArea, Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Filler, Legend } from 'chart.js';

ChartJS.register(CategoryScale, ArcElement, LinearScale, PointElement, LineElement, BarElement, RadialLinearScale, Title, Tooltip, Filler, Legend);

function AreaChart(props){
  const labels = props.labels;

const data1 = {
    labels,
    datasets: [
      {
        fill: true,
        label: props.label,
        data: props.data,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const options1 = {
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

  return (
    <div>
      <h1>{props.label}</h1>
      <Line options={options1} data={data1} />
</div> 
  );
}

export default AreaChart;