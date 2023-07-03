import React from 'react';
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);
export const LineChart = () => {
  const labels = getLastYearMonth();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Yearly Views',
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: 'Views',
        data: [1, 2, 3, 4],
        borderColor: 'rgba(107,70,192,0.5)',
        backgroundColor: '#6b46c1',
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export const DoughnutChat = () => {
  const labels = ['Subscribed', 'Not Subscribed'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Views',
        data: [3, 20],
        borderColor: ['rgb(62,12,171)', 'rgb(214,42,129)'],
        backgroundColor: ['rgba(62,12,171,0.3)', 'rgba(214,42,129,0.3)'],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
};

function getLastYearMonth() {
    // const labels = [];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const currentMonth = new Date().getMonth();
    // const currentMonth = 8
    const remainingMonths = months.slice(currentMonth).concat(months.slice(0, currentMonth));
  
    // for (let i = 0; i < remainingMonths.length; i++) {
    //   labels.push(remainingMonths[i]);
    // }
  
    return remainingMonths;
  }
