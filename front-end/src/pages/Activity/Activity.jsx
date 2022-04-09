import React from 'react';
import './Activity.css';
import DoughnutChart from '../../components/Charts/DoughnutChart/DoughnutChart';
import VerticalBarCharts from '../../components/Charts/VerticalBarChart/VerticalBarChart';
import LineChart from '../../components/Charts/LineChart/LineChart';

const Activity = () => {
  return (
    <div className='Activity'>
      Activity
      <DoughnutChart/>
      <VerticalBarCharts/>
      <LineChart/>
    </div>
  );
};

export default Activity;