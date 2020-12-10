import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Grid,
  List,
  makeStyles,
  Paper,
  Theme,
  Typography
} from '@material-ui/core';

import { pageTransition, pageVariants } from '../../../constants';
import { dumpster, garage_dumpster, posted_sign } from '../../../images';

import TrashAndRecyclingListItem from './TAndRListItem';

const useStyles = makeStyles((theme: Theme) => ({
  general: {
    height: '100%',
    width: '100vw',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0),
    margin: 0,
    overflowY: 'scroll'
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

function TrashAndRecycling() {
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
      <Container className={classes.general}>
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography variant="h4" color="textPrimary">
            Trash & Recycling
          </Typography>

          {/* <Typography variant="body2" color="textPrimary">
            While you have likely traveled to Grand County for leisure and
            adventure outside of your sleeping arrangements, we hope our
            mountain retreat still has plenty for you to stay entertained:
          </Typography> */}

          <List className={classes.list}>
            <Typography align="center">
              We have two dumpsters located in the parking lot one for trash and
              one for recycling (picture below).
            </Typography>
            <Grid container justify="center">
              <img alt="dumpster" src={dumpster} style={{ width: '80%' }} />
            </Grid>
            <TrashAndRecyclingListItem
              description={[
                `These dumpsters are also shared with Winter Park Station tenants.`,
                `The recycling dumpster has a yellow lid.`,
                `Attached please find the recycling poster and a guidance what to recycle.`,
                `Please break down all boxes before putting them in the dumpster.`
              ]}
            />
            {/* <Divider variant="middle" component="li" /> */}
            <Grid container justify="center">
              <img
                alt="garage-dumpster"
                src={garage_dumpster}
                style={{ width: '80%' }}
              />
            </Grid>
            <TrashAndRecyclingListItem
              description={[
                'For your convenience we have two trash bins located in the garage for any household trash (picture below).',
                'These dumpsters need to be emptied daily into the main dumpster since Waste Management trucks don’t fit in the garage to service them.',
                'Please do not pile the trash on the floor by these dumpsters.',
                'If they are full, you need to take the trash to the dumpster in the parking lot.',
                'The wildlife is very active (and hungry) in the mountains.'
              ]}
            />
            <Grid container justify="center">
              <img
                alt="posted-sign"
                src={posted_sign}
                style={{ width: '60%' }}
              />
            </Grid>
          </List>
        </Paper>
      </Container>
    </motion.div>
  );
}

export default TrashAndRecycling;
