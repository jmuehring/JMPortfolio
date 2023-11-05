import React from 'react';
import { Container, Typography, Box, IconButton, Tooltip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const ContactMe = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="h6">
        Joshua Muehring
      </Typography>
      <Box textAlign="center" my={4}>
        <Tooltip title="Email">
          <IconButton href="mailto:joshuamuehring@gmail.com" target="_blank" rel="noopener noreferrer">
            <EmailIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton href="https://www.linkedin.com/in/jmuehring" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Instagram">
          <IconButton href="https://www.instagram.com/joshua_muehring" target="_blank" rel="noopener noreferrer">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="GitHub">
          <IconButton href="https://github.com/jmuehring" target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
    </Container>
  );
};

export default ContactMe;