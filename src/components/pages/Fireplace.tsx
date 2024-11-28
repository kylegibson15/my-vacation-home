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
import { wood_ball } from '../../images';

const useStyles = makeStyles((theme: Theme) => ({
  fireplace: {
    height: '100%',
    width: '100vw',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0),
    margin: 0,
    overflow: 'hidden'
  },
  image: {
    width: '70%',
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

function Fireplace() {
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
      <Container className={classes.fireplace}>
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography variant="h4" color="textPrimary">
            Fireplace
          </Typography>

          <Typography variant="body2">
          To enjoy the cozy fireplace, simply find the thermostat inside the shelving unit to the left of the TV. Adjust the temperature to your preference. The fireplace will automatically turn on and off to maintain the desired temperature.

          Please remember to turn down the thermostat to 60 degrees before you leave to conserve energy.
          </Typography>

          <Grid container item justify="center">
            <img alt="wood-ball" className={classes.image} src={wood_ball} />
          </Grid>
        </Paper>
      </Container>
    </motion.div>
  );
}

export default Fireplace;
