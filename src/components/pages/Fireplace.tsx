import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  makeStyles,
  Paper,
  Theme,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  fireplace: {
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
  }
}));

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1,
    transition: { duration: 1.5, ease: [0.96, 0.23, 0.13, 0.43] }
  },
  out: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 1
};

function Fireplace() {
  const classes = useStyles();
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
      variants={pageVariants}
    >
      <Container className={classes.fireplace}>
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography variant="h4" color="textPrimary">
            Fireplace
          </Typography>

          <Typography variant="body2">
            The thermostat that controls the fireplace is located on the wall in
            the second shelf from the bottom. To turn on the fireplace, move the
            switch to the left to the “Heat” setting. If the fireplace does not
            turn on, then increase the temperature until it turns on. If you
            want the fireplace to turn off, move the switch to the center to the
            “off”setting. **since the thermostat is difficult to see, there is
            flashlight in the top drawer in the kitchen (next to the
            refrigerator).**
          </Typography>
        </Paper>
      </Container>
    </motion.div>
  );
}

export default Fireplace;
