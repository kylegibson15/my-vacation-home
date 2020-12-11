import React from 'react';
import { Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import {
  AssignmentTurnedInOutlined,
  // ContactPhone,
  Delete,
  Fireplace,
  SportsEsports,
  Info,
  Kitchen,
  LocalParking
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

import DividerWithText from './DividerWithText';

const useStyles = makeStyles((theme: Theme) => ({
  checkout: {
    boxShadow: '0px 0px 1px black',
    color: 'white',
    height: '25vw',
    maxHeight: '150px',
    backgroundImage:
      'linear-gradient(136deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.2) 100%)',
    borderRadius: theme.spacing(1),
    margin: 15,
    textDecoration: 'none',
    flexDirection: 'row'
  },
  checkoutIcon: {
    fontSize: '35px',
    marginRight: '15px'
  },
  item: {
    boxShadow: '0px 0px 1px black',
    color: 'white',
    width: '40vw',
    maxWidth: '150px',
    maxHeight: '150px',
    height: '25vw',
    backgroundImage:
      'linear-gradient(136deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.2) 100%)',
    borderRadius: theme.spacing(1),
    margin: 5,
    textDecoration: 'none',
    flexDirection: 'column'
  },
  icon: {
    fontSize: '35px'
  }
}));

function QuickReference() {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <DividerWithText value="Quick Reference" />
      <Grid container item justify="space-around" style={{ marginBottom: 15 }}>
        <Grid
          alignItems="center"
          className={classes.checkout}
          component={Link}
          container
          item
          justify="center"
          to="/my-vacation-home/check-out"
        >
          <AssignmentTurnedInOutlined className={classes.checkoutIcon} />
          <Typography>Check Out</Typography>
        </Grid>
        <Grid
          alignItems="center"
          className={classes.item}
          component={Link}
          container
          item
          justify="center"
          to="/my-vacation-home/fireplace"
        >
          <Fireplace className={classes.icon} />
          <Typography>Fireplace</Typography>
        </Grid>
        <Grid
          alignItems="center"
          className={classes.item}
          component={Link}
          container
          item
          justify="center"
          to="/my-vacation-home/parking"
        >
          <LocalParking className={classes.icon} />
          <Typography>Parking</Typography>
        </Grid>
        {/* <Grid
          alignItems="center"
          className={classes.item}
          component={Link}
          container
          item
          justify="center"
          to="/my-vacation-home/contact"
        >
          <ContactPhone className={classes.icon} />
          <Typography>Contact Us</Typography>
        </Grid> */}
        <Grid
          alignItems="center"
          className={classes.item}
          component={Link}
          container
          item
          justify="center"
          to="/my-vacation-home/general"
        >
          <Info className={classes.icon} />
          <Typography>General Info</Typography>
        </Grid>
        <Grid
          alignItems="center"
          className={classes.item}
          component={Link}
          container
          item
          justify="center"
          to="/my-vacation-home/kitchen"
        >
          <Kitchen className={classes.icon} />
          <Typography>Kitchen</Typography>
        </Grid>
        <Grid
          alignItems="center"
          className={classes.item}
          component={Link}
          container
          item
          justify="center"
          to="/my-vacation-home/entertainment"
        >
          <SportsEsports className={classes.icon} />
          <Typography>Entertainment</Typography>
        </Grid>
        <Grid
          alignItems="center"
          className={classes.item}
          component={Link}
          container
          item
          justify="center"
          to="/my-vacation-home/trash"
        >
          <Delete className={classes.icon} />
          <Typography>Trash & Recycling</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default QuickReference;
