import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';

interface IProps extends React.PropsWithChildren {
  description: string;
  mainText: string;
}

function EntertainmentListItem({ description, children, mainText }: IProps) {
  return (
    <ListItem >
      <ListItemAvatar>
        <Avatar>
          {children}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={mainText} secondary={description} />
    </ListItem>
  );
}

export default EntertainmentListItem;
