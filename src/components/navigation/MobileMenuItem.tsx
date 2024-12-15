import React, { ComponentType } from 'react';
import { MenuItem, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

interface IProps {
  Icon: ComponentType;
  onClose: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  path: string;
  title: string;
}

function MobileMenuItem({ Icon, onClose, path, title }: IProps) {
  return (
    <MenuItem onClick={onClose} component={Link} to={path}>
      <IconButton size="small">
        <Icon />
      </IconButton>
      {title}
    </MenuItem>
  );
}

export default MobileMenuItem;
