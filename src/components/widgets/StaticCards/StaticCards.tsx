import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import styles from './StaticCards.module.css';

interface CardProps {
  title?: string;
  color?: string;
    count?: string | number;
  percentage?: Percentage;
  icon?: string;
}

interface Percentage {
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark';
  amount?: string | number;
  label?: string;
}

const StaticCard = (props: CardProps) => {
  const {
    title,
    color = 'info',
    count,
    percentage = { color: 'success', label: '', amount: '' },
    icon,
  } = props;
  return (
    <Card className={styles.wrapper}>
      <Box className={styles.upperBox} pt={1} px={2}>
        <Box className={styles.smallBox} bgcolor={color} mt={-3}>
          <Icon fontSize="medium" color="inherit">
            {icon}
          </Icon>
        </Box>
        <Box>
          <Typography className={styles.upperText} variant="button" fontWeight="light" color="text">
            {title}
          </Typography>
          <Typography className={styles.count} variant="h4">{count}</Typography>
        </Box>
      </Box>
      <Divider className={styles.divider} />
      <Box pb={2} px={2}>
        <Typography className={styles.downTypo} component="p" variant="button">
          <Typography className={styles.downPercentage} component="span" variant="button" >
            {percentage.amount}
          </Typography>
          &nbsp;{percentage.label}
        </Typography>
      </Box>
    </Card>
  );
};
export default StaticCard;
