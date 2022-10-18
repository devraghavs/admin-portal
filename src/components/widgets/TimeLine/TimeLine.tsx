import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Icon, Typography } from '@mui/material';
import styles from './TimeLine.module.css';

interface TimelineProps {
  color?:
    | 'inherit'
    | 'grey'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'primary'
    | 'secondary'
    | undefined;
  icon?: string;
  title?: string;
  dateTime?: string;
  connector?: boolean;
}

const TimeLineItem = ({ color, icon, title, dateTime, connector = true }: TimelineProps) => {
  return (
    <TimelineItem className={styles.wrapper}>
      <TimelineSeparator>
        <TimelineDot className={styles.dot} color={color}>
          <Icon sx={{ color: 'white' }}>{icon}</Icon>
        </TimelineDot>
        {connector ? <TimelineConnector className={styles.connector}/> : null}
      </TimelineSeparator>
      <TimelineContent>
        <Typography className={styles.title} component="span">
          {title}
        </Typography>
        <Typography className={styles.dateTime}>{dateTime}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimeLineItem;
