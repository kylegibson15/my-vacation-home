import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Divider,
  List,
  makeStyles,
  Paper,
  Theme,
  Typography
} from '@material-ui/core';
import { SportsEsports, Tv } from '@material-ui/icons';

import { pageTransition, pageVariants } from '../../../constants';

import EntertainmentListItem from './EntertainmentListItem';

const useStyles = makeStyles((theme: Theme) => ({
  general: {
    height: '100%',
    width: '100vw',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0),
    margin: 0,
    overflowY: 'hidden'
  },
  resetContainer: {
    padding: theme.spacing(3)
  },
  list: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  }
}));

function Entertainment() {
  const classes = useStyles();
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
      variants={pageVariants}
    >
      <Container className={classes.general}>
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography variant="h4" color="textPrimary">
            Entertainment
          </Typography>

          <Typography variant="body2" color="textPrimary">
            While you have likely traveled to Grand County for leisure and
            adventure outside of your sleeping arrangements, we hope our
            mountain retreat still has plenty for you to stay entertained:
          </Typography>

          <List className={classes.list}>
            <EntertainmentListItem
              mainText="Games"
              AvatarIcon={SportsEsports}
              description="A variety of board games are waiting for you on the shelf left side of the fireplace including games for kids."
            />
            <Divider variant="inset" component="li" />
            <EntertainmentListItem
              mainText="TV"
              AvatarIcon={Tv}
              description="Cable is ready for you in both the living room and bedrooms. The remotes will do everything that you need."
            />
          </List>
        </Paper>
      </Container>
    </motion.div>
  );
}

export default Entertainment;
