import React from 'react';
import { Container, Typography, Paper, Box, List, ListItem, ListItemText } from '@mui/material';

const Education = () => {
  return (
    <Container maxWidth="md">
      
      
      <Paper elevation={5} sx={{ padding: 2, marginBottom:2}}>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={0}>
          <Typography variant="h6" component="h2">
            Georgia Institute of Technology
          </Typography>
          <Typography variant="subtitle1" style={{ fontStyle: 'italic' }}>
            August 2021 - May 2025
          </Typography>
          
        </Box>
        <Typography variant="subtitle1" style = {{ fontStyle: 'italic'}}> 
          Candidate for Bachelor of Science in Computer Science
        </Typography>
        
        <Typography variant="body2">
          GPA: 3.71 <br>
          </br> Major GPA: 4.00
        </Typography>
        <Typography variant="body2">
          UPS, Zell Miller, and HOPE National Merit Recipient
        </Typography>
        <Typography variant="body2">
          GT Competitive Sports Climbing Coach
        </Typography>
        <Typography variant="body2">
          Member of Alpha Tau Kappa Sigma
        </Typography>
        <Box marginTop={2}>
        <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
          Relevant Classes taken:
        </Typography>
        <List dense sx={{ paddingTop: 0, paddingBottom: 0}}>
         {['Applied Combinatorics', 'Design & Analysis of Algorithms', 'Objects & Design', 'Computer Organization & Programming', 'Data Structure & Algorithms', 'Intro-Object Oriented Programming', 'Intro Discrete Math'].map((text, index) => (
        <ListItem key={index} sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
</Box>

      </Paper>

      <Paper elevation={5} sx={{ padding: 2, marginBottom:2}}>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={0}>
          <Typography variant="h6" component="h2">
            North Springs High School 
          </Typography>
          <Typography variant="subtitle1" style={{ fontStyle: 'italic' }}>
            August 2016 - May 2020
          </Typography>
          
        </Box>
        <Typography variant="subtitle1" style = {{ fontStyle: 'italic'}}> 
          High School Diploma
        </Typography>
        <Typography variant="body2">
          Unweighted GPA: 94 / 100 
        </Typography>
        <Typography variant="body2">
          ACT: 35
        </Typography>

      </Paper>
    </Container>
  );
};

export default Education;
