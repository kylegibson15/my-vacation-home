import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Collapse,
  IconButton,
  Typography
} from '@material-ui/core';
import {
  Close,
  Directions,
  Favorite,
  Share,
  ExpandMore,
  Restaurant
} from '@material-ui/icons';

import { useTopicCardStyles } from '../styles';
import { IMessages } from '../../interfaces';

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
  cuisine?: string[];
  border?: boolean;
  messages: IMessages;
  expandable?: boolean;
  handleClose?: any;
  img?: string;
  title?: string;
}

export default function TopicCard({
  cuisine,
  border,
  messages,
  expandable,
  handleClose,
  img,
  title
}: ITopicCardProps) {
  const classes = useTopicCardStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const cuisineChips = useMemo(() => {
    return cuisine
      ? cuisine.map((type) => {
          return (
            <Chip
              className={classes.chip}
              key={type}
              size="small"
              label={type}
            />
          );
        })
      : [];
  }, []);

  return (
    <Card className={classes.topicCard} elevation={border ? 6 : 0}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <Restaurant />
          </Avatar>
        }
        action={
          handleClose ? (
            <IconButton aria-label="close-button" onClick={handleClose}>
              <Close />
            </IconButton>
          ) : null
        }
        title={cuisineChips}
      />
      <CardMedia
        classes={{ root: classes.background }}
        className={classes.media}
        image={img ?? '/static/images/cards/paella.jpg'}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {messages.main}
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
        {expandable && messages.more ? (
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {messages &&
            messages.more?.map((message) => {
              return (
                <Typography key={message.substr(0, 5)} paragraph>
                  {message}
                </Typography>
              );
            })}
        </CardContent>
      </Collapse>
    </Card>
  );
}
