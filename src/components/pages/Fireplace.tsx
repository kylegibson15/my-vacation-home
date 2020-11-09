import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  makeStyles,
  Paper,
  Theme,
  Typography
} from '@material-ui/core';

import { pageTransition, pageVariants } from '../../constants';

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