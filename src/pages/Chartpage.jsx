
import React from 'react';
import CandlestickChart from '../components/CandlestickChart';

const ChartPage = () => {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Historical Data Chart</h1>
      <CandlestickChart />
    </div>
  );
};

export default ChartPage;
