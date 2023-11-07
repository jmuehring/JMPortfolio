import React from 'react';
import { Typography, Paper, Divider, Box, Link, List, Grid } from '@mui/material';
import assets from '../../assets/index';

const Rocklands = () => {
  const climbs = {
    v13: ['Mooiste Moosie', 'The Vice', 'Guest List', 'Hipster Whale'],
    v12: ['Black Shadow', 'Shoshaloza', 'Law and Order', 'Industry of Cool'],
    v11: [
      'Art Project',
      'Black Velvet',
      'Gliding through Waves like Dolphins',
      'Witness the Sickness',
      'Flying Guitar Thief',
      'Dove Tongue Degressor',
      'First Blood',
      'The Amphitheater',
      'Golden Virginia',
    ],
    v10: ['Lipstick on a Pig', 'Hole in One', 'Caroline', 'Macho King', 'Disarray', 'Leap of Faith'],
    v9: ['Sunset Arete', 'Timeout', 'Cedar Spine', 'Vlad the Impaler'],
  };
  return (
    <Paper elevation={3} sx={{ padding: 3, margin: 3 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Rocklands, South Africa
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom fontWeight='bold'>
        Summer 2023
      </Typography>
      <Box sx={{ my: 2 }}>
        <Typography paragraph>
          For years I've dreamed about going to this iconic bouldering destination, but the opportunity never arose due to either money, prior commitments, or simply no crew is psyched to go. The past Summer, I got a message from a friend I met on my gap year when I lived in a minivan that a crew in SLC, UT were psyched to go. All those years of yearning were now a real possibility and I hopped on this opportunity as I didn’t know when schedules would line up like that again!
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ my: 2 }}>
        <Typography paragraph>
         On our way to Clanwilliam, three hours north of Cape Town, the trip did not start without a hitch. Five big guys packed in a tiny corolla (to save money!) with all of our gear and crashpads was too much and one of our tires popped. With a 
         doughnut spare, we limped our way to a town fourty-five minutes away to get a new tire. After an exhausting journey, we made it to our housing: a small rudimentary hut that hosted a variety of puddles inside. It was our home for the next 
         eight weeks. 
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', my: 2 }}>
  <Box sx={{ maxWidth: '33%', maxHeight: '300px', p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img 
      alt="Room1"
      src={assets.images.room1}
      style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto', objectFit: 'contain' }} 
    />
  </Box>
  <Box sx={{ maxWidth: '33%', maxHeight: '300px', p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img 
      alt="Room2"
      src={assets.images.room2}
      style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto', objectFit: 'contain' }} 
    />
  </Box>
  <Box sx={{ maxWidth: '33%', maxHeight: '300px', p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img 
      alt="Room3"
      src={assets.images.room3}
      style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto', objectFit: 'contain' }} 
    />
  </Box>
</Box>  
        <Typography align="center">
          Apologies for the bad quality images, screencaptures from a video I took
        </Typography>
        <Divider>

        </Divider>
        <br />  
        <Typography paragraph>
          
          After some bouts of rain, it was time to climb. Even with all the videos I've watched, my expectations were surpassed with the vast amounts
          of rock just everywhere! I didn't have a strong desire to project a singular climb, but sample all the climbs Rocklands could offer - and there was a lot. 
          <br />
          Even though I wasn't in peak climbing shape, I tried a multitude of hard climbs: including historic climbs Fred Nicole put up in 2002 (I was just born!).
        </Typography>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
               alt="Room3"
              src={assets.images.blackeagle}
              style={{ maxWidth: '50%', maxHeight: '50%', height: 'auto', width: 'auto', objectFit: 'contain' }} 
            />
        
        </Box>
        <Typography align="center">
              Picture courtesy of Porter Geddes | Me on Fred Nicole's Black Eagle v13 
        </Typography>
        <Divider>
        </Divider>
        <br/>
        <Typography paragraph> 
        ligma
        </Typography>
        <Divider>

        </Divider>
        <br />
        

        <Typography align = "center" fontWeight = "bold" fontSize = '1.5rem'>
          Tick List
        </Typography>
        <Grid container spacing={2}>
        
        {Object.entries(climbs).map(([grade, climbsList]) => (
          <Grid item xs={12} sm={6} md={2.4} key={grade}>
            <Typography variant="h6" gutterBottom>
              {grade}
            </Typography>
            {climbsList.map((climb, index) => (
              <Typography key={index}>{climb}</Typography>
            ))}
          </Grid>
        ))}
      </Grid>
        
      </Box>
    </Paper>
  );
};

export default Rocklands;