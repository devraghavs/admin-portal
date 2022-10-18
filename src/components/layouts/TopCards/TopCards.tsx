import { Box, Grid } from '@mui/material';
import StaticCard from '../../widgets/StaticCards/StaticCards';

const TopCards = () => {
  return (
    <Box py={1} mt={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Box mb={1.5}>
            <StaticCard
            color='#344767'
              icon="weekend"
              title="Bookings"
              count={281}
              percentage={{
                color: 'success',
                amount: '+55%',
                label: 'than lask week',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box mb={1.5}>
            <StaticCard
            color='#1a73e8'
              icon="leaderboard"
              title="Today's Users"
              count="2,300"
              percentage={{
                color: 'success',
                amount: '+3%',
                label: 'than last month',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box mb={0.5}>
            <StaticCard
              color="#4caf50"
              icon="store"
              title="Revenue"
              count="34k"
              percentage={{
                color: 'success',
                amount: '+1%',
                label: 'than yesterday',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box mb={0.5}>
            <StaticCard
              color="#e91e63"
              icon="person_add"
              title="Followers"
              count="+91"
              percentage={{
                color: 'success',
                amount: '',
                label: 'Just updated',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopCards;
