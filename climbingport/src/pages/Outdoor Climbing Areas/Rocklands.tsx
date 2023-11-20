import React from 'react';
import { Typography, Paper, Divider, Box, Grid, Stack } from '@mui/material';
import assets from '../../assets/index';
import YouTube from '../../components/common/Youtube';

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
      <Typography paragraph sx={{ marginLeft: '20px', marginRight: '20px' }}> 
        For years, I've dreamed about going to this iconic bouldering destination, but the opportunity never arose due to either money, prior commitments, or simply no crew being psyched to go. The past summer, I got a message from a friend I met on my gap year when I lived in a minivan that a crew in SLC, UT, was psyched to go. All those years of yearning were now a real possibility, and I hopped on this opportunity as I didn’t know when schedules would line up like that again!
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ my: 2 }}>
        <Typography paragraph sx={{ marginLeft: '20px', marginRight: '20px' }}> 
        On our way to Clanwilliam, three hours north of Cape Town, the trip did not start without a hitch. Five big guys packed in a tiny corolla (to save money!) with all of our gear and crashpads was too much, and one of our tires popped. With a
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
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2, overflow: 'hidden', mx: 2 } }> 
  <Box sx={{ maxWidth: '50%', mx: 4}}>
    <Typography> 
      After some bouts of rain, it was time to climb. Even with all the videos I've watched, my expectations were surpassed by the vast amounts
      of rock, just everywhere! I didn't have a strong desire to project a singular climb, but I sampled all the climbs Rocklands could offer, and there were a lot.
      <br />
      <br />
      Even though I wasn't in peak climbing shape, I tried a multitude of hard climbs, including the historic climbs Fred Nicole put up many years ago.
      As someone who favors powerful, dynamic moves, Rocklands was a playground for me, with the heavily featured rock leading to good holds.
    </Typography>
  </Box>
  <Box sx={{ maxWidth: '50%', mx: 'auto', textAlign: 'center' }}>
    <img 
      alt="blackeagle"
      src={assets.images.blackeagle}
      style={{ width: '700px', height: 'auto', objectFit: 'contain' }} 
    />
    <Typography align="center"> 
      Picture courtesy of Porter Geddes | Me on Fred Nicole's Black Eagle v13 
    </Typography>
  </Box>
</Box>



        <Box sx={{ display: 'flex', my: 2, overflow: 'hidden', mx: 2 }}> 
          <Stack> 
            <img 
              alt="prow"
              src={assets.images.prow}
              style={{height: '800px', objectFit: 'contain'}} 
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
             One of my favorite moments was this deep-water solo called "First Rule of Night Club". Lying in a canyon, you climb an impressive prow over a raging waterfall.
              high above the freezing water, testing your mental fortitude and strength. My crew decided to rope it down to check out the holds.
              and rehearse some of the moves before doing it without a rope. However, I decided to do it ground up with no rehearsal to test my mental strength, which may or may not have between
              the smartest move given my weak swimming skills!
              One slip, one mistake, and you go plunging into the ice-cold water. 
              <br />
              <br />
              My first go, I was focused. Regulating my breathing, I moved through each grip, trying not to overgrip.
              to keep my strength. I could feel the gust of wind from the waterfall and was constantly reminded of the water far below me. I got to the last hard move; it was a deep lock-off of a bad right hand with a high-tensioned left foot. I reached, but not enough.
              I slowly peeled off the wall and plunged into the cold water.
              <br />
              <br />
              An hour passed, and the opportunity arose again to give another attempt. I was mentally unsure if it was going to be possible. On one hand, I know that on the climb up to that point, I fell and could move quickly through that section. On the other hand,
              That last move is hard, and I would likely only have one more shot! I made sure my shoes and skin were dry and tried again. I arrived at the same spot where I fell, and I knew I just had to try a little bit harder than last time.
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
          <Stack>
            <img 
              alt="cliffjump"
              src={assets.images.cliffjump}
              style={{height: '800px', objectFit: 'contain' }} 
            />

            <Typography align='center' fontWeight = 'bold'>
            Cliff jumping into the water!
            </Typography>
          </Stack>
          <Stack>
            <img 
            
              alt="virginia"
              src={assets.images.virginia}
              style={{height: '800px', objectFit: 'contain' }} 
            />
            <Typography align='center' fontWeight='bold'>
            Me trying hard on Golden Virginia v11
            </Typography>
            </Stack>
        </Box>
            <br />
            <br />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', my: 2, mx : 2 }}>
          <Stack>
            <img 
              alt="squeeze"
              src={assets.images.squeeze}
              style={{height: '800px', width: 'auto', objectFit: 'contain' }} 
            />
            <Typography align='center' fontWeight='bold'>
            Full Compression on Timeout v9
            </Typography>
            </Stack>
            <Stack>
            <img 
              alt="vanity"
              src={assets.images.vanity}
              style={{height: '800px', width: 'auto', objectFit: 'contain' }} 
            />
            <Typography align='center' fontWeight='bold'>
            Early day start on Vanity v6
            </Typography>
            </Stack>
        </Box>
        <Typography align = 'center'>
          Pictures courtesy of Porter Geddes  
        </Typography>
        </Stack>
        <br />
         {/* Hard climb */} 
        <Divider>

        </Divider>
        <br />

        <Typography align='center' fontWeight='bold' fontSize='2rem'>
          The Vice v13
        </Typography>
        <Typography sx={{ marginLeft: '20px', marginRight: '20px' }}> 
          After seeing so many videos of this classic climb, walking up to it in person was impressive. Lying in an area called the Fortress, the Vice is surrounded by huge rock towers, reminiscent of the Sagrada Familia. A long-power endurance climb, it required not only raw power but also technique and mental strength to keep focused.
          Fitting my strengths, I was psyched to give it some effort!
        </Typography>
          <br />
          <br />
    
              <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <Typography sx={{ marginLeft: '20px' }}>
                  <br />
                  <br />
                  My usual process with a boulder involves breaking it down into multiple subproblems, similar to the divide and conquer technique:
                    <ul style={{ marginLeft: '20px' }}>
                      <li> Do all the individual moves first and do it efficiently</li>
                      <li> Make small links between moves by doing two moves</li>
                      <li> Incrementally make the links bigger and bigger</li>
                      <li> Start giving tries from the start</li>
                    </ul>
                    This strategy allows me to approach climbs with a systematic approach and do them quickly. With this climb not necessarily having a move
                    that is much harder than others, making it a great candidate to follow this strategy. 
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack>
                  <img 
                    alt="Fortress"
                    src={assets.images.fortress}
                    style={{ height: '400px', width: 'auto', objectFit: 'contain' }} 
                  />
                  <Typography align='center' >
                    The Fortress
                    <br/>
                    <br/>
                  </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          

          <Typography sx={{ marginLeft: '20px', marginRight: '20px' }}> 
          The first session went well! Still tired from trying climbs from the previous day,
          I definitely felt the fatigue from trying individual moves.
          I managed to do all moves except one near the start of the climb and made some links for the ending. It was possible, and the crew was psyched to come back to it.
          <br />
          <br />
          In the second session, we came back at night to take advantage of the cooler temperatures it offered.
          I warmed up on the climb by doing all the individual moves and making small links. 
          It was time to attempt a send-go. I made sure my skin was cool, not sweaty, and visualized myself executing the moves with confidence. It's pretty rare to send first try on a send go, so I didn't expect much and started to pull on. Move after move, I was like, "Oh, I'm still on the wall; keep going!" and anxiety started to creep in to not mess up. Muscular fatigue was building with every move, and before I realized it, I was on top. Here's the send footage of it.   


        
        </Typography>


        <br />
        <Box display="flex" justifyContent="center" alignItems="center">
          <YouTube videoId="5_IqWZpbiPA" />
        </Box>
        
        <br />

      



        <Divider>
        </Divider>
        <br/>
        <Typography paragraph sx={{ marginLeft: '20px', marginRight: '20px'}}> 
        There is something to be said about the hospitality of the locals, from helping to being actually genuine. Despite the very apparent
        racial dynamic, everyone is friendly. During one of our climbing sessions, we had one of our crew members hurt themselves pretty badly out in the wildness late at night.
        Porter ran out to go find help, as there was no service to knock on doors.
        There was no doubt in my mind that if I was back home, either no one would answer the door or I would be met with hostility. In this situation, the farm owner opened the door and asked no questions.
        asked, came to help us out by grabbing his truck and getting us out of there.
        <br />
        <br />

        It wasn't hard to meet other climbers from other countries, and it was mind-opening to see how different cultures interacted.
        Luckily, we made friends with a few of them. :) 

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
        </Box>
        <br />

        <Divider>

        </Divider>
        <br />
        

        <Typography align = "center" fontWeight = "bold" fontSize = '1.5rem'>
          Hard Climbs Ascended
        </Typography>
        <br />

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
      
    </Paper>
  );
};

export default Rocklands;