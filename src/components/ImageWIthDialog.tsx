import React, { useState } from 'react';
import { Button, Grid, Paper, Slide } from '@material-ui/core';

import { IImageWithDialogProps } from '../interfaces';

import { TopicCard } from './cards';
import { useImageWithDialogStyles } from './styles';

function ImageWithDialog({
  cuisine,
  messages,
  // directions,
  slide,
  src,
  title
}: IImageWithDialogProps) {
  const classes = useImageWithDialogStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

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
              <TopicCard
                cuisine={cuisine}
                messages={messages}
                expandable
                handleClose={handleChange}
                img={src}
                title={title}
              />
            </Grid>
            {/* <Grid item>
              <Button
                className={classes.close}
                color="secondary"
                fullWidth
                onClick={handleChange}
                variant="contained"
              >
                Close
              </Button>
            </Grid> */}
          </Grid>
        </Paper>
      </Slide>
    </>
  );
}

export default ImageWithDialog;
