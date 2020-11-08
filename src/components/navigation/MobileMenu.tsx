import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, IconButton, Menu, MenuItem } from '@material-ui/core';
import {
  AssignmentTurnedInOutlined,
  Mail,
  Notifications
} from '@material-ui/icons';

interface IProps {
  anchorEl: any;
  isOpen: boolean;
  onCloseMenu: any;
}

function MobileMenu({ anchorEl, isOpen, onCloseMenu }: IProps) {

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="primary-search-account-menu-mobile"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isOpen}
      onClose={onCloseMenu}
    >
      <MenuItem dense>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Mail />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem dense>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem
        component={Link}
        dense
        onClick={onCloseMenu}
        to="/my-vacation-home/check-out"
      >
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AssignmentTurnedInOutlined />
        </IconButton>
        <p>Check Out</p>
      </MenuItem>
    </Menu>
  );
}

export default MobileMenu;
