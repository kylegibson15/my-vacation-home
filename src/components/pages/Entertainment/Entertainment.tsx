import React from 'react';
import { Container, Divider, List, Typography } from '@mui/material';
import { SportsEsports, Tv } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import EntertainmentListItem from './EntertainmentListItem';

const StyledContainer = styled(Container)(() => ({
  overflow: 'hidden',
}));

function Entertainment() {
  return (
    <div style={{ height: '100%' }}>
      <StyledContainer>
        <Typography variant="h4">
          Entertainment
        </Typography>

        <Typography variant="body2">
          While you have likely traveled to Grand County for leisure and
          adventure outside of your sleeping arrangements, we hope our
          mountain retreat still has plenty for you to stay entertained:
        </Typography>

        <List>
          <EntertainmentListItem
            mainText="Games"
            description="A variety of board games are waiting for you on the shelf left side of the fireplace including games for kids."
          >
            <SportsEsports />
          </EntertainmentListItem>

          <Divider variant="inset" component="li" />

          <EntertainmentListItem
            mainText="TV"
            description="Cable is ready for you in both the living room and bedrooms. The remotes will do everything that you need."
          >
            <Tv />
          </EntertainmentListItem>
        </List>
      </StyledContainer>
    </div>
  );
}

export default Entertainment;
