import React from 'react';
import {
  Container,
  Grid2 as Grid,
  Typography,
  Box,
  styled
} from '@mui/material';
import { buffalo } from '../../images';

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: 'transparent',
  overflow: 'hidden',
}));

function Contact() {
  return (
    <div style={{ height: '100%' }}>
      <StyledContainer>
        <Typography variant="h4">
          Contact
        </Typography>

        <Typography variant="body2" color="textPrimary">
          Message or call Vacasa at. They will be able to help you.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Grid container>
            <img
              alt="wood-ball"
              src={buffalo}
              style={{ width: 'auto', height: '200px' }}
            />
          </Grid>
        </Box>
      </StyledContainer>
    </div>
  );
}

export default Contact;
