import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import moose from '../images/moose.png';

import { useIntroMessageStyles } from './styles';
import DividerWithText from './DividerWithText';

function IntroMessage() {
  const classes = useIntroMessageStyles();
  return (
    <Grid
      alignItems="center"
      container
      justify="center"
      spacing={6}
      style={{ color: 'white' }}
    >
      <Grid item>
        <img alt="moose" className={classes.mooseImage} src={moose} />
      </Grid>

      <Grid item>
        <Typography align="center" variant="body1">
          We are thrilled you chose our mountain retreat for your own getaway!
          Whether you are here for world-class golfing, extreme mountain biking,
          or just to relax, we hope your stay is everything you envisioned.
          Colorado is our permanent home and Summit County is our favorite place
          to be! Strolling along Snake River, skiing Keystone, hiking the
          Colorado Trail, eating at Dillon Dam Brewery, shopping the outlets,
          biking Keystone Gulch, ice skating at Lakeside Village... these are a
          few of our favorite things!
        </Typography>
        <br />
        <Typography align="center" variant="body1">
          We hope this little book will help make your stay easier and gives you
          a way to feel at home. In here you will find contact info, amenity
          access, transportation schedules, dining recommendations and more.
        </Typography>
      </Grid>

      <DividerWithText value="Enjoy!" />
    </Grid>
  );
}

export default IntroMessage;
