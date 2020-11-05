import React from 'react';
import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Fab,
  Grid,
  Typography
} from '@material-ui/core';
import { Apple, AndroidOutlined, DirectionsBus } from '@material-ui/icons';

import theLift from '../../images/TheLiftWinterPark.jpg';

import { useTransitCardStyles } from '../styles';

export default function TransitCard() {
  const classes = useTransitCardStyles();

  return (
    <Card className={classes.container} elevation={6}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar} variant="rounded">
            <DirectionsBus />
          </Avatar>
        }
        title={<Typography variant="h5">Free Local Transit</Typography>}
        subheader={new Date().toLocaleDateString()}
      />
      <CardMedia
        className={classes.media}
        image={theLift}
        title="Local Transit to the Ski Lifts"
      />
      <CardContent>
        <Typography variant="body2" component="p">
          Enjoy the <b>FREE</b> transit service year-round to and from Winter
          Park Resort, Downtown Winter Park, Fraser and Granby. The bus stop is
          just outside the bedroom door down the hill.
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions} disableSpacing>
        <Grid>
          <Typography variant="subtitle2">Download</Typography>
          <Typography variant="subtitle2">the App</Typography>
        </Grid>
        <Fab
          className={classes.fabApple}
          href="https://apps.apple.com/us/app/the-lift-rider/id1420161965?ls=1"
        >
          <Apple style={{ color: 'white' }} />
        </Fab>
        <Fab
          className={classes.fabAndroid}
          href="https://play.google.com/store/apps/details?hl=en_US&id=com.ridesystems.TheLift"
        >
          <AndroidOutlined style={{ color: 'white' }} />
        </Fab>
      </CardActions>
    </Card>
  );
}
