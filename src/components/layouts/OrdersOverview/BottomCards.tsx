import { Box, Grid } from "@mui/material";
import OrdersOverview from "./OrdersOverview";

const BottomCards = ()=>{
    return(
        <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
           
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrdersOverview />
          </Grid>
        </Grid>
      </Box>

    );

}


export default BottomCards;