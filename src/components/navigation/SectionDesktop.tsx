import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { AssignmentTurnedInOutlined } from '@material-ui/icons';

import { useNavigationBarStyles } from '../styles';

function SectionDesktop() {
  const classes = useNavigationBarStyles();
  return (
    <div className={classes.sectionDesktop}>
      <IconButton
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
        component={Link}
        to="/my-vacation-home/check-out"
      >
        <AssignmentTurnedInOutlined />
      </IconButton>
    </div>
  );
}

export default SectionDesktop;
