import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const data = {
  datasets: [
    {
      label: 'Red dataset',
      data: {
        x: { min: -100, max: 100 },
        y: { min: -100, max: 100 },
        r: { min: -5, max: 5 },
},
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const BubbleChart = () => {
  return (
    <div>
      <Bubble options={options} data={data} />;
    </div>
  );
};

export default BubbleChart;