import { makeStyles } from '@material-ui/core/styles';

const useMessageWithPictureStyles = makeStyles(() => ({
  image: {
    boxShadow:
      '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
    width: '60vw',
    maxWidth: '300px',
    margin: '35px 0px'
  }
}));

export default useMessageWithPictureStyles;
