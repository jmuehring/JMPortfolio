import React from 'react';
import { Typography, Paper, Divider, Box, Stack } from '@mui/material'; 
import assets from '../../assets/index';
import YouTube from '../../components/common/Youtube';
import ImageSlider from '../../components/common/ImageSlider';

type Props = {};

const Squamish = (props: Props) => {
  return (
    <Paper elevation={3} sx={{ padding: 3, margin: 3 }}>
       <Typography variant="h3" align="center" gutterBottom>
        Squamish, British Columbia
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom fontWeight='bold'>
        Summer 2022
      </Typography>
      <Box sx={{ my: 2 }}>
        <Typography paragraph sx={{marginLeft: '20px', marginRight: '20px'}}>
          Coming Soon
          Placeholder Text <br />
          Placeholder Text <br />
          Placeholder Text <br />
          Placeholder Text <br />
          Placeholder Text <br />
          Placeholder Text <br />
          Placeholder Text <br />
          Placeholder Text <br />
          Placeholder Text <br />
         
        </Typography>
      </Box>
      <Divider sx={{my: 2}}/>

      {/* The Egg v11 */}
      <Typography align='center' fontWeight='bold' fontSize='1.5rem'>
        The Egg v11
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'flex-start', 
        justifyContent: 'center', 
        my: 2, 
        overflow: 'hidden', 
        mx: 2 
      }}>   
        <Box sx={{ maxWidth: '30%', mx: 4, mt: 1}}>
          <Typography> 
            placeholder text placeholder text placeholder text placeholder textplaceholder text placeholder text placeholder text placeholder text
            placeholder text
            placeholder text
            placeholder text
            placeholder text
            placeholder text
          </Typography>
        </Box>
        <YouTube videoId="1v5_8HSRpPQ" height = "500px" width = "800px" />
      </Box>
      <Divider sx={{my: 2}}/>

      {/* Room Service */}
      <Typography align='center' fontWeight='bold' fontSize='1.5rem'>
        Room Service v12
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'flex-start', 
        justifyContent: 'center', 
        my: 2, 
        overflow: 'hidden', 
        mx: 2 
      }}> 
        <YouTube videoId="wdSo5b5tiJ0" height = "500px" width = "800px" />
        <Box sx={{ maxWidth: '30%', mx: 4, mt: 1}}>
          <Typography> 
            placeholder text placeholder text placeholder text placeholder textplaceholder text placeholder text placeholder text placeholder text
            placeholder text
            placeholder text
            placeholder text
            placeholder text
            placeholder text
          </Typography>
        </Box>
      </Box>
      



      <Divider sx={{my: 2}}/>
      {/* Majestic */}
      <Typography align='center' fontWeight='bold' fontSize='1.5rem'>
        Majestic v6
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'flex-start', // Aligns children to the top
        justifyContent: 'center', // Centers children horizontally
        my: 2, 
        overflow: 'hidden', 
        mx: 2 
      }}> 
        <YouTube videoId="odlEl4iByAI" height = "500px" width = "800px" />
        <Box sx={{ maxWidth: '30%', mx: 4, mt: 1}}>
          <Typography> 
            placeholder text placeholder text placeholder text placeholder textplaceholder text placeholder text placeholder text placeholder text
            placeholder text
            placeholder text
            placeholder text
            placeholder text
            placeholder text
          </Typography>
        </Box>
      </Box>
      
      

      <Divider sx={{my: 2}}/>

      
      {/* Teenage Lobotomy */}
      <Typography align='center' fontWeight='bold' fontSize='1.5rem'>
        Teenage Lobotomy v7
      </Typography> 
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'flex-start', 
        justifyContent: 'center', 
        my: 2, 
        overflow: 'hidden', 
        mx: 2 
      }}> 
        <YouTube videoId="l0BqBkAPfhI" height="500px" width="800px" />
        <Box sx={{ maxWidth: '30%', mx: 4, mt: 1 }}> 
          <Typography> 
            placeholder text placeholder text placeholder text placeholder text
            placeholder text placeholder text placeholder text placeholder text
          </Typography>
        </Box>
      </Box>
      <Stack>
        <Box sx={{ display: 'flex', gap: '80px', justifyContent: 'center', my: 2}}>
           <img 
               alt="teenagelobotomy2"
              src={assets.images.teenagelobotomy2}
              style={{ maxWidth: '50%', maxHeight: "800px", height: 'auto', width: 'auto', objectFit: 'contain' }} 
            />
            
            <img 
               alt="teenagelobotomy3"
              src={assets.images.teenagelobotomy3}
              style={{ maxWidth: '50%', maxHeight: "800px", height: 'auto', width: 'auto', objectFit: 'contain' }} 
            />
        </Box>
        <Typography align= 'center'>
          Picture courtesy of Danny Zah
        </Typography>
      </Stack>
      <Divider sx={{my: 2}}/>

      {/* other pics */}
      <Stack>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', my: 2 }}>
           <img 
               alt="resurrection"
              src={assets.images.resurrection}
              style={{ maxWidth: '50%', maxHeight: "350px", height: 'auto', width: 'auto', objectFit: 'contain' }} 
            />
            
            <img 
               alt="show"
              src={assets.images.show}
              style={{ maxWidth: '50%', maxHeight: "350px", height: 'auto', width: 'auto', objectFit: 'contain' }} 
            />
            
            <img 
               alt="forest"
              src={assets.images.forest}
              style={{ maxWidth: '50%', maxHeight: "350px", height: 'auto', width: 'auto', objectFit: 'contain' }} 
            />
            
        </Box>
        <Typography align= 'center'>
          Picture courtesy of Danny Zah
        </Typography>
      </Stack>
      <Divider sx={{my: 2}}/>
      
      



      
      {/* Hard Climbs Ascended */}
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
            gap: 15, // Spacing between items
            my: 2, // Margin top and bottom for spacing
          }}
        >
          <Stack>
            <Typography fontWeight='bold'>
              v10+
            </Typography>
            <Typography>
              Room Service v12 <br/>
              The Egg v11 <br/>
              Reckoning Stand v10
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight='bold' >
              v9- 
            </Typography>
            <Typography>
              Worm World Cave v9 <br/>
              Teenage Lobotomy v7 <br/>
              Majestic v6
            </Typography>
          </Stack>
        </Box>

    </Paper>
    
  );
};

export default Squamish;