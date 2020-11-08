import React, { useEffect, useRef, useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

import { useWeatherCardStyles } from '../styles';

enum Degrees {
  F = 'Fahrenheit',
  C = 'Celsius'
}

function WeatherCard() {
  const [degree, setAlignment] = useState<Degrees>(Degrees.F);
  const classes = useWeatherCardStyles();
  const data = useRef(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        'http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json'
      );
      data.current = await response.json();
    })();
  }, []);

  const handleDegreeChange = (
    _: React.MouseEvent<HTMLElement>,
    newDegree: Degrees
  ) => {
    if (newDegree !== null) {
      setAlignment(newDegree);
    }
  };

  return (
    <Grid container spacing={4}>
      <Grid item sm={12} md={6}>
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup
            value={degree}
            exclusive
            onChange={handleDegreeChange}
            aria-label="text degree"
          >
            <ToggleButton value={Degrees.C} aria-label="left aligned">
              <span>&#8451;</span>
            </ToggleButton>
            <ToggleButton value={Degrees.F} aria-label="centered">
              <span>&#8457;</span>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Grid>
      <Grid item>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Wind:
              <Typography>Speed</Typography>
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              main:
              <Typography>main</Typography>
            </Typography>
            <Typography variant="h5" component="h2">
              base:
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />a benevolent smile
            </Typography>
          </CardContent>
          <CardActions />
        </Card>
      </Grid>
    </Grid>
  );
}

export default WeatherCard;
