
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const CandlestickChart = () => {
  const [series, setSeries] = useState([]);
  const [interval, setInterval] = useState('day')
  const [chartType, setChartType] = useState('candlestick')

  const fetchData = async (interval) => {

    let endpoint;
    let params = {
      fsym: 'BTC',
      tsym: 'USD',
      limit: 30,
    };

    switch (interval) {
      case 'hour':
        endpoint = 'https://min-api.cryptocompare.com/data/v2/histohour';
        break;
      case 'minute':
        endpoint = 'https://min-api.cryptocompare.com/data/v2/histominute';
        break;
      case 'day':
      default:
        endpoint = 'https://min-api.cryptocompare.com/data/v2/histoday';
        break;
    }

    try {
      const response = await axios.get(endpoint, { params });
      const data = response.data.Data.Data.map(item => ({
        x: new Date(item.time * 1000),
        y: [item.open, item.high, item.low, item.close]
      }));
      setSeries([{ data }]);
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    fetchData(interval);
  }, [interval]);

  const handleIntervalChange = (event) => {
    setInterval(event.target.value);
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value)
  };


 // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://min-api.cryptocompare.com/data/v2/histohour', {
  //         params: {
  //           fsym: 'BTC',
  //           tsym: 'USD',
  //           limit: 30
  //         }
  //       });
  //       const data = response.data.Data.Data.map(item => ({
  //         x: new Date(item.time * 1000),
  //         y: [item.open, item.high, item.low, item.close]
  //       }));
  //       setSeries([{ data }]);
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   };

   //  fetchData();
//   }, []);


  const options = {
    chart: {
      type: chartType,
      height: 350,
      toolbar: {
        show: true
      }
    },
    title: {
      text: 'Data Chart',
      align: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  };

  return (
    <div className='p-4' >
      <div className="flex justify-center mb-4">
        <label className="mr-2">Select Interval:</label>
        <select value={interval} onChange={handleIntervalChange} className="bg-gray-800 text-white p-2 rounded-lg shadow-md">
          <option value="day">Day</option>
          <option value="hour">Hour</option>
          <option value="minute">Minute</option>
        </select>
        <label className="mr-2">Select Chart Type:</label>
        <select value={chartType} onChange={handleChartTypeChange} className="bg-gray-800 text-white p-2 rounded-lg shadow-md">
          <option value="candlestick">Candlestick</option>
          <option value="line">Line</option>
          <option value="bar">Bar</option>
          <option value="area">Area</option>
        </select>
      </div>
      <Chart options={options} series={series} type={chartType} height={350} />
    </div>
  );
};

export default CandlestickChart;
