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
    width: '50%'
  },
  dividerText: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    fontWeight: 500,
    fontSize: 22,
    color: 'lightgray',
    inlineSize: 'inherit'
  }
}));

export default useDividerWithTextStyles;
