import React from 'react';
import { Menu } from '@material-ui/core';
import {
  AssignmentTurnedInOutlined,
  ContactPhone,
  Fireplace,
  Info,
  Kitchen,
  LocalParking,
  SportsEsports
} from '@material-ui/icons';

import MobileMenuItem from './MobileMenuItem';

interface IProps {
  anchorEl: any;
  isOpen: boolean;
  onCloseMenu: any;
}
const items = [
  {
    icon: AssignmentTurnedInOutlined,
    path: '/my-vacation-home/check-out',
    title: 'Checking Out'
  },
  {
    icon: Fireplace,
    path: '/my-vacation-home/fireplace',
    title: 'Fireplace'
  },
  {
    icon: LocalParking,
    path: '/my-vacation-home/parking',
    title: 'Parking'
  },
  {
    icon: ContactPhone,
    path: '/my-vacation-home/contact',
    title: 'Contact Us'
  },
  {
    icon: Info,
    path: '/my-vacation-home/general',
    title: 'General Info'
  },
  {
    icon: Kitchen,
    path: '/my-vacation-home/kitchen',
    title: 'Kitchen'
  },
  {
    icon: SportsEsports,
    path: '/my-vacation-home/entertainment',
    title: 'Entertainment'
  }
];

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
      style={{ padding: 6 }}
    >
      {items.map(({ icon, path, title }) => {
        return (
          <MobileMenuItem
            key={path}
            Icon={icon}
            onClose={onCloseMenu}
            path={path}
            title={title}
          />
        );
      })}
    </Menu>
  );
}

export default MobileMenu;
