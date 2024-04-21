import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  scales,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import faker from 'faker';
import { COLORS, MONTHS } from '../../constants';
import './ChartComponent.scss';
import { Typography } from '@mui/material';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = MONTHS.map((month) => month.short);

export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: 'Received',
      borderColor: COLORS.line_graph,
      borderWidth: 2,
      fill: false,
      data: [2000, 1000, 2000, 3000, 4000, 3000, 2000, 1000, 2000, 3000, 4000, 3000],
      pointRadius: 0,
      lineTension: 0.4
    },
    {
      type: 'bar' as const,
      label: 'Processed',
      backgroundColor: COLORS.bar_graph,
      borderColor: 'white',
      borderWidth: 2,
      data: [2000, 1000, 2000, 3000, 4000, 3000, 2000, 1000, 2000, 3000, 4000, 3000]
    },
  ],
};

export const options = {
  scales: {
    y: {
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 1000,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
}

export function ChartComponent() {
  return (
    <div className='chartContainer'>
      <Typography className='chartTitle'>Application's Info</Typography>
      <div className='chartDivider'></div>
      <Chart type='bar' data={data} options={options} />
      </div>
  );
}
