import React from 'react';
import { Grid } from '@material-ui/core';

import { useDividerWithTextStyles } from './styles';

interface IDividerWithTextProps {
  value: string;
}

function DividerWithText({ value }: IDividerWithTextProps) {
  const classes = useDividerWithTextStyles();
  return (
    <Grid item>
      <div className={classes.dividerContainer}>
        <div className={classes.dividerBorder} />
        <span className={classes.dividerText}>{value}</span>
        <div className={classes.dividerBorder} />
      </div>
    </Grid>
  );
}

export default DividerWithText;
