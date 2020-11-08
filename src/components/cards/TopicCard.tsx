import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography
} from '@material-ui/core';
import {
  Directions,
  Favorite,
  Share,
  ExpandMore,
  MoreVert
} from '@material-ui/icons';

import { useTopicCardStyles } from '../styles';

// function mapsSelector() {
//   // Big Trout Brewing Company, 50 Vasquez Rd, Winter Park, CO 80482
//   if (
//     /* if we're on iOS, open in Apple Maps */
//     navigator.platform.indexOf('iPhone') !== -1 ||
//     navigator.platform.indexOf('iPad') !== -1 ||
//     navigator.platform.indexOf('iPod') !== -1
//   )
//     window.open(`maps://${directions}`);
//   /* else use Google */ else window.open(`https://${directions}`);
// }

interface ITopicCardProps {
  border?: boolean;
  expandable?: boolean;
  img?: string;
  title?: string;
}

export default function TopicCard({
  border,
  expandable,
  img,
  title
}: ITopicCardProps) {
  const classes = useTopicCardStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} elevation={border ? 6 : 0}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {title?.split('')[0] || 'R'}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={title || 'Shrimp and Chorizo Paella'}
      />
      <CardMedia
        classes={{ root: classes.background }}
        className={classes.media}
        image={img ?? '/static/images/cards/paella.jpg'}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <IconButton aria-label="direction">
          <Directions />
        </IconButton>
        {expandable ? (
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton>
        ) : null}
      </CardActions>
    </Card>
  );
}
