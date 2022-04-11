// import React from 'react';
// import './LineChart.css';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
//
//
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );
//
// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

// const labels = response.map((item) => {
//   return item['label'];
// })

// const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [-1000,1000,200],
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//   ],
// };
//
// const LineChart = props => {
//
//   return (
//     <div>
//       <Line options={options} data={data} />;
//     </div>
//   );
// };
//
// export default LineChart;