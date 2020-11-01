import React, { FC } from 'react'
import { Chip, Grid, Typography, useTheme } from '@material-ui/core'
import { AssignmentTurnedInOutlined } from '@material-ui/icons'
import { NavLink } from 'react-router-dom'

import {
  // PictureCard,
  RestaurantsCard,
  TheLiftWinterParkCard,
  TopicCard,
  WiFiCard,
} from '../components/cards'
import moose from '../images/moose.png'

export const Home: FC = () => {
  const theme = useTheme()
  return (
    <>
      <NavLink to="/my-vacation-home/check-out">
        <Chip
          icon={<AssignmentTurnedInOutlined style={{ color: 'white' }} />}
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
      <Grid
        alignItems="center"
        container
        justify="center"
        spacing={6}
        style={{ color: 'white' }}
      >
        <Grid item>
          <img
            alt="moose"
            style={{
              boxShadow:
                '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
              width: '90vw',
            }}
            src={moose}
          />
          <Typography
            align="center"
            variant="h3"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            FUN QUOTE HERE
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center" variant="body1">
            We are thrilled you chose our mountain retreat for your own getaway!
            Whether you are here for world-class golfing, extreme mountain
            biking, or just to relax, we hope your stay is everything you
            envisioned. Colorado is our permanent home and Summit County is our
            favorite place to be! Strolling along Snake River, skiing Keystone,
            hiking the Colorado Trail, eating at Dillon Dam Brewery, shopping
            the outlets, biking Keystone Gulch, ice skating at Lakeside
            Village... these are a few of our favorite things!
          </Typography>
          <br />
          <Typography align="center" variant="body1">
            We hope this little book will help make your stay easier and gives
            you a way to feel at home. In here you will find contact info,
            amenity access, transportation schedules, dining recommendations and
            more.
          </Typography>
        </Grid>
        <Grid item>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 15,
              width: '90vw',
            }}
          >
            <div
              style={{
                borderBottom: '2px solid lightgray',
                width: '100%',
              }}
            />
            <span
              style={{
                paddingTop: theme.spacing(0.5),
                paddingBottom: theme.spacing(0.5),
                paddingRight: theme.spacing(2),
                paddingLeft: theme.spacing(2),
                fontWeight: 500,
                fontSize: 22,
                color: 'lightgray',
              }}
            >
              {/* <ArrowDownward /> */}
              Enjoy!
            </span>
            <div
              style={{
                borderTop: '2px solid lightgray',
                width: '100%',
              }}
            />
          </div>
        </Grid>
      </Grid>
      {/* <PictureCard /> */}
      {/* <Grid item>
        <img alt="yellowstone-buffalo" src={yellowstone} style={{ width: '50%' }} />
      </Grid> */}
      <TheLiftWinterParkCard />
      <RestaurantsCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />
    </>
  )
}
