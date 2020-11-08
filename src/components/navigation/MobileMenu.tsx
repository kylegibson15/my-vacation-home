import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, IconButton, Menu, MenuItem } from '@material-ui/core';
import {
  AssignmentTurnedInOutlined,
  Fireplace,
  Mail
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
      <MenuItem
        component={Link}
        dense
        onClick={onCloseMenu}
        to="/my-vacation-home/fireplace"
      >
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Fireplace />
        </IconButton>
        <p>Fireplace</p>
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
