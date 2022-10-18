import { Line } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Box, Typography } from '@mui/material';
import styles from './LineChart.module.css';

interface LineChart {
  color?: string;
  title?: string;
  description?: string | JSX.Element;
  date?: string;
  chart?: LineChartProps;
  isSales?:boolean;
}

interface LineChartProps {
  datasets?: any;
  labels?: any;
}
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const ReportsLineChart = ({
  color,
  title,
  description,
  date,
  chart = { datasets: [], labels: [] },
  isSales=false
}: LineChart) => {
  function configs(labels: any, datasets: any) {
    return {
      data: {
        labels,
        datasets: [
          {
            label: datasets.label,
            tension: 0,
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'rgba(255, 255, 255, .8)',
            borderColor: 'rgba(255, 255, 255, .8)',
            borderWidth: 4,
            backgroundColor: 'transparent',
            fill: true,
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
              display: true,
              color: '#f8f9fa',
              padding: 10,
              font: {
                size: 14,
                lineHeight: 2,
              },
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5],
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
        },
      },
    };
  }
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  return (
    <Card className={styles.wrapper}>
      <Box padding="1rem">
        <Box className={`${styles.chart} ${isSales?styles.lineChartGreen:styles.lineChartDark}`}>
          <Line data={data} options={options} />
        </Box>
        <Box pt={3} pb={1} px={1}>
          <Typography className={styles.headings} variant="h6" textTransform="capitalize">
            {title}
          </Typography>
          <Typography className={styles.description} component="div">
            {description}
          </Typography>
          <Divider className={styles.divider} />
          <Box display="flex" alignItems="center">
            <Typography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              <Icon fontSize="small">schedule</Icon>
            </Typography>
            <Typography className={styles.description}>{date}</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ReportsLineChart;
