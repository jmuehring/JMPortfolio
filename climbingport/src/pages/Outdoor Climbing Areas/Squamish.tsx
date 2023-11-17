import React from 'react';
import { Typography, Paper, Divider, Box, Stack } from '@mui/material'; 
import assets from '../../assets/index';
import YouTube from '../../components/common/Youtube';

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
          I've always heard about this mystical forest with boulders, but I wrote it off as too far, weather sucks, etc. Fortunately for me, I've got an older brother, Luke, who lives in Seattle, four hours away from Squamish. He invited me to come visit him and to go to Squamish for a few days. Naturally, I said yes. Who am I to turn down a climbing trip? So off we set to Squamish, crossing the US/Canada border and passing by Vancouver. My first impressions were doubtful, caused by constant mist showers, but the longer I spent in the forest, the more magical it felt. It's hard to put into words, and you'll have to take my word for it to visit even if you are not climbing!
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
          Perhaps the most iconic boulder in Squamish, this boulder was first ascended by legend Chris Sharma during his Rampage Tour.
          With only four moves, the technical intricacies combined with raw sloper power pack a punch for many who try. After warming up on my first day
          of climbing, I knew I had to try it as it seemed to be in my style. 
        
          <br /> (1) The first move revolves around a high left heel and an awkward backstep left foot smear.
          for your feet and a decent sloper for your hands. Balance the body with the feet and do a desperate blind right-hand slap to a divot of the crystals.
     
          <br />
          (2) Engage the left heel to direct body momentum to the left and grab another divot with the left hand. Prepare for a hard right hand move. 
       
          <br />
          (3) Come in to a mini breadloaf-like hold and stay tight.
       
          <br />
          (4) Swap the heel to a toe and use body momentum to generate upwards while keeping close to the wall and grab the jug. 
     
          <br />
          TOP
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
            Hiding in a granite corridor, lies this perfect granite boulder hosting some of the hardest climbs Squamish has to offer. 
            Finnicky body positions and compression was the name of the game, and I was all for it. However, I may have been a little too 
            overconfident in a send but quickly got humbled by the complexity of where each finger and foot position, in which I couldn't just 
            use raw power! <br />

            (1) Grab a faint left hand and start with a decent right hand on a sloper ledge and place the right heel right next to your hand and do a desperate 
            throw right hand to a bad sloper.
            <br />
            (2) Engage the right heel to keep the hips in the wall and do a small bump right hand to a similarly worse sloper.
            <br />
            (3) High left heel on a small crystal, and do a hard left hand bump to a small crystal feature.
            <br />
            (4) Use hips and momentum to bump hard right hand to a good sloper. It's the hardest move, and it's even harder a little tired coming from the start.
            <br />
            (5) TOP 

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
            Another gem of Squamish and rightfully so, this unique boulder feature overlooks the sea cove that's absolutely breathtaking regardless
            of the climbing. My brother and I planned to go during low tide to avoid part of the boulder being underwater, which adds a spicy 
            commiting jump start just to start the climb. I, however, did not plan on falling into this freezing cold water. After the jump, it traverses 
            out right using the cracks in the seam for hands. Once you get to the prow, it starts ramping up with a series of tensiony powerful moves
            to gain the lip of the boulder. The only thing left guarding the top, was a hard mantle rock onto a slab. Luckily for me, I hate cold water and did
            it first try! My brother, unfortunately, did take a dip into the water. 
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
            Tall and proud, this climb gave me the biggest adrenaline rush I've ever had. I was nervous about the terrible landing zone
            and remembering the video I saw of someone taking a terrible fall. After bailing a dozen goes in the middle, I found myself past the no fall zone.
            I remember looking up and thinking in my head, "this is too scary, I need to come down now", and then looked down and saw that was not an option.
            With sweaty hands, I made sure not to do any sudden movements and made sure I felt secure in every position. Before I knew it, I was standing on top of the boulder!
            Arms and voice shaky, I was pumped with adrenaline, and now it was the rest of the crew's turn to follow me up. Back to back, Luke, Oden, and Dean all sent.

            
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