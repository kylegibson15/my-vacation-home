import React, { useState } from 'react'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined'
import AppleIcon from '@material-ui/icons/Apple'

import theLift from '../../images/TheLiftWinterPark.jpg'

import useStyles from './TopicCard.styles'

export default function TheLiftWinterParkCard() {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root} elevation={6}>
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
        <Typography variant="body2" color="textSecondary" component="p">
          Free transit service year-round to and from Winter Park Resort,
          Downtown Winter Park, Fraser and Granby
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="The Lift Android App Download"
          href="https://play.google.com/store/apps/details?hl=en_US&id=com.ridesystems.TheLift"
        >
          <AndroidOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="The Lift iOS App Download"
          href="https://apps.apple.com/us/app/the-lift-rider/id1420161965?ls=1"
        >
          <AppleIcon fontSize="small" />
        </IconButton>
        <Typography variant="subtitle2">Download</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
