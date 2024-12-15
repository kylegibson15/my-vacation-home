import React, { useState, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Grid2 as Grid,
  IconButton,
  Typography
} from '@mui/material';
import { Close, Directions, Restaurant } from '@mui/icons-material';

interface IMessages {
  main: string;
  more?: string[];
}

function mapsSelector({ mobile, web }: { web: string; mobile: string; }) {
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.platform.indexOf('iPhone') !== -1 ||
    navigator.platform.indexOf('iPad') !== -1 ||
    navigator.platform.indexOf('iPod') !== -1
  ) {
    window.open(`
    http://maps.apple.com/?saddr=Current%20Location&daddr=${mobile}`);
  } else {
    window.open(`https://maps.google.com/maps/dir/${web}`);
  }
}

interface ITopicCardProps {
  cuisine?: string[];
  directions: { mobile: string; web: string; };
  border?: boolean;
  messages: IMessages;
  expandable?: boolean;
  handleClose?: any;
  img?: string;
  title?: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: theme.shadows[6],
  '& .MuiCardHeader-root': {
    padding: 0,
    margin: 0
  },
  '& .MuiChip-root': {
    margin: theme.spacing(0, 1)
  },
  '& .MuiCardContent-root': {
    maxHeight: '45vh',
    overflowY: 'scroll',
    maxWidth: '500px'
  },
  '& .MuiCardMedia-root': {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  '& .MuiTypography-root': {
    color: 'white',
    marginBottom: 12,
    paddingLeft: 6,
    width: '50%',
    borderBottom: '1px solid white'
  }
}));

function TopicCard({
  cuisine,
  directions,
  messages,
  expandable,
  handleClose,
  img,
  title
}: ITopicCardProps) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const cuisineChips = useMemo(() => {
    return cuisine
      ? cuisine.map((type) => (
        <Chip key={type} size="small" label={type} variant="outlined" />
      ))
      : [];
  }, [cuisine]);

  const handleDirections = () => {
    mapsSelector(directions);
  };

  return (
    <StyledCard>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
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
      {!expanded && img ? <CardMedia image={img} title={title} /> : null}
      <CardContent>
        {!expanded ? (
          <Typography variant="body2" color="textSecondary" component="p">
            {messages.main}
          </Typography>
        ) : (
          <>
            {messages &&
              messages.more?.map((message) => (
                <Typography
                  key={message.substring(0, 5)}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {message}
                </Typography>
              ))}
          </>
        )}
      </CardContent>
      <CardActions disableSpacing>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          wrap="nowrap"
        >
          <Grid>
            <IconButton aria-label="direction" onClick={handleDirections}>
              <Directions />
            </IconButton>
          </Grid>
          <Grid>
            {expandable && messages.more ? (
              <Button
                variant="outlined"
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                {!expanded ? 'More' : 'Less'}
              </Button>
            ) : null}
          </Grid>
        </Grid>
      </CardActions>
    </StyledCard>
  );
}

export default TopicCard;
