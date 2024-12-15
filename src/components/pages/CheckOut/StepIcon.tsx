import React from 'react';
import {
  Check,
  Delete,
  EmojiFoodBeverage,
  EmojiObjectsOutlined,
  Hotel,
  PriorityHigh,
  MeetingRoom,
  VpnKey,
  KingBed
} from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';

interface StepIconProps {
  active?: boolean;
  completed?: boolean;
  icon: number;
}

function StepIcon({ active, completed, icon }: StepIconProps) {
  const icons = {
    1: completed ? <Check /> : <MeetingRoom />,
    2: completed ? <Check /> : <Delete />,
    3: completed ? <Check /> : <EmojiFoodBeverage />,
    4: completed ? <Check /> : <EmojiObjectsOutlined />,
    5: completed ? <Check /> : <PriorityHigh />,
    6: completed ? <Check /> : <Hotel />,
    7: completed ? <Check /> : <VpnKey />,
    8: completed ? <Check /> : <KingBed />
  };

  return (
    <Avatar
      sx={{
        bgcolor: active
          ? 'rgba(242,113,33, 1)'
          : completed
            ? 'rgba(46,42,42,1)'
            : '#ccc',
        color: 'white',
        zIndex: 1,
        width: 30,
        height: 30,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: active ? '0 4px 10px 0 rgba(0,0,0,.25)' : 'none'
      }}
    >
      {icons[icon as keyof typeof icons]}
    </Avatar>
  );
}

export default StepIcon;
