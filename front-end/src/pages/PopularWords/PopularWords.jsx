import React from 'react';
import './PopularWords.css';
import DoughnutChart from '../../components/Charts/DoughnutChart/DoughnutChart'
import VerticalBarCharts from '../../components/Charts/VerticalBarChart/VerticalBarChart'

const PopularWords = () => {
  return (
    <div className='PopularWords'>
      Popular Words
      <DoughnutChart/>
      <VerticalBarChart/>
    </div>
  );
};

export default PopularWords;