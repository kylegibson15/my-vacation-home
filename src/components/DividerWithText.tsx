import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface IDividerWithTextProps {
  value: string;
}

const StyledDividerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(2),
  width: '90%'
}));

const StyledDividerBorder = styled(Box)({
  borderBottom: '2px solid lightgray',
  flex: 1
});

const StyledDividerText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '1.25rem', // Adjust font size as needed
  color: 'lightgray',
  padding: theme.spacing(0.5)
}));

function DividerWithText({ value }: IDividerWithTextProps) {
  return (
    <StyledDividerContainer>
      <StyledDividerBorder />
      <StyledDividerText>{value}</StyledDividerText>
      <StyledDividerBorder />
    </StyledDividerContainer>
  );
}

export default DividerWithText;
