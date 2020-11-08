import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, IconButton } from '@material-ui/core';
import {
  AssignmentTurnedInOutlined,
  Mail,
  Notifications
} from '@material-ui/icons';

import { useNavigationBarStyles } from '../styles';

function SectionDesktop() {
  const classes = useNavigationBarStyles();
  return (
    <div className={classes.sectionDesktop}>
      <IconButton aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="secondary">
          <Mail />
        </Badge>
      </IconButton>
      <IconButton aria-label="show 17 new notifications" color="inherit">
        <Badge badgeContent={17} color="secondary">
          <Notifications />
        </Badge>
      </IconButton>
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
