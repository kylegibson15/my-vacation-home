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
    <Grid container spacing={1} justifyContent="center">
      <DividerWithText value="Quick Reference" />
      <Grid container justifyContent="space-between">
        {items.map((item) => (
          <Grid sx={{ width: item.route === 'trash' ? '100%' : '46%' }} key={item.route}>
            <Card sx={{ borderRadius: 1, backgroundColor: "#457B9D", color: 'white', boxShadow: '2px 2px 2px 1px #1D3557' }} >
              <CardContent sx={{ textAlign: 'center' }}>
                <Link to={`/my-vacation-home/${item.route}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <CardMedia
                    component="div"
                    sx={{ height: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <item.icon fontSize="large" />
                  </CardMedia>
                  <Typography>
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
