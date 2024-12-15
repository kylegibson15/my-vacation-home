import React from 'react';
import { Container, Typography, Box, styled } from '@mui/material';

import { coaster } from '../../images';

const StyledContainer = styled(Container)(({ theme }) => ({
  overflow: 'hidden',
}));

function Kitchen() {
  return (
    <div style={{ height: '100%' }}>
      <StyledContainer>
        <Typography variant="h4">
          Kitchen
        </Typography>

        <Typography variant="body2">
          The kitchen is stocked and ready for you to get cooking! Please be
          sure to clean your dishes and utensils before putting them away.
          Dishes need to be scraped and rinsed before going into the
          dishwasher. Load the dishwasher with any remaining dirty dishes and
          start the dishwasher prior to leaving. We will put them away for
          you.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <img
            alt="coaster"
            src={coaster}
            style={{ width: 'auto', height: '200px' }}
          />
        </Box>
      </StyledContainer>
    </div>
  );
}

export default Kitchen;
