import { SlideProps } from '@material-ui/core';

export interface IMessages {
  main: string;
  more?: string[];
}

export interface IImageWithDialogProps {
  cuisine: string[];
  messages: IMessages;
  directions: string;
  slide: SlideProps['direction'];
  src: string;
  title?: string;
}
