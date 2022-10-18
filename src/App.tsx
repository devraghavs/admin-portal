import { Box, Container } from '@mui/material';
import MiddleCharts from './components/layouts/Charts/MiddleCharts';
import Footer from './components/layouts/Footer/Footer';
import CustomHeader from './components/layouts/header/Header';
import Notifications from './components/layouts/Notification/Notification';
import BottomCards from './components/layouts/OrdersOverview/BottomCards';
import OrdersOverview from './components/layouts/OrdersOverview/OrdersOverview';
import CustomSidenav from './components/layouts/SideNavbar/SideNavbar';
import TopCards from './components/layouts/TopCards/TopCards';

function App() {
  return (
    <div style={{ backgroundColor: '#f0f2f5' }}>
      <CustomSidenav />
      <CustomHeader>
        <TopCards />
        <MiddleCharts/>
     <BottomCards/>
        <Container>
          <Box>
            {[...new Array(22)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join('\n')}
          </Box>
        </Container>
        <Footer />
      </CustomHeader>
    </div>
  );
}

export default App;
