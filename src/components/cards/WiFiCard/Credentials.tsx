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
    </>
  );
}
