import React from 'react';
import { Container, Typography, Paper, Box, List, ListItem, ListItemText } from '@mui/material';

const Education = () => {
  return (
    <Container maxWidth="md">
      
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
        <Typography variant="h6" component="h2">
          Georgia Institute of Technology
        </Typography>
        <Typography variant="subtitle1" style={{ fontStyle: 'italic' }}>
           Candidate for a Bachelor’s of Science in Computer Science
        </Typography>
        <Typography variant="body2">
          Start Date August 2021
          <br>

          </br>
          Expected Graduation May 2025
        </Typography>
        <Typography variant="body2">
          GPA: 3.65 <br>
          </br> Major GPA: 4.00
        </Typography>
        <Typography variant="body2">
          UPS, Zell Miller, and HOPE National Merit Recipient
        </Typography>
        <Typography variant="body2">
          GT Competitive Sports Climbing Coach
        </Typography>
        <Box marginTop={2}>
          <Typography variant="subtitle2">
            Classes taken:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Applied Combinatorics (A)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Design & Analysis-Algorithms (A)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Objects & Design (A)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Computer Organization & Programming (A)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Data Structure & Algorithms (B)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Intro-Object Orient Programming (B)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Intro Discrete Math (A)" />
            </ListItem>
          </List>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h6" component="h2">
          North Springs High School
        </Typography>
        <Typography variant="body1">
          Atlanta, GA 
        </Typography>
        <Typography variant="subtitle1">
          2016 - 2020
        </Typography>
      </Paper>
    </Container>
  );
};

export default Education;
