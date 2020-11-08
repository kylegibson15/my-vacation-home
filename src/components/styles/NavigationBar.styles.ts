import { createStyles, fade, makeStyles, Theme } from '@material-ui/core';

const useNavigationBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    scrollToTopButton: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    barContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundImage:
        'linear-gradient(to bottom, #374364, #364a68, #37506b, #39566e, #3c5c70, #2e6576, #1e6e78, #167675, #27805f, #59863b, #8f8417, #ca761b)'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto'
      }
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch'
      }
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      }
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    }
  })
);

export default useNavigationBarStyles;
