import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  topicCard: {
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0
  },
  chip: {
    margin: theme.spacing(0, 1)
  },
  reducedPadding: {
    padding: theme.spacing(1)
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12,
    paddingLeft: 6,
    color: 'white',
    width: '50%',
    borderBottom: '1px solid white'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  background: {
    backgroundSize: 'contain !important'
  },
  expand: {
    transform: 'rotateX(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.short
    })
  },
  expandOpen: {
    transform: 'rotateX(360deg)'
  },
  avatar: {
    backgroundColor: green[500]
  }
}));

export default useStyles;
