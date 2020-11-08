import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useTopicCardStyles } from '../styles';

export default function OutlinedCard() {
  const classes = useTopicCardStyles();

  return (
    <Grid className={classes.root}>
      <Typography className={classes.pos} variant="h3" component="h1">
        WIFI
      </Typography>
      <Grid container item direction="row" justify="space-between">
        <Typography style={{ color: 'white' }}>
          <b>Network:</b>
        </Typography>
        <Typography style={{ color: 'white' }}>
          CrestViewPlaceCondominium
        </Typography>
      </Grid>
      <Grid container item direction="row" justify="space-between">
        <Typography style={{ color: 'white' }}>
          <b>Password:</b>
        </Typography>
        <Typography style={{ color: 'white' }}>winterpark</Typography>
      </Grid>
    </Grid>
  );
}
