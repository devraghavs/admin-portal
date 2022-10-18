import { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
// import configs from "./configs";
import { Box, Typography } from '@mui/material';
import styles from './BarChart.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

interface BarChart {
  color?: string;
  title?: string;
  description?: string;
  date?: string;
  chart?: BarChartProps;
}

interface BarChartProps {
  datasets?: any;
  labels?: any;
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const ReportsBarChart = ({
  color,
  title,
  description,
  date,
  chart = { datasets: [], labels: [] },
}: BarChart) => {
  function configs(labels: any, datasets: any) {
    return {
      data: {
        labels,
        datasets: [
          {
            label: datasets.label,
            tension: 0.4,
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            data: datasets.data,
            maxBarThickness: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
              color: 'rgba(255, 255, 255, .2)',
            },
            ticks: {
              display: true,
              color: '#f8f9fa',
              padding: 10,
              font: {
                size: 14,
                lineHeight: 2,
              },
            },
          },
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
              color: 'rgba(255, 255, 255, .2)',
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 500,
              beginAtZero: true,
              padding: 10,
              color: '#fff',
              font: {
                size: 14,
                lineHeight: 2,
              },
            },
          },
        },
      },
    };
  }
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  return (
    <Card className={styles.wrapper}>
      <Box padding="1rem">
        <Box className={styles.barChart}>
          <Bar data={data} options={options} />
        </Box>
        <Box pt={3} pb={1} px={1}>
          <Typography className={styles.headings} variant="h6">
            {title}
          </Typography>
          <Typography className={styles.description} component="div" variant="button">
            {description}
          </Typography>
          <Divider className={styles.divider} />
          <Box display="flex" alignItems="center">
            <Typography lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              <Icon fontSize="small">schedule</Icon>
            </Typography>
            <Typography className={styles.description}>{date}</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ReportsBarChart;
