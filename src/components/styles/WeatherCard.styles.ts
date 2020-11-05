import { makeStyles, Theme } from '@material-ui/core';

const useWeatherCardStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  toggleContainer: {
    margin: theme.spacing(2, 0)
  }
}));

export default useWeatherCardStyles;
