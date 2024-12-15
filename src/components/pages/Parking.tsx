import React from 'react';
import { Container, Typography, Box, styled } from '@mui/material';

import { bear } from '../../images';

const StyledContainer = styled(Container)(({ theme }) => ({
  overflow: 'hidden',
}));

function Parking() {
  return (
    <div style={{ height: '100%' }}>
      <StyledContainer>
        <Typography variant="h4">
          Parking
        </Typography>

        <Typography variant="body2">
          Parking is located underneath the building and unassigned but only
          one car please.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <img
            alt="wood-ball"
            src={bear}
            style={{ width: 'auto', height: '300px' }}
          />
        </Box>
      </StyledContainer>
    </div>
  );
}

export default Parking;
