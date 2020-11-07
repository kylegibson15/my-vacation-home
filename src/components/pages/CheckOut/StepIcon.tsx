import React from 'react';
import clsx from 'clsx';
import { StepIconProps as IStepIconProps, makeStyles } from '@material-ui/core';
import {
  KingBed,
  Check,
  Delete,
  EmojiFoodBeverage,
  EmojiObjectsOutlined,
  Hotel,
  PriorityHigh,
  MeetingRoom,
  VpnKey
} from '@material-ui/icons';

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 30,
    height: 30,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  },
  completed: {
    backgroundImage:
      'linear-gradient(136deg, rgba(46,42,42,1) 0%, rgba(72,84,43,1) 5%, rgba(82,101,44,1) 9%, rgba(89,113,44,1) 13%, rgba(149,208,47,1) 100%)'
  }
});
const ICON_SIZE = 'small';
function StepIcon({ active, completed, icon }: IStepIconProps) {
  const classes = useColorlibStepIconStyles();

  const icons: { [index: string]: React.ReactElement } = {
    1: completed ? (
      <Check fontSize={ICON_SIZE} />
    ) : (
      <MeetingRoom fontSize={ICON_SIZE} />
    ),
    2: completed ? (
      <Check fontSize={ICON_SIZE} />
    ) : (
      <Delete fontSize={ICON_SIZE} />
    ),
    3: completed ? (
      <Check fontSize={ICON_SIZE} />
    ) : (
      <EmojiFoodBeverage fontSize={ICON_SIZE} />
    ),
    4: completed ? (
      <Check fontSize={ICON_SIZE} />
    ) : (
      <EmojiObjectsOutlined fontSize={ICON_SIZE} />
    ),
    5: completed ? (
      <Check fontSize={ICON_SIZE} />
    ) : (
      <PriorityHigh fontSize={ICON_SIZE} />
    ),
    6: completed ? (
      <Check fontSize={ICON_SIZE} />
    ) : (
      <Hotel fontSize={ICON_SIZE} />
    ),
    7: completed ? (
      <Check fontSize={ICON_SIZE} />
    ) : (
      <VpnKey fontSize={ICON_SIZE} />
    ),
    8: completed ? (
      <Check fontSize={ICON_SIZE} />
    ) : (
      <KingBed fontSize={ICON_SIZE} />
    )
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(icon)]}
    </div>
  );
}

export default StepIcon;
