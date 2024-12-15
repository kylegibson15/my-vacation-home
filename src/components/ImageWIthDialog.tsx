import React, { useState } from 'react';
import { Box, Paper, Slide, SlideProps } from '@mui/material';

import { TopicCard } from './cards';
import { IMessages } from '../interfaces';

interface IImageWithDialogProps {
  cuisine: string[];
  messages: IMessages;
  directions: { web: string; mobile: string };
  slide: SlideProps['direction'];
  src: string;
  title?: string;
}

function ImageWithDialog({
  cuisine,
  messages,
  directions,
  slide,
  src,
  title
}: IImageWithDialogProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <img
        alt={src}
        aria-hidden
        src={src}
        onClick={handleChange}
        style={{
          height: '10vh',
          width: 'auto',
          border: '1px solid transparent'
        }}
      />
      <Slide direction={slide} in={checked} mountOnEnter unmountOnExit>
        <Paper
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent background
          }}
        >
          <Box
            sx={{
              backgroundColor: 'white',
              padding: 4,
              borderRadius: 2,
              maxWidth: '80%' // Adjust max width as needed
            }}
          >
            <TopicCard
              cuisine={cuisine}
              directions={directions}
              messages={messages}
              expandable
              handleClose={handleChange}
              img={src}
              title={title}
            />
          </Box>
        </Paper>
      </Slide>
    </>
  );
}

export default ImageWithDialog;
