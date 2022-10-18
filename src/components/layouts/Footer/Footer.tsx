import { Favorite } from '@mui/icons-material';
import { Container, Icon, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <Box className={styles.wrapper}>
      <Container>
        <Box className={styles.mainBox}>
          <Box className={styles.typography}>
            &copy; {new Date().getFullYear()}, made with
            <Box px={0.5} display="flex" alignItems="center" textAlign="center">
              <Icon fontSize="small">favorite</Icon>
            </Box>
            by
            <Link className={styles.link} href="/" target="_blank">
              <Typography className={styles.secondBox} variant="button" fontWeight="medium">
                &nbsp;Developers&nbsp;
              </Typography>
            </Link>
            for a better web.
          </Box>
          <Box
            component="ul"
            sx={({ breakpoints }) => ({
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              listStyle: 'none',
              mt: 3,
              mb: 0,
              p: 0,

              [breakpoints.up('lg')]: {
                mt: 0,
              },
            })}
          >
            <Box component="li" pr={2} lineHeight={1}>
              <Link className={styles.link} href="/" target="_blank">
                <Typography
                  className={styles.typography}
                  variant="button"
                  fontWeight="regular"
                  color={'dark'}
                >
                  Developers
                </Typography>
              </Link>
            </Box>
            <Box component="li" px={2} lineHeight={1}>
              <Link className={styles.link} href="/" target="_blank">
                <Typography
                  className={styles.typography}
                  variant="button"
                  fontWeight="regular"
                  color={'dark'}
                >
                  About Us
                </Typography>
              </Link>
            </Box>
            <Box component="li" px={2} lineHeight={1}>
              <Link className={styles.link} href="/" target="_blank">
                <Typography
                  className={styles.typography}
                  variant="button"
                  fontWeight="regular"
                  color={'dark'}
                >
                  Blog
                </Typography>
              </Link>
            </Box>
            <Box component="li" pl={2} lineHeight={1}>
              <Link className={styles.link} href="/" target="_blank">
                <Typography className={styles.typography} variant="button" fontWeight="regular">
                  License
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
