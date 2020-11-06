import { makeStyles } from '@material-ui/core/styles';

const useCheckOutButtonStyles = makeStyles(() => ({
  chip: {
    boxShadow:
      '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
    color: 'white',
    backgroundColor: '#CA761B',
    padding: '0px 8px',
    position: 'fixed',
    top: 25,
    right: 15,
    zIndex: 10
  }
}));

export default useCheckOutButtonStyles;
