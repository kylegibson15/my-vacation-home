import React from 'react';
import { IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

interface IProps {
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

function SectionMobile({ onOpen }: IProps) {
  const StyledSectionMobile = styled('div')(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }));

  return (
    <StyledSectionMobile>
      <IconButton
        aria-label="show more"
        onClick={onOpen}
        color="inherit"
        size="large"
      >
        <MoreVert />
      </IconButton>
    </StyledSectionMobile>
  );
}

export default SectionMobile;
