import React from 'react';
import { Grid } from '@material-ui/core';

import ImageWithDialog from './ImageWIthDialog';
import DividerWithText from './DividerWithText'
import {
  bigTrout,
  casaMexico,
  ciaoMonte,
  durbar,
  lionHeadCoffee,
  newHongKong,
  paellas,
  sushiNama
} from '../images/restaurants';

export default function ImageGridList() {
  return (
    <Grid container>
      <DividerWithText value="Restaurants" />
      <Grid container item style={{ justifyContent: 'space-around', marginTop: 10 }}>
        <ImageWithDialog
          slide="up"
          src={bigTrout}
          directions="maps.google.com/maps/dir//Big+Trout+Brewing+Company,+Vasquez+Road,+Winter+Park,+CO/@39.9174342,-105.8201299,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876a3585e5d30427:0xfd1cb3fab7f34f78!2m2!1d-105.7851104!2d39.9173736"
        />
        <ImageWithDialog
          slide="right"
          src={durbar}
          directions="maps.google.com/maps/dir//Big+Trout+Brewing+Company,+Vasquez+Road,+Winter+Park,+CO/@39.9174342,-105.8201299,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876a3585e5d30427:0xfd1cb3fab7f34f78!2m2!1d-105.7851104!2d39.9173736"
        />
        <ImageWithDialog
          slide="right"
          src={sushiNama}
          directions="maps.google.com/maps/dir//Big+Trout+Brewing+Company,+Vasquez+Road,+Winter+Park,+CO/@39.9174342,-105.8201299,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876a3585e5d30427:0xfd1cb3fab7f34f78!2m2!1d-105.7851104!2d39.9173736"
        />
        <ImageWithDialog
          slide="up"
          src={lionHeadCoffee}
          directions="maps.google.com/maps/dir//Big+Trout+Brewing+Company,+Vasquez+Road,+Winter+Park,+CO/@39.9174342,-105.8201299,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876a3585e5d30427:0xfd1cb3fab7f34f78!2m2!1d-105.7851104!2d39.9173736"
        />
        <ImageWithDialog
          slide="down"
          src={casaMexico}
          directions="maps.google.com/maps/dir//Big+Trout+Brewing+Company,+Vasquez+Road,+Winter+Park,+CO/@39.9174342,-105.8201299,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876a3585e5d30427:0xfd1cb3fab7f34f78!2m2!1d-105.7851104!2d39.9173736"
        />
        <ImageWithDialog
          slide="down"
          src={newHongKong}
          directions="maps.google.com/maps/dir//Big+Trout+Brewing+Company,+Vasquez+Road,+Winter+Park,+CO/@39.9174342,-105.8201299,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876a3585e5d30427:0xfd1cb3fab7f34f78!2m2!1d-105.7851104!2d39.9173736"
        />
        <ImageWithDialog
          slide="left"
          src={paellas}
          directions="maps.google.com/maps/dir//Big+Trout+Brewing+Company,+Vasquez+Road,+Winter+Park,+CO/@39.9174342,-105.8201299,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876a3585e5d30427:0xfd1cb3fab7f34f78!2m2!1d-105.7851104!2d39.9173736"
        />
        <ImageWithDialog
          slide="left"
          src={ciaoMonte}
          directions="maps.google.com/maps/dir//Big+Trout+Brewing+Company,+Vasquez+Road,+Winter+Park,+CO/@39.9174342,-105.8201299,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876a3585e5d30427:0xfd1cb3fab7f34f78!2m2!1d-105.7851104!2d39.9173736"
        />
      </Grid>
    </Grid>
  );
}
