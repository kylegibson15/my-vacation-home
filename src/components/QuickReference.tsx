import React from 'react';
import { Card, CardContent, CardMedia, Grid2 as Grid, Typography } from '@mui/material';

import DividerWithText from './DividerWithText';
import { Link } from 'react-router';
import { AssignmentTurnedInOutlined, Delete, Fireplace, Info, Kitchen, LocalParking, SportsEsports } from '@mui/icons-material';

const items = [
  { title: "Check Out", route: "check-out", icon: AssignmentTurnedInOutlined },
  { title: "Fireplace", route: "fireplace", icon: Fireplace },
  { title: "Parking", route: "parking", icon: LocalParking },
  { title: "General", route: "general", icon: Info },
  { title: "Kitchen", route: "kitchen", icon: Kitchen },
  { title: "Entertainment", route: "entertainment", icon: SportsEsports },
  { title: "Trash & Recycling", route: "trash", icon: Delete },
];

function QuickReference() {
  return (
    <Grid container spacing={2} justifyContent="center">
      <DividerWithText value="Quick Reference" />
      <Grid container spacing={2} justifyContent="space-between">
        {items.map((item) => (
          <Grid sx={{ width: item.route === 'trash' ? '100%' : '46%' }} key={item.route}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Link to={`/my-vacation-home/${item.route}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <CardMedia
                    component="div"
                    sx={{ height: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <item.icon fontSize="large" color="primary" />
                  </CardMedia>
                  <Typography gutterBottom>
                    {item.title}
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default QuickReference;
