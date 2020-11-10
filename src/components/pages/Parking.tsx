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
import { bear } from '../../images';

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
    height: '50%',
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

function Parking() {
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
            Parking
          </Typography>

          <Typography variant="body2">
            Parking is located underneath the building and unassigned but only
            one car please.
          </Typography>

          <Grid container item justify="center">
            <img alt="wood-ball" className={classes.image} src={bear} />
          </Grid>
        </Paper>
      </Container>
    </motion.div>
  );
}

export default Parking;
