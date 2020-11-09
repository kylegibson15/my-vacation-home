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
import {
  AcUnit,
  Delete,
  MusicNote,
  Pets,
  SmokeFree,
  Wc
} from '@material-ui/icons';

import { pageTransition, pageVariants } from '../../../constants';

import GeneralInfoListItem from './GeneralInfoListItem';

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

function GeneralInfo() {
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
            General Info
          </Typography>

          <List className={classes.list}>
            <GeneralInfoListItem
              mainText="Shoes"
              AvatarIcon={Wc}
              description="Please remove your shoes at the door."
            />
            <Divider variant="inset" component="li" />
            <GeneralInfoListItem
              mainText="Ski's / Boards / SUP"
              AvatarIcon={AcUnit}
              description="NO skis, snowboards, SUP
              boards, etc in the unit. Use the storage locker #302 on the same
              floor of the condo near the elevator with the provided key."
            />
            <Divider variant="inset" component="li" />
            <GeneralInfoListItem
              mainText="Pets"
              AvatarIcon={Pets}
              description="NO pets, even for a short visit."
            />
            <Divider variant="inset" component="li" />
            <GeneralInfoListItem
              mainText="Noise"
              AvatarIcon={MusicNote}
              description="Be respectful of your neighbors, noise travels in shared spaces. Quiet hours are 10pm to 9am."
            />
            <Divider variant="inset" component="li" />
            <GeneralInfoListItem
              mainText="Trash"
              AvatarIcon={Delete}
              description="Do not leave anything outside of the home in the hall. You may take your excess trash and/or recycling to the trash bin in the garage."
            />
            <Divider variant="inset" component="li" />
            <GeneralInfoListItem
              mainText="Smoking"
              AvatarIcon={SmokeFree}
              description="Absolutely NO smoking of ANY kind, including vape pens and Mary Jane."
            />
          </List>
        </Paper>
      </Container>
    </motion.div>
  );
}

export default GeneralInfo;
