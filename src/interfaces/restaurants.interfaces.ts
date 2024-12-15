import { SlideProps } from '@mui/material';

export interface IMessages {
  main: string;
  more?: string[];
}

export interface IImageWithDialogProps {
  cuisine: string[];
  messages: IMessages;
  directions: { web: string; mobile: string };
  slide: SlideProps['direction'];
  src: string;
  title?: string;
}
