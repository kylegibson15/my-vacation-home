import React, { useState } from 'react';
import { Grid, makeStyles, Theme } from '@material-ui/core';

import Credentials from './Credentials';
import Lock from './Lock';

const useStyles = makeStyles((theme: Theme) => ({
  topicCard: {
    backgroundColor: 'transparent',
    padding: 0,
    margin: theme.spacing(2, 0)
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
  const [password, setPassword] = useState([1, 1, 1, 1, 1, 1]);

  function focusNextInput(idInput: string, idVal: string) {
    const nextInput = `${idInput}-${Number(idVal) + 1}`;
    const focusNext = document.getElementById(nextInput);
    focusNext?.focus();
  }

  function updatePassword(idVal: string, value: string) {
    const newPassword = [...password];
    newPassword[Number(idVal)] = Number(value);
    setPassword(newPassword);
  }

  function handleOnChange({ target }: any) {
    const { id, value } = target;
    const [idInput, idVal] = id.split('-');
    focusNextInput(idInput, idVal);
    updatePassword(idVal, value);
  }

  const correctPassword = password.join('') === process.env.REACT_APP_CODE;

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
