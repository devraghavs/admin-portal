import { useEffect } from 'react';
// import { useLocation, NavLink } from 'react-router-dom';

import {
  Box,
  List,
  Divider,
  Icon,
  Link,
  Typography,
  Drawer,
  IconButton,
  ListItem,
  Button,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemText from '@mui/material/ListItemText';
import styles from './SideNavbar.module.css';
import React from 'react';

const CustomSidenav = () => {
  const [open, setOpen] = React.useState(true);

  const BrandName = {
    Dashboard: 'dashboard',
    Tables: 'table_view',
    Billing: 'receipt_long',
    RTL: 'format_textdirection_r_to_l',
    Notifications: 'notifications',
    Profile: 'person',
    SignIn: 'login',
    SignUp: 'assignment',
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      sx={{
        position: 'absolute',
        height: '90%',
        marginBottom: '10px',
        boxSizing: 'border-box',
      }}
      className={styles.drawer}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <div className={styles.container}>
        <Box className={styles.DrawerClose}>
          <IconButton onClick={handleDrawerClose}>
            {open ? <ChevronLeftIcon className={styles.color} /> : <ChevronRightIcon />}
          </IconButton>
        </Box>
        <Box pt={2} pb={3} px={2} display="flex" alignItems="center" textAlign="center">
          <Link href="/">
            <Icon className={styles.color} fontSize="small">
              dashboard
            </Icon>
          </Link>
          <Box px={1}>
            <Typography component="h6" variant="button" fontWeight="medium">
              Material Dasboard 2
            </Typography>
          </Box>
        </Box>
        <Divider variant="middle" color="gray" />
        <Divider />
        <List>
          {Object.entries(BrandName).map(([k, v]) => (
            <ListItem className={`${styles.ListItem} ${styles.color}`} key={k} disablePadding>
              <Box pt={1} pb={1} px={4} display="flex" alignItems="center" textAlign="center">
                <Link
                  className={`${styles.ListLink} ${styles.color}`}
                  target="_blank"
                  rel="noreferrer"
                  href="/"
                >
                  {<Icon fontSize="small">{v}</Icon>}
                  <ListItemText className={`${styles.ListItemText} ${styles.color}`} primary={k} />
                </Link>
              </Box>
            </ListItem>
          ))}
        </List>
        <Box p={2} mt="auto">
          <Button
            component="a"
            href="https://www.creative-tim.com/product/material-dashboard-pro-react"
            target="_blank"
            rel="noreferrer"
            variant="contained"
            className={styles.UpgradeButton}
            fullWidth
          >
            upgrade to pro
          </Button>
        </Box>
      </div>
    </Drawer>
  );
};

export default CustomSidenav;
