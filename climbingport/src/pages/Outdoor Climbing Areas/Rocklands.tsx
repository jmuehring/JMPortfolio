import React from 'react';
import { Typography, Paper, Divider, Box, Link, List, Grid, Stack } from '@mui/material';
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
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2, overflow: 'hidden' }}> 
  <Box sx={{ maxWidth: '50%', mx: 4 }}>
    <Typography> 
      After some bouts of rain, it was time to climb. Even with all the videos I've watched, my expectations were surpassed with the vast amounts
      of rock just everywhere! I didn't have a strong desire to project a singular climb, but sample all the climbs Rocklands could offer - and there was a lot. 
      <br />
      <br />
      Even though I wasn't in peak climbing shape, I tried a multitude of hard climbs: including historic climbs Fred Nicole put up in 2002 (I was just born!). 
      As someone that favors powerful, dynamic moves, Rocklands was a playground with the heavily featured rock.
    </Typography>
  </Box>
  <Box sx={{ maxWidth: '50%', mx: 'auto', textAlign: 'center' }}>
    <img 
      alt="blackeagle"
      src={assets.images.blackeagle}
      style={{ width: '100%', height: 'auto', objectFit: 'contain' }} 
    />
    <Typography align="center"> 
      Picture courtesy of Porter Geddes | Me on Fred Nicole's Black Eagle v13 
    </Typography>
  </Box>
</Box>



        <Box sx={{ display: 'flex', my: 2, overflow: 'hidden' }}> 
          <Stack> 
            <img 
              alt="prow"
              src={assets.images.prow}
              style={{height: '700px', objectFit: 'contain' }} 
            />
            <Typography align = "center"> 
              Picture courtesy of Porter Geddes 
            </Typography>
          </Stack>
          <Box sx={{ ml: 10, maxWidth: '50%'}}>
            <br />
            <br />
            <br />
            <Typography> 
              One of my favorite moments was this deep water solo called "First Rule of Night Club". Lying in a canyon, you climb an impressive prow over a raging waterfall
              high above the freezing water, testing your mental fortitude and strength. My crew decided to rope it down to check out the holds
              and rehearse some of the moves before doing it without a rope. However, I decided to do it ground up with no rehearsal to test my mental strength which may or may not have between
              the smartest move given my weak swimming skills!
              One slip, one mistake and you go plunging into the ice cold water. 
              <br />
              <br />
              My first go, I was focused. Regulating my breathing, I moved through each grip trying not to overgrip
              to keep my strength. I could feel the gust of wind from the waterfall and was constantly reminded of the water far below me. I got to the last hard move, it was a deep lock off of a bad right hand with a high tensioned left foot. I reached, but not enough. 
              I slowly peeled off the wall and plunged into the cold water. 
              <br />
              <br />
              An hour passes, the opportunity arose again to give another attempt. I was mentally unsure if it was going to be possible. On one hand, I know the climb up to that point I fell and could move quickly through that section. On the other hand,
              that last move is hard, and I would likely only have one more shot! I made sure my shoes and skin was dry and tried again. I arrived to the same spot I fell, and I knew I just had to try just a little bit harder than last time.
              I reached and barely snagged the incut hold. Luckily, I kept my composure for the rest of the climb and topped it out. 
              <br />
              <br />
              Being in such a remote area with no one else besides friends made it such a special experience. It wasn't close to the hardest
              physical climb I've done, but one of the hardest mentally.  

            </Typography>

          </Box>
          </Box>
        
        <br/>
        <Divider>

        </Divider>
        <br />
        <Stack>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', my: 2, mx : 2 }}>
            <img 
              alt="cliffjump"
              src={assets.images.cliffjump}
              style={{height: '400px', objectFit: 'contain' }} 
            />
            <img 
              alt="virginia"
              src={assets.images.virginia}
              style={{height: '400px', objectFit: 'contain' }} 
            />
            <img 
              alt="squeeze"
              src={assets.images.squeeze}
              style={{height: '400px', objectFit: 'contain' }} 
            />
            <img 
              alt="vanity"
              src={assets.images.vanity}
              style={{height: '400px', objectFit: 'contain' }} 
            />
        </Box>
        <Typography align = 'center'>
          Pictures courtesy of Porter Geddes
        </Typography>
        </Stack>
        <br />
        
      



        <Divider>
        </Divider>
        <br/>
        <Typography paragraph> 
        There is someting to be said about the hospitality of the locals from helping or being actually genuine. Despite the very apparent 
        racial dynamic, everyone is friendly. During one of our climbing sessions, we had one of our crew hurt themselves pretty badly out in the wildnerness late at night.
        Porter ran out to go find help as there was no service to go knock on doors. 
        No doubt in my mind if I was back home, either no one would answer the door or be met with hostility. In this situation, the farm owner opened the door and no questions
        asked, came to help us out by grabbing his truck and getting us out of there. 
        <br />
        <br />

        It wasn't hard to meet other climbers from other countries and it was mind opening to see how different cultures interacted. Luckily, we made friends with a few of them :) 

        </Typography>
        <Stack>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', my: 2 }}>
           <img 
               alt="hottub"
              src={assets.images.hottub}
              style={{ maxWidth: '50%', maxHeight: "350px", height: 'auto', width: 'auto', objectFit: 'contain' }} 
            />
            
            <img 
               alt="pose"
              src={assets.images.pose}
              style={{ maxWidth: '50%', maxHeight: "350px", height: 'auto', width: 'auto', objectFit: 'contain' }} 
            />
            
            <img 
               alt="bread"
              src={assets.images.bread}
              style={{ maxWidth: '50%', maxHeight: "350px", height: 'auto', width: 'auto', objectFit: 'contain' }} 
            />
            
        </Box>
        <Typography align= 'center'>
              Picture courtesy of Porter Geddes
            </Typography>
        </Stack>
        <br />
        
        

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