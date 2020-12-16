import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  topicCard: {
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0
  },
  pos: {
    marginBottom: 12,
    paddingLeft: 6,
    color: 'white',
    width: '50%',
    borderBottom: '1px solid white'
  }
}));

export default function Credentials() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.pos} variant="h4" component="h1">
        WIFI
      </Typography>
      <Grid container item direction="row" justify="space-between">
        <Typography style={{ color: 'white' }}>
          <b>SSID:</b>
        </Typography>
        <Typography style={{ color: 'white' }}>CrestView302</Typography>
      </Grid>
      <Grid container item direction="row" justify="space-between">
        <Typography style={{ color: 'white' }}>
          <b>Password:</b>
        </Typography>
        <Typography style={{ color: 'white' }}>4svrnw2L</Typography>
      </Grid>
    </>
  );
}
