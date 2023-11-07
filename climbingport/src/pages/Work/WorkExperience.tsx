import React from 'react';
import { Typography, Paper, Box, List, ListItem, ListItemText, Divider } from '@mui/material';

const WorkExperience = () => {
  const largerFontSize = '1.5rem';
  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Work Experience
      </Typography>
      <List>
        <ListItem alignItems="flex-start">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>  
        <ListItemText
            primaryTypographyProps={{ 
                sx: { 
                fontWeight: 'bold' // This makes the primary text bold
              } 
            }}
        
            primary="VIP Embedded Systems CyberSecurity"
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  August 2023 - Present <br />
                </Typography>
                {" — Conducted in-depth research on Wyze Camera's sensor firmware as part of the Vertically Integrated Project, combining graduate and undergraduate research in long-term, large-scale, multidisciplinary project teams"}
                <br />
                {" — Reverse-engineered the camera's main program binary files to identify potential vulnerabilities by focusing on the transmit command structure – responsible for transmitting data in Over the Air Protocol (OTA)"}
                <br />
                {" — Gained comprehensive knowledge of the OTA protocol, which will lead to the development of an RF fuzzing test bed – to help find crashes, memory leaks, and security flaws"}
              </>
            }
          />
          <Typography sx={{  whiteSpace: 'nowrap' }}>
          Atlanta, GA
          </Typography>
          </Box>
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>  
        <ListItemText
            primaryTypographyProps={{ 
                sx: { 
                fontWeight: 'bold' // This makes the primary text bold
              } 
            }}
            primary="NS Sales"
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  Jan 2019 - May 2022 <br />
                </Typography>
                {" — During junior year of highschool, founded NS Sales, a strategic Amazon marketplace reselling venture focused on leveraging market analytics to maximize profitability"}
                <br />
                {" — Surpassed the sale of 1,000 units and generated revenues of $500,000, translating to a pre-tax profit of $120,000"}
                <br />
                {" — Collaboratively managed operations alongside a business partner, selectively outsourcing specific tasks to ensure operational efficiency"}
                <br />
                {" — Established and maintained a customer-centric approach, addressing inquiries and resolving issues promptly, leading to a 98% positive feedback rating on the Amazon marketplace"}
              </>
            }
          />
          <Typography sx={{  whiteSpace: 'nowrap' }}>
          Dunwoody, GA
          </Typography>
          </Box>
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <ListItemText
            primaryTypographyProps={{ 
                sx: { 
                fontWeight: 'bold' // This makes the primary text bold
              } 
            }}
            primary="WBL North Springs"
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  August 2019 - May 2020 <br />
                </Typography>
                {" — Cultivated classroom management skills to effectively guide and instruct diverse groups of students"}
                <br />
                {" — Provided targeted mentorship and academic support to students requiring additional assistance, ensuring a comprehensive understanding of mathematical concepts"}
                <br />
              

               

              </>
            }
          />
          <Typography sx={{  whiteSpace: 'nowrap' }}>
          Sandy Springs, GA
          </Typography>
          </Box>
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <ListItemText
            primaryTypographyProps={{ 
                sx: { 
                fontWeight: 'bold' // This makes the primary text bold
              } 
            }}
            primary="Kailas Brand Ambassador"
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                     July 2017 - August 2019<br />

                </Typography>
                {" — Elevated brand presence by consistently showcasing Kailas clothing at world, national, and regional climbing competitions, leading to a measurable increase in audience engagement and interest"}
                <br />
                {" — Cultivated a robust brand image by engaging with the climbing community, fostering relationships, and acting as the face of Kailas at various events" }
              </>
            }
          />
          <Typography sx={{  whiteSpace: 'nowrap' }}>
          Dunwoody, GA
          </Typography>
          </Box>
        </ListItem>
        
        <Divider component="li" />
        <ListItem alignItems="flex-start">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <ListItemText
            primaryTypographyProps={{ 
                sx: { 
                fontWeight: 'bold' // This makes the primary text bold
              } 
            }}
            primary="Stone Summit Camp Counselor"
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  May 2018 - August 2018 <br />

                </Typography>
                {" — Led dynamic rock climbing sessions for children, developing weekly educational programs that emphasized safety, technique, and sportsmanship"}
                <br />
                {" — Pioneered a mentorship program that paired experienced climbers with novices, enhancing skill development and fostering a passion for climbing in young enthusiasts"}
              </>
            }
          />
          <Typography sx={{ whiteSpace: 'nowrap'}}>
            Doraville, GA
          </Typography>
          </Box>
        </ListItem>
        <Divider component="li" />

      </List>
    </Paper>
  );
};

export default WorkExperience;
