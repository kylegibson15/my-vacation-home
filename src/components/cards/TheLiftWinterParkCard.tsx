import React from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Fab,
  Grid,
} from '@material-ui/core'
import { Apple, AndroidOutlined } from '@material-ui/icons'

import theLift from '../../images/TheLiftWinterPark.jpg'

import useStyles from './TopicCard.styles'

export default function TheLiftWinterParkCard() {
  const classes = useStyles()

  return (
    <Card
      className={classes.root}
      elevation={6}
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
    >
      <CardHeader
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
          Free transit service year-round to and from Winter Park Resort,
          Downtown Winter Park, Fraser and Granby
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <Grid>
        <Typography variant="subtitle2">Download</Typography>
        <Typography variant="subtitle2">the App</Typography>
        </Grid>
        <Fab
          href="https://apps.apple.com/us/app/the-lift-rider/id1420161965?ls=1"
          style={{ backgroundColor: '#374364', margin: '5px' }}
        >
          <Apple style={{ color: 'white' }} />
        </Fab>
        <Fab
          href="https://play.google.com/store/apps/details?hl=en_US&id=com.ridesystems.TheLift"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(46,42,42,1) 0%, rgba(72,84,43,1) 5%, rgba(82,101,44,1) 9%, rgba(89,113,44,1) 13%, rgba(149,208,47,1) 100%)',
            margin: '5px',
          }}
        >
          <AndroidOutlined style={{ color: 'white' }} />
        </Fab>
      </CardActions>
    </Card>
  )
}
