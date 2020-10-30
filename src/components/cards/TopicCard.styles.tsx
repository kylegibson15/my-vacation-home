import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 545,
    margin: theme.spacing(4, 0),
    width: '100%',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    paddingLeft: 6,
    color: 'white',
    width: '50%',
    borderBottom: '1px solid white',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export default useStyles
