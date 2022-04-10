import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const VerticalBarChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const response = [
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    },
    {
      "label": "Украина",
      "count": 25
    }
  ]

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [-1000,1000],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className='Bar'>
      <Bar options={options} data={data} />;
    </div>
  );
};

export default VerticalBarChart;