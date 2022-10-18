import { Box, Card, Icon, Typography } from "@mui/material";
import TimeLineItem from "../../widgets/TimeLine/TimeLine";
import Timeline from '@mui/lab/Timeline';
import styles from './OrdersOverview.module.css'
const OrdersOverview = () => {
  return (
    <Card className={styles.wrapper}>
    <Box pt={3} px={3}>
      <Typography className={styles.heading}>
        Orders overview
      </Typography>
      <Box mt={0} mb={2}>
        <Typography className={styles.text}>
          <Typography >
            <Icon fontSize="small" sx={{ color:'#4caf50'}}>arrow_upward</Icon>
          </Typography>
          &nbsp;
          <Typography variant="button" color="text" fontWeight="medium">
            24% 
          </Typography> &nbsp;
           this month
        </Typography>
      </Box>
    </Box>
    <Box >
     <Timeline><TimeLineItem
        color="success"
        icon="notifications"
        title="$2400, Design changes"
        dateTime="22 DEC 7:20 PM"
      />
      <TimeLineItem
        color="error"
        icon="inventory_2"
        title="New order #1832412"
        dateTime="21 DEC 11 PM"
      />
      <TimeLineItem
        color="info"
        icon="shopping_cart"
        title="Server payments for April"
        dateTime="21 DEC 9:34 PM"
      />
      <TimeLineItem
        color="warning"
        icon="payment"
        title="New card added for order #4395133"
        dateTime="20 DEC 2:20 AM"
      />
      <TimeLineItem
        color="secondary"
        icon="vpn_key"
        title="New card added for order #4395133"
        dateTime="18 DEC 4:54 AM"
        connector={false}
      />
      </Timeline> 
    </Box>
  </Card>
  );
};
export default OrdersOverview;
