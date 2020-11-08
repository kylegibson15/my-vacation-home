import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { TPosition } from '../types';

import { useMessageWithPictureStyles } from './styles';
import DividerWithText from './DividerWithText';

interface IMessageWithPictureProps {
  divider: { position: TPosition; text: string };
  messages: string[];
  picture: string;
}

function MessageWithPictureProps({
  divider,
  messages,
  picture
}: IMessageWithPictureProps) {
  const classes = useMessageWithPictureStyles();
  const { position, text } = divider;
  return (
    <Grid container item justify="center" style={{ color: 'white' }}>
      {position === TPosition.Both || position === TPosition.Top ? (
        <DividerWithText value={text} />
      ) : null}

      <Grid item>
        <img
          alt={`${picture}-message`}
          className={classes.image}
          src={picture}
        />
      </Grid>

      <Grid item>
        {messages.map((message) => {
          return (
            <div key={`${message.split('').splice(5)}`}>
              <Typography align="center" variant="body1">
                {message}
              </Typography>
              <br />
            </div>
          );
        })}
      </Grid>

      {position === TPosition.Both || position === TPosition.Bottom ? (
        <DividerWithText value={text} />
      ) : null}
    </Grid>
  );
}

export default MessageWithPictureProps;
