import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container
} from '@mui/material';
import { Home } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

import MobileMenu from './MobileMenu';
import SectionDesktop from './SectionDesktop';
import SectionMobile from './SectionMobile';

const locationTitles: Record<string, string> = {
  '/my-vacation-home': 'Home',
  '/my-vacation-home/check-out': 'Checking Out',
  '/my-vacation-home/fireplace': 'Fireplace',
  '/my-vacation-home/parking': 'Parking',
  '/my-vacation-home/contact': 'Contact Us',
  '/my-vacation-home/general': 'General Info',
  '/my-vacation-home/kitchen': 'Kitchen',
  '/my-vacation-home/entertainment': 'Entertainment',
  '/my-vacation-home/trash': 'Trash'
};

function NavigationBar({ children }: React.PropsWithChildren) {
  const { pathname } = useLocation();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <>
      <AppBar>
        <Toolbar style={{ justifyContent: 'space-between', backgroundColor: "#457b9d" }}>
          <IconButton
            edge="start"
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
      <Container
        maxWidth="md"
        style={{ paddingTop: 100, paddingBottom: 100 }}
      >
        {children}
      </Container>
    </>
  );
}

export default NavigationBar;
