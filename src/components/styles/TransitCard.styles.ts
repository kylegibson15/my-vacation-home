import { makeStyles } from '@material-ui/core/styles';

const useTransitCardStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: 'rgb(244, 67, 54)'
  },
  cardActions: { display: 'flex', justifyContent: 'flex-end' },
  container: {
    margin: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white'
    // maxWidth: '400px'
  },
  fabAndroid: {
    backgroundImage:
      'radial-gradient(circle, rgba(46,42,42,1) 0%, rgba(72,84,43,1) 5%, rgba(82,101,44,1) 9%, rgba(89,113,44,1) 13%, rgba(149,208,47,1) 100%)',
    margin: '5px'
  },
  fabApple: {
    background: 'rgb(55, 67, 100)',
    backgroundColor: 'rgb(55, 67, 100)',
    margin: '5px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}));

export default useTransitCardStyles;
