import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import useStyles from './TopicCard.styles'

export default function OutlinedCard() {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Typography className={classes.pos} variant="h3" component="h1">
        WiFi
      </Typography>
      <Grid container item direction="row" justify="space-between">
        <Typography color="error">Network:</Typography>
        <Typography color="textPrimary">CrestViewPlaceCondominium</Typography>
      </Grid>
      <Grid container item direction="row" justify="space-between">
        <Typography color="textSecondary">Password:</Typography>
        <Typography color="textPrimary">winterpark</Typography>
      </Grid>
    </Grid>
  )
}
