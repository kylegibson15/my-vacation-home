import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useImageWithDialogStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      alignSelf: 'flex-end'
    },
    content: {
      maxWidth: '500px',
      backgroundColor: theme.palette.background.paper,
      boxShadow:
        '0px 3px 5px -1px rgba(0,0,0,0.8), 0px 6px 10px 0px rgba(0,0,0,0.74), 0px 1px 18px 0px rgba(0,0,0,0.72)',
      borderRadius: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      margin: 12
    },
    image: {
      height: '10vh',
      width: 'auto',
      border: '1px solid transparent'
    },
    itemButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    mainContent: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      padding: '0px !important'
    },
    paper: {
      zIndex: 10,
      position: 'fixed',
      backgroundColor: 'transparent',
      height: '100vh',
      width: '100vw',
      left: 0,
      top: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowY: 'scroll'
    }
  })
);

export default useImageWithDialogStyles;
