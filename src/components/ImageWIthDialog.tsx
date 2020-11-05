import React, { useState } from 'react';
import {
  Button,
  Grid,
  // IconButton,
  Paper,
  Slide,
  // Typography
} from '@material-ui/core';
// import { Directions } from '@material-ui/icons';

import { IImageWithDialogProps } from '../interfaces';

import { TopicCard } from './cards';
import { useImageWithDialogStyles } from './styles';

export default function SimpleSlide({
  // directions,
  slide,
  src
}: IImageWithDialogProps) {
  const classes = useImageWithDialogStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  // function mapsSelector() {
  //   // Big Trout Brewing Company, 50 Vasquez Rd, Winter Park, CO 80482
  //   if (
  //     /* if we're on iOS, open in Apple Maps */
  //     navigator.platform.indexOf('iPhone') !== -1 ||
  //     navigator.platform.indexOf('iPad') !== -1 ||
  //     navigator.platform.indexOf('iPod') !== -1
  //   )
  //     window.open(`maps://${directions}`);
  //   /* else use Google */ else window.open(`https://${directions}`);
  // }

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
              {/* <Grid className={classes.itemButton}>
                <IconButton color="primary" onClick={mapsSelector}>
                  <Directions style={{ fontSize: 60 }} />
                </IconButton>
                <Typography color="primary">Directions</Typography>
              </Grid> */}
              <TopicCard />
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
