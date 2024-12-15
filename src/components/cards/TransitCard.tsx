import React from 'react';
import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Fab,
  Grid2 as Grid,
  Typography
} from '@mui/material';
import { Apple, Android, DirectionsBus } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import theLift from '../../images/TheLiftWinterPark.jpg';

const TransitCardContainer = styled(Card)({
  margin: 12,
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  maxWidth: '400px'
});

export default function TransitCard() {
  return (
    <TransitCardContainer elevation={6}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ backgroundColor: 'rgb(244, 67, 54)' }}
            variant="rounded"
          >
            <DirectionsBus />
          </Avatar>
        }
        title={<Typography variant="h5">Free Local Transit</Typography>}
        subheader={new Date().toLocaleDateString()}
      />
      <CardMedia
        className="media"
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
      <CardActions
        disableSpacing
        sx={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <Grid container direction="column">
          <Grid>
            <Typography variant="subtitle2">Download</Typography>
            <Typography variant="subtitle2">the App</Typography>
          </Grid>
        </Grid>
        <Fab
          className="fabApple"
          href="https://apps.apple.com/us/app/the-lift-rider/id1673600268"
          sx={{ bgcolor: 'rgb(55, 67, 100)', margin: '5px', color: 'white' }}
        >
          <Apple />
        </Fab>
        <Fab
          className="fabAndroid"
          href="https://play.google.com/store/apps/details?id=com.theliftwp.rider"
          sx={{ bgcolor: 'primary.main', margin: '5px', color: 'white' }} // Uses theme color
        >
          <Android />
        </Fab>
      </CardActions>
    </TransitCardContainer>
  );
}
