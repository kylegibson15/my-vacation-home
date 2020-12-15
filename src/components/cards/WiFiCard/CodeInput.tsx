import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  focused: {
    color: 'rgba(255, 255, 255, 1) !important'
  },
  inputLabel: {
    color: 'rgba(255, 255, 255, 0.5)'
  },
  input: {
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'center',
    fontSize: '50px',
    padding: 0
  },
  root: {
    border: '1px solid rgba(255, 255, 255, 0.2)'
  }
}));

interface ICodeInput {
  id: string;
  label: string;
}

function CodeInput({ id, label }: ICodeInput) {
  const styles = useStyles();

  return (
    <TextField
      classes={{ root: styles.root }}
      id={id}
      InputProps={{ classes: { input: styles.input } }}
      InputLabelProps={{
        classes: { root: styles.inputLabel, focused: styles.focused }
      }}
      label={label}
      rows={2}
      variant="outlined"
    />
  );
}

export default CodeInput;
