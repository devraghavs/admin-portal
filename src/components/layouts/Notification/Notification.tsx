import { useState } from 'react';

// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Box, Typography, Button, Snackbar, Alert } from '@mui/material';

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDAlert from "components/MDAlert";
// import MDButton from "components/MDButton";
// import MDSnackbar from "components/MDSnackbar";

// // Material Dashboard 2 React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";

const Notifications = () => {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name: string) => (
    <Typography variant="body2" color="white">
      A simple {name} alert with{' '}
      <Typography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </Typography>
      . Give it a click if you like.
    </Typography>
  );

  const renderSuccessSB = (
    <Snackbar
      color="success"
      title="Material Dashboard"
      message="Hello, world! This is a notification message"
      open={successSB}
      onClose={closeSuccessSB}
      autoHideDuration={6000}
    />
  );

  const renderInfoSB = (
    <Snackbar
      title="Material Dashboard"
      message="Hello, world! This is a notification message"
      open={infoSB}
      onClose={closeInfoSB}
      autoHideDuration={6000}
    />
  );

  const renderWarningSB = (
    <Snackbar
      color="warning"
      title="Material Dashboard"
      message="Hello, world! This is a notification message"
      open={warningSB}
      onClose={closeWarningSB}
      autoHideDuration={6000}
    />
  );

  const renderErrorSB = (
    <Snackbar
      color="error"
      title="Material Dashboard"
      message="Hello, world! This is a notification message"
      autoHideDuration={6000}
      open={errorSB}
      onClose={closeErrorSB}
    />
  );

  return (
    <div>
      {/* <DashboardLayout> */}
      {/* <DashboardNavbar /> */}
      <Box mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <Box p={2}>
                <Typography variant="h5">Alerts</Typography>
              </Box>
              <Box pt={2} px={2}>
                <Alert severity="error">{alertContent('primary')}</Alert>
                <Alert severity="success">{alertContent('success')}</Alert>
                <Alert severity="error">{alertContent('error')}</Alert>
                <Alert severity="warning">{alertContent('warning')}</Alert>
                <Alert severity="info">{alertContent('info')}</Alert>
                <Alert severity="success">{alertContent('light')}</Alert>
                <Alert severity="error">{alertContent('dark')}</Alert>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card>
              <Box p={2} lineHeight={0}>
                <Typography variant="h5">Notifications</Typography>
                <Typography variant="button" color="text" fontWeight="regular">
                  Notifications on this page use Toasts from Bootstrap. Read more details here.
                </Typography>
              </Box>
              <Box p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Button variant="contained" color="success" onClick={openSuccessSB} fullWidth>
                      success notification
                    </Button>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Button variant="contained" color="info" onClick={openInfoSB} fullWidth>
                      info notification
                    </Button>
                    {renderInfoSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Button variant="contained" color="warning" onClick={openWarningSB} fullWidth>
                      warning notification
                    </Button>
                    {renderWarningSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Button variant="contained" color="error" onClick={openErrorSB} fullWidth>
                      error notification
                    </Button>
                    {renderErrorSB}
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
      {/* </DashboardLayout> */}
    </div>
  );
};

export default Notifications;
