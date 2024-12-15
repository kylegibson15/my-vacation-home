import React from 'react';
import { Container, Divider, List, Typography } from '@mui/material';
import {
  Wc,
  AcUnit,
  MusicNote,
  Delete,
  SmokeFree
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import GeneralInfoListItem from './GeneralInfoListItem';

const StyledContainer = styled(Container)(() => ({
  backgroundColor: 'transparent',
  overflow: 'hidden',
}));

function GeneralInfo() {
  return (
    <div style={{ height: '100%' }}>
      <StyledContainer>
        <Typography variant="h4">
          General Info
        </Typography>
        <List>
          <GeneralInfoListItem
            mainText="Shoes"
            description="Please remove your shoes at the door."
          >
            <Wc />
          </GeneralInfoListItem>
          <Divider variant="inset" component="li" />
          <GeneralInfoListItem
            mainText="Ski's / Boards / SUP"
            description="NO skis, snowboards, SUP boards, etc in the unit. Use the storage locker #302 on the same floor of the condo near the elevator with the provided key."
          >
            <AcUnit />
          </GeneralInfoListItem>
          <Divider variant="inset" component="li" />
          <GeneralInfoListItem
            mainText="Noise"
            description="Be respectful of your neighbors, noise travels in shared spaces. Quiet hours are 10pm to 9am."
          >
            <MusicNote />
          </GeneralInfoListItem>
          <Divider variant="inset" component="li" />
          <GeneralInfoListItem
            mainText="Trash"
            description="Do not leave anything outside of the home in the hall. You may take your excess trash and/or recycling to the trash bin in the garage."
          >
            <Delete />
          </GeneralInfoListItem>
          <Divider variant="inset" component="li" />
          <GeneralInfoListItem
            mainText="Smoking"
            description="Absolutely NO smoking of ANY kind, including vape pens and Mary Jane."
          >
            <SmokeFree />
          </GeneralInfoListItem>
        </List>
      </StyledContainer >
    </div >
  );
}

export default GeneralInfo;
