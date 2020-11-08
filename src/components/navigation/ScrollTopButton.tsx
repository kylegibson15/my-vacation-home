import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollTrigger, Zoom } from '@material-ui/core';

import { useNavigationBarStyles } from '../styles';

interface Props {
  children: ReactElement;
}

function ScrollTopButton({ children }: Props) {
  const classes = useNavigationBarStyles();
  const { pathname } = useLocation();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger && pathname === '/my-vacation-home'}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default ScrollTopButton;
