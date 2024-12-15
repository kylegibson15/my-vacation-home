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
  fontSize: '1rem', // Adjust font size as needed
  padding: theme.spacing(2)
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
