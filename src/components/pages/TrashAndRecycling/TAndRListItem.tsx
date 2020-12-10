import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

interface IProps {
  description: string[];
}

function TrashAndRecyclingListItem({ description }: IProps) {
  return (
    <ListItem alignItems="flex-start" style={{ flexDirection: 'column' }}>
      {description.map((msg) => (
        <ListItemText secondary={msg} />
      ))}
    </ListItem>
  );
}

export default TrashAndRecyclingListItem;
