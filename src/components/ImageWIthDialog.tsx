import React, { useState } from 'react';
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Slide,
  SlideProps,
  Typography
} from '@material-ui/core';
import { Directions } from '@material-ui/icons';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      alignSelf: 'flex-end'
    },
    content: {
      height: '50vh',
      width: '90vw',
      backgroundColor: 'white',
      boxShadow:
        '0px 3px 5px -1px rgba(0,0,0,0.8), 0px 6px 10px 0px rgba(0,0,0,0.74), 0px 1px 18px 0px rgba(0,0,0,0.72)',
      borderRadius: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column'
    },
    image: {
      width: '50%',
      minHeight: 100,
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
      width: '100%'
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
      alignItems: 'center'
    }
  })
);

interface IImageWithDialogProps {
  directions: string;
  slide: SlideProps['direction'];
  src: string;
}

export default function SimpleSlide({
  directions,
  slide,
  src
}: IImageWithDialogProps) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  function mapsSelector() {
    // Big Trout Brewing Company, 50 Vasquez Rd, Winter Park, CO 80482
    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf('iPhone') !== -1 ||
      navigator.platform.indexOf('iPad') !== -1 ||
      navigator.platform.indexOf('iPod') !== -1
    )
      window.open(`maps://${directions}`);
    /* else use Google */ else window.open(`https://${directions}`);
  }

  return (
    <>
      <img
        alt={src}
        aria-hidden
        className={classes.image}
        onClick={handleChange}
        src={src}
      />
      <Slide direction={slide} in={checked} mountOnEnter unmountOnExit>
        <Paper elevation={4} className={classes.paper}>
          <Grid className={classes.content} container spacing={4}>
            <Grid className={classes.mainContent} item>
              <Grid className={classes.itemButton}>
                <IconButton color="primary" onClick={mapsSelector}>
                  <Directions style={{ fontSize: 60 }} />
                </IconButton>
                <Typography color="primary">Directions</Typography>
              </Grid>
              {/* <Grid className={classes.itemButton}>
                <IconButton color="primary" onClick={mapsSelector}>
                  <Directions style={{ fontSize: 60 }} />
                </IconButton>
                <Typography color="primary">Directions</Typography>
              </Grid> */}
              {/* <Grid className={classes.itemButton}>
                <IconButton color="primary" onClick={mapsSelector}>
                  <Directions style={{ fontSize: 60 }} />
                </IconButton>
                <Typography color="primary">Directions</Typography>
              </Grid>
              <Grid className={classes.itemButton}>
                <IconButton color="primary" onClick={mapsSelector}>
                  <Directions style={{ fontSize: 60 }} />
                </IconButton>
                <Typography color="primary">Directions</Typography>
              </Grid> */}
            </Grid>
            <Grid item>
              <Button
                className={classes.close}
                color="secondary"
                fullWidth
                onClick={handleChange}
                variant="contained"
              >
                Close
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Slide>
    </>
  );
}
