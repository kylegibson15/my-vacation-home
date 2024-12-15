import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface IProps {
  description: string[];
}

function TrashAndRecyclingListItem({ description }: IProps) {
  return (
    <List dense>
      {description.map((msg) => (
        <ListItem key={msg}>
          <ListItemText
            primary={msg}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default TrashAndRecyclingListItem;
