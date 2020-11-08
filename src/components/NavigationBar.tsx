import React from 'react';
import {
  AppBar,
  Badge,
  Container,
  Fab,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useScrollTrigger,
  Zoom
} from '@material-ui/core';
import {
  AssignmentTurnedInOutlined,
  KeyboardArrowUp,
  Mail,
  Menu as MenuIcon,
  MoreVert,
  Notifications
} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import { useNavigationBarStyles } from './styles';

interface Props {
  children: React.ReactElement;
}

function ScrollTop({ children }: Props) {
  const classes = useNavigationBarStyles();
  const trigger = useScrollTrigger({
    // target: window ? window() : undefined,
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
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function NavigationBar({ children, ...props }: Props) {
  const classes = useNavigationBarStyles();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl
  ] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  console.log({ location });
  return (
    <>
      <AppBar
        style={{
          backgroundImage:
            'linear-gradient(to right, #374364, #364a68, #37506b, #39566e, #3c5c70, #2e6576, #1e6e78, #167675, #27805f, #59863b, #8f8417, #ca761b)'
        }}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
          {/* <div className={classes.grow} /> */}
          <div className={classes.sectionDesktop}>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <Notifications />
              </Badge>
            </IconButton> */}
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
              component={Link}
              to="/my-vacation-home/check-out"
            >
              <AssignmentTurnedInOutlined />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls="primary-search-account-menu-mobile"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              style={{ padding: 0 }}
            >
              <MoreVert />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id="primary-search-account-menu-mobile"
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
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
          // onClick={handleProfileMenuOpen}
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
      <Toolbar id="back-to-top-anchor" />
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundImage:
            'linear-gradient(to bottom, #374364, #364a68, #37506b, #39566e, #3c5c70, #2e6576, #1e6e78, #167675, #27805f, #59863b, #8f8417, #ca761b)'
        }}
        maxWidth="md"
      >
        {children}
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default NavigationBar;
