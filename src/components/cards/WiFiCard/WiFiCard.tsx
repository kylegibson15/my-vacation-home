import React, { useMemo } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import Credentials from './Credentials';
import Lock from './Lock';

const useStyles = makeStyles(() => ({
  topicCard: {
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0
  },
  pos: {
    marginBottom: 12,
    paddingLeft: 6,
    color: 'white',
    width: '50%',
    borderBottom: '1px solid white'
  }
}));

export default function OutlinedCard() {
  const classes = useStyles();

  function handleOnChange(event: any) {
    const { target } = event;
  }

  const correctPassword = useMemo(() => false, []);

  return (
    <Grid className={classes.topicCard}>
      {correctPassword ? (
        <Credentials />
      ) : (
        <Lock handleOnChange={handleOnChange} />
      )}
    </Grid>
  );
}
