import React from 'react';
import {Avatar, Button, Container, Typography, Box, Grid, IconButton, Tooltip } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import GetAppIcon from '@mui/icons-material/GetApp';
import assets from '../../assets/index';

const ContactMe = () => {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={2} alignItems="center">
        <Grid item pt={5} pr={5}>
          <Avatar
            alt="Joshua Muehring"
            src={assets.images.headshot}
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        <Grid item xs>
          <Typography variant="h4" component="h1" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body1" gutterBottom>
            I am currently taking classes at Georgia Tech, but I am seeking a CS internship role in the Summer/Fall of 2024. If you have any questions, please feel free 
            to reach out or connect with me! 
          </Typography>
        </Grid>
      </Grid>
      <Box textAlign="center" my={4} >
        <Tooltip title="LinkedIn">
          <IconButton href="https://www.linkedin.com/in/jmuehring" target="_blank" rel="noopener noreferrer" sx ={{mx : 1}}>
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Instagram">
          <IconButton href="https://www.instagram.com/joshua_muehring" target="_blank" rel="noopener noreferrer" sx ={{mx : 1}}>
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="GitHub">
          <IconButton href="https://github.com/jmuehring" target="_blank" rel="noopener noreferrer" sx ={{mx : 1}}>
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
      <Box textAlign="center" my={4}>
        <Button
          variant="contained"
          startIcon={<GetAppIcon />}
          href={assets.pdf.resume}
          download
          sx={{ mt: 2 }} 
        >
          Download Resume
        </Button>
      </Box>
    </Container>
  );
};

export default ContactMe;