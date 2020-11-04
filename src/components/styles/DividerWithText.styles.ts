import { makeStyles } from '@material-ui/core/styles';

const useDividerWithTextStyles = makeStyles((theme) => ({
  dividerContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 15,
    width: '90vw'
  },
  dividerBorder: {
    borderBottom: '2px solid lightgray',
    width: '100%'
  },
  dividerText: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: 22,
    color: 'lightgray'
  }
}));

export default useDividerWithTextStyles;
