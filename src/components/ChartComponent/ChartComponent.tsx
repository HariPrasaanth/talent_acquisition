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
        display: false, // Hide grid lines
      },
      ticks: {
        stepSize: 1000, // Set the interval between ticks to 1000 (1 unit = 1000)
      },
    },
    x: {
      grid: {
        display: false, // Hide grid lines
      },
    },
  },
}

export function ChartComponent() {
  return <Chart type='bar' data={data} options={options} />;
}
