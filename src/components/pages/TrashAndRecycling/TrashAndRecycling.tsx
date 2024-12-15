import React from 'react';
import { Container, Grid2 as Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { dumpster, garage_dumpster, posted_sign } from '../../../images';
import TrashAndRecyclingListItem from './TAndRListItem';

const StyledContainer = styled(Container)(({ theme }) => ({
  height: '100%',
  flexGrow: 1,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2, 0),
  margin: 0,
  overflowY: 'hidden'
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3)
}));

function TrashAndRecycling() {
  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h4" color="textPrimary">
          Trash & Recycling
        </Typography>

        <Typography variant="body2" color="textPrimary">
          We have two dumpsters located in the parking lot, one for trash and
          one for recycling (picture below).
        </Typography>

        <Grid container justifyContent="center" style={{ marginTop: 20, marginBottom: 20 }}>
          <img alt="dumpster" src={dumpster} style={{ width: '80%' }} />
        </Grid>

        <TrashAndRecyclingListItem
          description={[
            `These dumpsters are also shared with Winter Park Station tenants.`,
            `The recycling dumpster has a yellow lid.`,
            `Attached please find the recycling poster and a guidance what to recycle.`,
            `Please break down all boxes before putting them in the dumpster.`
          ]}
        />

        <Grid container justifyContent="center" style={{ marginTop: 20, marginBottom: 20 }}>
          <img
            alt="garage-dumpster"
            src={garage_dumpster}
            style={{ width: '80%' }}
          />
        </Grid>

        <TrashAndRecyclingListItem
          description={[
            'For your convenience we have two trash bins located in the garage for any household trash (picture below).',
            'These dumpsters need to be emptied daily into the main dumpster since Waste Management trucks don’t fit in the garage to service them.',
            'Please do not pile the trash on the floor by these dumpsters.',
            'If they are full, you need to take the trash to the dumpster in the parking lot.',
            'The wildlife is very active (and hungry) in the mountains.'
          ]}
        />

        <Grid container justifyContent="center" style={{ marginTop: 20, marginBottom: 20 }}>
          <img alt="posted-sign" src={posted_sign} style={{ width: '60%' }} />
        </Grid>
      </StyledPaper>
    </StyledContainer>
  );
}

export default TrashAndRecycling;
