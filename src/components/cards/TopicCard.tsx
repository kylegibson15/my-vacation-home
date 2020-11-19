import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Grid,
  IconButton,
  Typography
} from '@material-ui/core';
import { Close, Directions, Restaurant } from '@material-ui/icons';

import { useTopicCardStyles } from '../styles';
import { IMessages } from '../../interfaces';

function mapsSelector({ mobile, web }: { web: string; mobile: string }) {
  // if (
  //   /* if we're on iOS, open in Apple Maps */
  //   navigator.platform.indexOf('iPhone') !== -1 ||
  //   navigator.platform.indexOf('iPad') !== -1 ||
  //   navigator.platform.indexOf('iPod') !== -1
  // ) {
  //   window.open(`maps://maps.google.com/maps/dir/?daddr=${mobile}&amp;ll=`);
  // } else {
  window.open(`https://maps.google.com/maps/dir/${web}`);
  // }
}

interface ITopicCardProps {
  cuisine?: string[];
  directions: { mobile: string; web: string };
  border?: boolean;
  messages: IMessages;
  expandable?: boolean;
  handleClose?: any;
  img?: string;
  title?: string;
}

export default function TopicCard({
  cuisine,
  directions,
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
      {!expanded ? (
        <CardMedia
          classes={{ root: classes.background }}
          className={classes.media}
          image={img}
          title={title}
        />
      ) : null}
      <CardContent style={{ maxHeight: '45vh', overflowY: 'scroll' }}>
        {!expanded ? (
          <Typography variant="body2" color="textSecondary" component="p">
            {messages.main}
          </Typography>
        ) : (
          <>
            {messages &&
              messages.more?.map((message) => {
                return (
                  <Typography
                    key={message.substr(0, 5)}
                    paragraph
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {message}
                  </Typography>
                );
              })}
          </>
        )}
      </CardContent>
      <CardActions disableSpacing>
        <Grid container direction="row" justify="space-between" wrap="nowrap">
          <Grid container item>
            <IconButton
              aria-label="direction"
              onClick={() => mapsSelector(directions)}
            >
              <Directions />
            </IconButton>
          </Grid>

          <Grid container item justify="flex-end">
            {expandable && messages.more ? (
              <Button
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                {!expanded ? (
                  <Typography>More</Typography>
                ) : (
                  <Typography>Less</Typography>
                )}
              </Button>
            ) : null}
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
