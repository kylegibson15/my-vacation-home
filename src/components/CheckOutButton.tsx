import React from 'react';
import { Chip } from '@material-ui/core';
import { AssignmentTurnedInOutlined } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

import { useCheckOutButtonStyles } from './styles';

function CheckOutButton() {
  const classes = useCheckOutButtonStyles();
  return (
    <NavLink to="/my-vacation-home/check-out">
      <Chip
        className={classes.chip}
        icon={<AssignmentTurnedInOutlined style={{ color: 'white' }} />}
        label="Check Out"
        size="small"
      />
    </NavLink>
  );
}

export default CheckOutButton;
