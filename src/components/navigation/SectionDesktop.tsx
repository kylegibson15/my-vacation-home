import React from 'react';
import { IconButton } from '@mui/material';
import { AssignmentTurnedInOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const SectionDesktop = () => {
  const StyledSectionDesktop = styled('div')(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  }));

  return (
    <StyledSectionDesktop>
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
    </StyledSectionDesktop>
  );
};

export default SectionDesktop;
