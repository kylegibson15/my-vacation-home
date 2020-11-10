import React, { ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, IconButton } from '@material-ui/core';

interface IProps {
  Icon: ComponentType;
  onClose: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  path: string;
  title: string;
}

function MobileMenuItem({ Icon, onClose, path, title }: IProps) {
  return (
    <MenuItem component={Link} dense onClick={onClose} to={path}>
      <IconButton color="inherit">
        <Icon />
      </IconButton>
      <p>{title}</p>
    </MenuItem>
  );
}

export default MobileMenuItem;
