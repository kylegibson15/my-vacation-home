import React from 'react';
import { FormHelperText, FormControl, makeStyles } from '@material-ui/core';

import CodeInput from './CodeInput';

const useStyles = makeStyles(() => ({
  form: {
    flexDirection: 'row'
  }
}));

interface ILock {
  handleOnChange: any;
}

const inputs = [
  { id: 'input-0', label: 'W' },
  { id: 'input-1', label: 'I' },
  { id: 'input-2', label: 'F' },
  { id: 'input-3', label: 'I' },
  { id: 'input-4', label: '.' },
  { id: 'input-5', label: '.' }
];

function Lock({ handleOnChange }: ILock) {
  const classes = useStyles();
  return (
    <>
      <FormHelperText style={{ color: 'white', margin: '5px' }}>
        Use the lockbox code to gain access to the wifi password
      </FormHelperText>
      <FormControl className={classes.form} onChange={handleOnChange}>
        {inputs.map(({ id, label }) => (
          <CodeInput id={id} label={label} />
        ))}
      </FormControl>
    </>
  );
}

export default Lock;
