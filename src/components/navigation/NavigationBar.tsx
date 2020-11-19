import React, { useState } from 'react';
import {
  AppBar,
  Container,
  Fab,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import { Home, KeyboardArrowUp } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import { useNavigationBarStyles } from '../styles';

import ScrollTopButton from './ScrollTopButton';
import SectionDesktop from './SectionDesktop';
import SectionMobile from './SectionMobile';
import MobileMenu from './MobileMenu';

const locationTitles: Record<string, string> = {
  '/my-vacation-home': 'Home',
  '/my-vacation-home/check-out': 'Checking Out',
  '/my-vacation-home/fireplace': 'Fireplace',
  '/my-vacation-home/parking': 'Parking',
  '/my-vacation-home/contact': 'Contact Us',
  '/my-vacation-home/general': 'General Info',
  '/my-vacation-home/kitchen': 'Kitchen',
  '/my-vacation-home/entertainment': 'Entertainment'
};

interface Props {
  children: React.ReactElement;
}

function NavigationBar({ children, ...props }: Props) {
  const classes = useNavigationBarStyles();
  const { pathname } = useLocation();
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl
  ] = useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <>
      <AppBar
        style={{
          background: '#39566e'
          // background: 'linear-gradient(to right, #004e92, #000428)'
        }}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            component={Link}
            to="/my-vacation-home"
          >
            <Home />
          </IconButton>
          <Typography variant="h6" noWrap>
            {locationTitles[pathname]}
          </Typography>
          <SectionDesktop />
          <SectionMobile onOpen={handleMobileMenuOpen} />
        </Toolbar>
      </AppBar>
      <MobileMenu
        anchorEl={mobileMoreAnchorEl}
        isOpen={isMobileMenuOpen}
        onCloseMenu={handleMobileMenuClose}
      />
      <Toolbar id="back-to-top-anchor" />
      <Container className={classes.barContainer} maxWidth="md">
        {children}
      </Container>
      <ScrollTopButton {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTopButton>
    </>
  );
}

export default NavigationBar;
