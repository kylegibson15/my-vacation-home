import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Grid2 as Grid, Typography } from '@mui/material';

import { wood_ball } from '../../images';

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: 'transparent',
  overflow: 'hidden',
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '70%',
  padding: theme.spacing(6)
}));

function Fireplace() {
  return (
    <div
      style={{ height: '100%' }}
    >
      <StyledContainer>
        <Typography variant="h4">
          Fireplace
        </Typography>

        <Typography variant="body2">
          To enjoy the fireplace, find the thermostat inside the
          shelving unit to the left of the TV. Adjust the temperature to your
          preference. The fireplace will automatically turn on and off to
          maintain the desired temperature. Please remember to turn down the
          thermostat to 60 degrees before you leave to conserve energy.
        </Typography>

        <Grid container justifyContent="center">
          <StyledImage alt="Wood Ball" src={wood_ball} />
        </Grid>
      </StyledContainer>
    </div>
  );
}

export default Fireplace;
