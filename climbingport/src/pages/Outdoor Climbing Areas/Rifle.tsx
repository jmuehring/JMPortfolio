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
      <Box sx={{ my: 2 }}>
        <Typography paragraph sx={{marginLeft: '20px', marginRight: '20px'}}>
          Despite being primarily a boulderer, I've always enjoyed this canyon for sport climbing. (climbing with a rope)
          While only being two miles, with only about one mile of climbing accessible, Rifle features blocky yellow limestone, and for its cryptic and unique movement unlike anything
          I've ever climbed before. In all the places I have sport climbed, hands down this
          place has beat it all. From being roadside, friendly community, and surperb climbing, I always find myself coming back here whenever I get the chance.
        </Typography>
      </Box>
      <Divider sx={{my: 2}}/>

      

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2, overflow: 'hidden', mx: 2 } }> 
        <Box sx={{ maxWidth: '50%', mx: 4}}>
          <Typography> 
            placeholder text placeholder text placeholder text placeholder textplaceholder text placeholder text placeholder text placeholder text
            placeholder text
            placeholder text
            placeholder text
            placeholder text
            placeholder text
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
      <Divider sx={{ my : 2}}/>
      {/* Waka Flocka */}

      <Typography align='center' fontWeight='bold' fontSize='1.5rem'>
        Waka Flocka 5.14b
      </Typography>
      <Typography sx={{marginLeft: '20px', marginRight: '20px', my: 2}}>
        Placeholder Texter Placeholder Texter Placeholder Texter Placeholder Texter Placeholder TexterPlaceholder Texter
        Placeholder Texter Placeholder Texter Placeholder Texter Placeholder Texter Placeholder TexterPlaceholder Texter
        Placeholder Texter Placeholder Texter Placeholder Texter Placeholder Texter Placeholder TexterPlaceholder Texter
        Placeholder Texter Placeholder Texter Placeholder Texter Placeholder Texter Placeholder TexterPlaceholder Texter
        Placeholder Texter Placeholder Texter Placeholder Texter Placeholder Texter Placeholder TexterPlaceholder Texter
        Placeholder Texter Placeholder Texter Placeholder Texter Placeholder Texter Placeholder TexterPlaceholder Texter
        Placeholder Texter Placeholder Texter Placeholder Texter Placeholder Texter Placeholder TexterPlaceholder Texter
        Placeholder Texter Placeholder Texter Placeholder Texter Placeholder Texter Placeholder TexterPlaceholder Texter
        Placeholder Texter Placeholder Texter Placeholder Texter Placeholder Texter Placeholder TexterPlaceholder Texter
        Placeholder Texter Placeholder Texter Placeholder Texter Placeholder Texter Placeholder TexterPlaceholder Texter
      </Typography>
      <YouTube videoId="TZLWneY5v-8" />


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
            placeholder text placeholder text placeholder text placeholder textplaceholder text placeholder text placeholder text placeholder text
            placeholder text
            placeholder text
            placeholder text
            placeholder text
            placeholder textplaceholder text placeholder text placeholder text placeholder textplaceholder text placeholder text placeholder text placeholder text
            placeholder text
            placeholder text
            placeholder text
            placeholder text
            placeholder text

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
            <Typography sx={{ mt: 0, mb: 2 }}>
              placeholder text placeholder text placeholder text placeholder text
              placeholder text placeholder text placeholder text placeholder text
              placeholder text placeholder text placeholder text placeholder text
              placeholder text placeholder text placeholder text placeholder text
              placeholder text placeholder text placeholder text placeholder text
              placeholder text placeholder text placeholder text placeholder text
            </Typography>
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