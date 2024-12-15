import React from 'react';
import { Grid2 as Grid, Box, Typography } from '@mui/material';

import DividerWithText from './DividerWithText';

interface TPosition {
  position: 'Top' | 'Bottom' | 'Both';
  text: string;
}

interface IMessageWithPictureProps {
  divider: TPosition;
  messages: string[];
  picture: string;
}

function MessageWithPicture({
  divider,
  messages,
  picture
}: IMessageWithPictureProps) {
  const { position, text } = divider;

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ maxWidth: 500 }}
    >
      {(position === 'Top' || position === 'Both') && (
        <DividerWithText value={text} />
      )}

      <img alt={`${picture}-message`} src={picture} width={'80%'} style={{ margin: 18 }} />

      <Grid>
        {messages.map((message) => (
          <Box key={message} sx={{ mb: 2 }}>
            <Typography variant="body1" align="center">
              {message}
            </Typography>
          </Box>
        ))}
      </Grid>

      {(position === 'Bottom' || position === 'Both') && (
        <DividerWithText value={text} />
      )}
    </Grid>
  );
}

export default MessageWithPicture;
