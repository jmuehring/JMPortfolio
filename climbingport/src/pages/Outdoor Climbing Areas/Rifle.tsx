import React from 'react';
import { Typography, Paper, Divider, Box, Grid, Stack } from '@mui/material'; 
import assets from '../../assets/index';
import YouTube from '../../components/common/Youtube';
import ImageSlider from '../../components/common/ImageSlider';

type Props = {};

const Rifle = (props: Props) => {
  


  return (
    <Paper elevation={3} sx={{ padding: 3, margin: 3 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Rifle, Colorado
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom fontWeight='bold'>
        Summer 2020/2021/2022
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2, overflow: 'hidden', mx: 2 } }> 
        <Box sx={{ maxWidth: '50%', mx: 4}}>
        <Typography paragraph sx={{marginLeft: '20px', marginRight: '20px'}}>
          Despite being primarily a boulderer, I've always enjoyed this canyon for sport climbing. (climbing with a rope)
          While only being two miles, with only about one mile of climbing accessible, Rifle features blocky yellow limestone, and for its cryptic and unique movement unlike anything
          I've ever climbed before. In all the places I have sport climbed, hands down this
          place has beat it all. From being roadside, friendly community, and surperb climbing, I always find myself coming back here whenever I get the chance.
        </Typography>
        </Box>
        <Box sx={{ maxWidth: '50%', mx: 'auto', textAlign: 'center' }}>
          <img 
            alt="rifleDog"
            src={assets.images.rifleDog}
            style={{ width: '700px', height: 'auto', objectFit: 'contain' }} 
          />
          <Typography align="center"> 
            Picture courtesy of @dirtysouthclimber on Instagram
          </Typography>
        </Box>
      </Box>
      <Divider sx={{my: 2}}/>

      

     
      <Divider sx={{ my : 2}}/>
      {/* Waka Flocka */}

      <Typography align='center' fontWeight='bold' fontSize='1.5rem'>
        Waka Flocka 5.14b
      </Typography>
      <Typography sx={{ marginLeft: '20px', marginRight: '20px', my: 2 }}>
        One of my proudest climbing achievements, this climb taught me a lot more than just being able to climb at such a high difficulty. At a level that was far beyond my paygrade for 
        sport climbing ability, it was ambitous to even think about trying it. At the end of my first Rifle season, a buddy of mine recommended I hop 
        on it and give it a try. Naturally, I have to say yes and tied in to the rope. That day, I didn't even make it up halfway up the route with multiple attempts. Very humbled, I knew taking on this climb
        as a project would mean dedicating a lot of time and energy that could potentially go to waste. Piece by piece, I ended the season with all the moves done but no
        where close to even giving solid send attempts.
        <br />
        <br />
        The next season, I was a little wary of even trying Waka Flocka as I was unsure what my endurance was like at the time. After realizing that my endurance
        maybe wasn't so bad, I decided it was time for Waka Flocka to be my main focus of the trip. Slowly piece by piece, I started to make small incremental links. 
        The process was aganozing slow, with each day feeling repetitive: wake up early in the morning (to chase colder conditions = more friction) to give two send attempts, 
        rest for the evening (til it got cooler and out of the sun) to give 2 more send attempts. Day after day passed by, until I broke through the bottom crux without falling
         (hard part of the climb) and got instantly nervous and jittery. To give context, most people trying the climb send it once they get past the bottom crux. Unfortunately,
         I did not have the same experience. I fell at the top crux, consisting of small crimp moves, and I was too exhausted by the end.
        <br />
        <br />
        Immediately psyched, I repeated the same process, trying two times in the morning, and two times in the evening, but coming short everytime. My friend Lohan pointed out that I should
        take a rest day. I was confused, as it felt I wasn't climbing that much with all the resting mid-day. However, as a wiser individual that I much respected, I heeded his advice and took a rest day.
        To my surprise, it made all the difference. My attempt that day didn't feel different, but at the top I realized I wasn't as exhausted, and executed the top movements
        with relative ease. Finally, I clipped the chains of my project, after 18+ days of projecting.
        <br />
        <br />
        Waka Flocka has taught me that determination, persistance, and resting all work together to make climbs from impossible to possible. If you
        put the work in and fight for it, the results will pay off. I take this mindset and translate it to other aspects of my life, in that with enough
        effort, the results will show and pay off.
        <br />
        <br />


      </Typography>


      <Box display="flex" justifyContent="center" alignItems="center">
        <YouTube videoId="TZLWneY5v-8" />
      </Box>


      <Divider sx={{ my : 2}}/>


      {/* simply read */}
      <Typography align='center' fontWeight='bold' fontSize='1.5rem'>
          Simply Read 5.13d
      </Typography>
      <Box sx={{ display: 'flex', my: 3, overflow: 'hidden', mx: 2 }}> 
          <Stack> 
            <ImageSlider images={assets.simplyRead} height="700px" />
            <Typography align = "center"> 
              Picture courtesy of John Heidbreder
            </Typography>
          </Stack>
          <Box sx={{maxWidth: '70%'}}>
            <br />
            <Typography> 
            One of the classic power endurance climbs in the canyon, this climb is crpytic with many angle changes and vague body positions. 
            As such, the climb is named Simply Read as a joke that it is quite, not simply read. I projected this climb with Lohan, a skilled 
            sport climber that has a different climbing style than me by preferring the easiest, profeccient way while I prefer the more straightforward, 
            powerful style. After a week of trying, Lohan and I both sent and he joked he wasted some days trying to do it my style instead of doing it the 'Lohan' way. 
            This is a fantastic climb and would recommend to anyone that is climbing this grade.


            </Typography>

          </Box>
          </Box>



      



      <Stack>
      <Divider sx={{ my : 2}}/>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', my: 2, mx : 2 }}>
          <Stack>
            <img 
              alt="destiny"
              src={assets.images.destiny}
              style={{height: '400px', objectFit: 'contain' }} 
            />

            <Typography align='center' fontWeight = 'bold'>
            Car I lived in my gap year, deemed Destiny, <br />
             she'll get you there!
            </Typography>
          </Stack>
          <Stack>
            <img 
            
              alt="cooking"
              src={assets.images.cooking}
              style={{height: '400px', objectFit: 'contain' }} 
            />
            <Typography align='center' fontWeight='bold'>
            Cooking dinner after a long day!
            </Typography>
            </Stack>
        </Box>
            <br />
            <br />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', my: 2, mx : 2 }}>
          <Stack>
            <img 
              alt="projectWall"
              src={assets.images.projectWall}
              style={{height: '400px', width: 'auto', objectFit: 'contain' }} 
            />
            <Typography align='center' fontWeight='bold'>
            In front of Project Wall with Lohan
            </Typography>
            </Stack>
            <Stack>
            <img 
              alt="marryMe"
              src={assets.images.marryMe}
              style={{height: '400px', objectFit: 'contain' }} 
            />

            <Typography align='center' fontWeight = 'bold'>
            Me on the classic Marry Me 5.13b 
             
            </Typography>
          </Stack>
        </Box>
        <Typography align = 'center'>
          Pictures courtesy of John Heidbreder 
        </Typography>
      </Stack>

      <Divider sx={{ my : 2}}/>
      <Typography align = "center" fontWeight = "bold" fontSize = '1.5rem'>
        Project - Zulu 5.14a
      </Typography>
      
      <Box sx={{ my: 2, mx: 2, overflow: 'hidden' }}>
        <Grid container spacing={5} alignItems="flex-start">
          <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: '100%', mx: 4}}>
            <Typography sx={{ mt: 8, mb: 2,}}>
              After doing Waka Flocka, I set my sights on it's grade neighbor classic, Zulu. Endurance is the game here, with consistent hard moves for 25 meters.
              I spent numerous days on this one, and had my beta dialed for the climb, but unfortunately did not have the fitness to send it. 
              A project for a future me
              
            </Typography>
          </Box>
           
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageSlider images={assets.zulu} width="650px" height="433px"/>
            <Typography align="center" sx={{ mt: 2 }}>
              Picture courtesy of Kyle Townsend
            </Typography>
          </Grid>
        </Grid>
      </Box>



      



      
      
      
      <Divider sx={{ my : 2}}/>
      <Typography align = "center" fontWeight = "bold" fontSize = '1.5rem'>
        Hard Climbs Ascended
      </Typography>
        <br />
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'row', // Aligns children horizontally
            justifyContent: 'center', // Centers children horizontally
            alignItems: 'flex-start', // Aligns children to the start of the cross axis
            flexWrap: 'wrap', // Allows items to wrap to the next line
            gap: 4, // Spacing between items
            my: 2, // Margin top and bottom for spacing
          }}
        >
          <Stack>
            <Typography fontWeight='bold'>
              5.14b
            </Typography>
            <Typography>
              Waka Flocka
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='bold'>
              5.14a
            </Typography>
            <Typography>
              Never Enough
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='bold'>
              5.13d
            </Typography>
            <Typography>
              Simply Read <br/>
              Bride of Frankenstein
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='bold'>
              5.13c
            </Typography>
            <Typography>
              Bite the Bullet <br />
              Skeletor <br />
              Fluff Boy 
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='bold'>
              5.13b
            </Typography>
            <Typography>
              Apocalypse '95 <br />
              Marry Me
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='bold'>
              5.13a
            </Typography>
            <Typography>
              I'm Sorry <br />
              The Beast With Two Backs <br />
              Single Rainbow <br />
              The Beast <br />
              Deity <br />
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='bold'>
              5.12d
            </Typography>
            <Typography>
              Hang 'em Higher <br />
              Espresso 
            </Typography>
          </Stack>
        </Box>
        
        
        

      
    </Paper>
    
  );
};

export default Rifle;