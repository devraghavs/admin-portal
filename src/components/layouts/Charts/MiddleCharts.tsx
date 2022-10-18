import { Grid, Box } from '@mui/material';
import ReportsBarChart from '../../widgets/BarChart/BarChart';
import ReportsLineChart from '../../widgets/LineChart/LineChart';
// import reportsBarChartData from "../../widgets/BarChart/reportsBarChartData";

const MiddleCharts = () => {
  const barData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: { label: 'Sales', data: [50, 20, 10, 22, 50, 10, 40] },
  };
  const lineSalesData = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: { label: 'Mobile apps', data: [50, 40, 300, 320, 500, 350, 200, 230, 500] },
  };

  const lineTasksData = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: { label: 'Desktop apps', data: [50, 40, 300, 220, 500, 250, 400, 230, 500] },
  };
  return (
    <Box mt={4.5}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Box mb={3}>
            <ReportsBarChart
              color="black"
              title="website views"
              description="Last Campaign Performance"
              date="campaign sent 2 days ago"
              chart={barData}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box mb={3}>
            <ReportsLineChart
              color="#4caf50"
              title="daily sales"
              description={
                <>
                  (<strong>+15%</strong>) increase in today sales.
                </>
              }
              date="updated 4 min ago"
              chart={lineSalesData}
              isSales={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
              <Box mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={lineTasksData}
                />
              </Box>
            </Grid>
      </Grid>
    </Box>
  );
};

export default MiddleCharts;
