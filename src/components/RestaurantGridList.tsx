import React from 'react';
import { Grid } from '@material-ui/core';

import restaurants from '../images/restaurants';

import ImageWithDialog from './ImageWIthDialog';
import DividerWithText from './DividerWithText';
import { useRestaurantGridListStyles } from './styles';

export default function ImageGridList() {
  const classes = useRestaurantGridListStyles();
  return (
    <Grid container>
      <DividerWithText value="Restaurants" />
      <Grid className={classes.imagesContainer} container item>
        {restaurants.map(({ directions, slide, src }) => {
          return (
            <ImageWithDialog
              directions={directions}
              key={`${src}-${slide}`}
              slide={slide}
              src={src}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}
