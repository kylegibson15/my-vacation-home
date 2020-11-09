import React, { ComponentType } from 'react';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';

interface IProps {
  description: string;
  AvatarIcon: ComponentType;
  mainText: string;
}

function EntertainmentListItem({ description, AvatarIcon, mainText }: IProps) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar>
          <AvatarIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={mainText} secondary={description} />
    </ListItem>
  );
}

export default EntertainmentListItem;
