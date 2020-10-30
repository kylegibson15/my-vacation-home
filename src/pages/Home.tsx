import React, { FC } from 'react'
import { Chip, Grid } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined'

import { TheLiftWinterParkCard, TopicCard, WiFiCard } from '../components/cards'
import yellowstone from '../images/yellowstone-buffalo.png'

export const Home: FC = () => {
  return (
    <>
      <NavLink to="/my-vacation-home/check-out">
        <Chip
          icon={<AssignmentTurnedInOutlinedIcon style={{ color: 'white' }} />}
          label="Check Out"
          size="small"
          style={{
            boxShadow:
              '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
            color: 'white',
            backgroundColor: '#CA761B',
            padding: '0px 8px',
            position: 'fixed',
            top: 15,
            right: 15,
            zIndex: 10,
          }}
        />
      </NavLink>
      <WiFiCard />
      <Grid item>
        <img alt="yellowstone-buffalo" src={yellowstone} style={{ width: '50%' }} />
      </Grid>
      <TheLiftWinterParkCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />
    </>
  )
}
