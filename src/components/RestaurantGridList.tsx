import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import restaurants from '../images/restaurants';

import ImageWithDialog from './ImageWIthDialog';
import DividerWithText from './DividerWithText';
import { useRestaurantGridListStyles } from './styles';

export default function ImageGridList() {
  const classes = useRestaurantGridListStyles();
  return (
    <Grid container justify="center">
      <DividerWithText value="Restaurants" />
      <Typography color="textSecondary" variant="subtitle2">
        click a restaurant for more info
      </Typography>
      <Grid className={classes.imagesContainer} container item>
        {restaurants.map(({ directions, slide, src, title }) => {
          return (
            <ImageWithDialog
              directions={directions}
              key={`${src}-${slide}`}
              slide={slide}
              src={src}
              title={title}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}
