import {
  AccountCircle,
  Email,
  Home,
  Notifications,
  Podcasts,
  Settings,
  ShoppingCart,
} from '@mui/icons-material';
import {
  AppBar,
  Breadcrumbs,
  Container,
  IconButton,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useEffect } from 'react';
import TopCards from '../TopCards/TopCards';
import styles from './Header.module.css';

const CustomHeader: React.FC<{
  children?: React.ReactNode;
}> = (props) => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const [openMenu, setOpenMenu] = React.useState<null | HTMLElement>(null);
  const open = Boolean(openMenu);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setOpenMenu(null);
  };

  return (
    <div className={styles.container}>
      <AppBar
        className={trigger ? styles.cssScroll : styles.css}
        position={trigger ? 'sticky' : 'static'}
        elevation={trigger ? 8 : 0}
      >
        <Toolbar>
          <Box className={styles.dashBox}>
            <Breadcrumbs separator="/">
              <Link href="/">
                <Home sx={{ fontSize: 'small', color: '#7b809a' }} />
              </Link>
              <Typography component="span" variant="subtitle2">
                Dashboard
              </Typography>
            </Breadcrumbs>

            <Typography
              variant="subtitle1"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 'bold' }}
            >
              Dashboard
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <TextField id="outlined-basic" label="Search here" size="small" variant="outlined" />
          <Box>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle sx={{ fontSize: 'large' }} />
            </IconButton>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <Settings sx={{ fontSize: 'large' }} />
            </IconButton>
            <IconButton
              size="medium"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={handleOpenMenu}
            >
              <Notifications sx={{ fontSize: 'large' }} />
            </IconButton>
          </Box>
          <Menu
            anchorEl={openMenu}
            id="account-menu"
            open={open}
            onClose={handleCloseMenu}
            onClick={handleCloseMenu}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <ListItemIcon>
                <Email fontSize="small" />
              </ListItemIcon>
              Check new messages
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Podcasts fontSize="small" />
              </ListItemIcon>
              Manage Podcast sessions
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ShoppingCart fontSize="small" />
              </ListItemIcon>
              Payment successfully completed
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      
      {props.children}
    </div>
  );
};
export default CustomHeader;
