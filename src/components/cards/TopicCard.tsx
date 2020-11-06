import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
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
  );
}
