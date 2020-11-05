import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useTransitCardStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500]
  },
  cardActions: { display: 'flex', justifyContent: 'flex-end' },
  container: {
    margin: theme.spacing(4, 0),
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white'
  },
  fabAndroid: {
    backgroundImage:
      'radial-gradient(circle, rgba(46,42,42,1) 0%, rgba(72,84,43,1) 5%, rgba(82,101,44,1) 9%, rgba(89,113,44,1) 13%, rgba(149,208,47,1) 100%)',
    margin: '5px'
  },
  fabApple: { backgroundColor: '#374364', margin: '5px' },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}));

export default useTransitCardStyles;
