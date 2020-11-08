import React from 'react';
import { IconButton } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

import { useNavigationBarStyles } from '../styles';

interface IProps {
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

function SectionMobile({ onOpen }: IProps) {
  const classes = useNavigationBarStyles();

  return (
    <div className={classes.sectionMobile}>
      <IconButton
        aria-label="show more"
        aria-controls="primary-search-account-menu-mobile"
        aria-haspopup="true"
        onClick={onOpen}
        color="inherit"
        style={{ padding: 0 }}
      >
        <MoreVert />
      </IconButton>
    </div>
  );
}

export default SectionMobile;
