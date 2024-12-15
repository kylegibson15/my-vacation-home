import React from 'react';
import { Menu } from '@mui/material';
import {
  AssignmentTurnedInOutlined,
  Delete,
  Fireplace,
  Info,
  Kitchen,
  LocalParking,
  SportsEsports
} from '@mui/icons-material';

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
    icon: Delete,
    path: '/my-vacation-home/trash',
    title: 'Trash & Recycling'
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
      keepMounted
      open={isOpen}
      onClose={onCloseMenu}
      sx={{ padding: 1 }} // Using sx prop for padding
    >
      {items.map(({ icon, path, title }) => (
        <MobileMenuItem
          Icon={icon}
          key={path}
          onClose={onCloseMenu}
          path={path}
          title={title}
        />
      ))}
    </Menu>
  );
}

export default MobileMenu;
