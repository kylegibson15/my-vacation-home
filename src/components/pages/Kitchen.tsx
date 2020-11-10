import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography
} from '@material-ui/core';

import { pageTransition, pageVariants } from '../../constants';
import { coaster } from '../../images';

const useStyles = makeStyles((theme: Theme) => ({
  parking: {
    height: '100%',
    width: '100vw',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0),
    margin: 0,
    overflow: 'hidden'
  },
  image: {
    height: '25%',
    padding: theme.spacing(6)
  },
  resetContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(3)
  }
}));

function Kitchen() {
  const classes = useStyles();
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      style={{ height: '100%' }}
      transition={pageTransition}
      variants={pageVariants}
    >
      <Container className={classes.parking}>
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography variant="h4" color="textPrimary">
            Kitchen
          </Typography>

          <Typography variant="body2">
            The kitchen is stocked and ready for you to get cooking! Please be
            sure to clean your dishes and utensils before putting them away.
            Dishes need to be scraped and rinsed before going into the
            dishwasher. Load the dishwasher with any remaining dirty dishes and
            start the dishwasher prior to leaving. We will put them away for
            you.
          </Typography>

          <Grid container item justify="center">
            <img alt="coaster" className={classes.image} src={coaster} />
          </Grid>
        </Paper>
      </Container>
    </motion.div>
  );
}

export default Kitchen;
