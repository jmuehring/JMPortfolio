import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import assets from '../../assets/index';
const AboutMe = () => {
  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ mt: 5, p: 5 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={5}>
            <Box
              component="img"
              sx={{
                width: '100%', 
                height: 'auto', 
              }}
              alt="Joshua Muehring"
              src={assets.images.headshot}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography variant="h4" gutterBottom>
              Joshua Muehring
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              3rd Year CS Undergrad at Georgia Tech
            </Typography>
            <Box mt={2}>
            <Typography variant="body1">
               Born and raised on the outskirts of Atlanta, I spent my early years like any other kid in Georgia, dabbling in baseball, soccer, and basketball. At age 10, I discovered climbing and was instantly hooked. This sport wasn't just another physical activity; it became a passion that paralleled the mental challenges I enjoy in computer science.
               <br /><br />
               Climbing taught me that strength is as much about mental fortitude as it is about physical endurance. Each route is a unique problem to solve, a puzzle that requires a creative approach and a dedicated mindset. It's this aspect of climbing that I find so akin to coding: both require a methodical approach to problem-solving and an ability to think several moves ahead.
              <br /><br />
              As a CS undergraduate student at Georgia Tech, I'm at the perfect intersection of my two passions. Here, I'm not only developing my technical skills but also applying the problem-solving and analytical thinking I've learned from climbing to my studies and coding projects. It's a balance that continues to challenge and inspire me every day.
            </Typography>

            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AboutMe;

