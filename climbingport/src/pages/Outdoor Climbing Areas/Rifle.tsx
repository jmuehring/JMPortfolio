import React from 'react';
import { Typography, Paper, Divider, Box, Grid, Stack } from '@mui/material';

type Props = {};

const Rifle = (props: Props) => {
  return (
    <Paper elevation={3} sx={{ padding: 3, margin: 3 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Rifle, Colorado
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom fontWeight='bold'>
        Summer 2021/2022
      </Typography>
      <Box sx={{ my: 2 }}>
        <Typography paragraph>
          Despite not being a sport climber, I've always enjoyed this place for it's cryptic and unique movement it offered. In all the places I have sport climbed, hands down this 
          place has beat it all. From being roadside, friendly community, and surperb climbing, I always find myself coming back here. 
        </Typography>
        <Divider>
        </Divider>
        

      </Box>
    </Paper>
    
  );
};

export default Rifle;