import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import useStyles from './TopicCard.styles'

export default function OutlinedCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={6}>
      <CardContent>
        <Typography className={classes.pos} variant="h5" component="h1">
          WiFi
        </Typography>
        <Grid container direction="row" justify="space-between">
          <Typography color="textSecondary">Network:</Typography>
          <Typography color="textPrimary">CrestViewPlaceCondominium</Typography>
        </Grid>
        <Grid container direction="row" justify="space-between">
          <Typography color="textSecondary">Password:</Typography>
          <Typography color="textPrimary">winterpark</Typography>
        </Grid>
      </CardContent>
    </Card>
  )
}
