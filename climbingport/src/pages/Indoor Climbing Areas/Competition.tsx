import React from 'react';
import { Typography, Paper, Box} from '@mui/material';
import CustomAccordion from '../../components/common/CustomAccordian';

const Competition = () => {
  const bouldering = [
    {
      title: 'Elite Series',
      events: [
        {
          name: 'National Team Trials Semi-Final',
          date: '2021-03-26',
          rank: 20,
        },
        {
          name: 'National Team Trials Qualification',
          date: '2021-03-25',
          rank: 14,
        },
        {
          name: 'National Cup Series - High Point Memphis Boulder Qualifier',
          date: '12-06-2019',
          rank: 19,
        }
        
      ],
    },
    {
      title: 'Collegiate Series',
      events: [
        {
          name: '2023 Collegiate National Boulder Final',
          date: '04-29-2023',
          rank: 20,
        },
        {
          name: '2023 Collegiate National Boulder Qualification',
          date: '04-28-2023',
          rank: 14,
        },
        
      ],
    },
    {
      title: 'Youth Series',
      events: [
        {
          name: '2020 Bouldering Youth National Championships Final',
          date: '02-08-2020',
          rank: 8,
        },
        {
          name: '2019 Bouldering Youth National Championships Final',
          date: '02-09-2019',
          rank: 8,
        },
        {
          name: '2018 Bouldering Youth National Championships Semi-Final',
          date: '02-10-2020',
          rank: 17,
        },
        {
          name: '2017 Bouldering Youth National Championships Semi-Final',
          date: '02-11-2020',
          rank: 13,
        },
      ],
    },
  ];

  const speed = [
    {
      title: 'World Series',
      events: [
        {
          name: 'IFSC World Youth Championships - Arco',
          date: '08-31-2019',
          rank: 7,
        },

        {
          name: 'Pan-American Youth Championship',
          date: '08-16-2018',
          rank: 36,
        },
        {
          name: 'IFSC World Youth Championships - Innsbruck',
          date: '09-10-2017',
          rank: 6,
        },
        {
          name: 'IFSC World Youth Championships - Guangzhou',
          date: '11-13-2016',
          rank: 13,
        },
      ],
    },
    {
      title: 'Elite Series',
      events: [
        {
          name: 'National Team Trials Finals',
          date: '03-29-2021',
          rank: 7,
        },
        {
          name: '2019 Sport & Speed Open Nationals',
          date: '03-09-2019',
          rank: 5,
        },
      ],
    },
    {
      title: 'Collegiate Series',
      events: [
        {
          name: '2022 Collegiate National Reach Climbing Speed Final',
          date: '04-21-2022',
          rank: 7,
        },
      ],
    },
    {
      title: 'Youth Series',
      events: [
        {
          name: '2019 Sport & Speed Youth National Championships',
          date: '07-11-2019',
          rank: 2,
        },
        {
          name: '2018 Sport & Speed Youth National Championships',
          date: '07-12-2018',
          rank: 5,
        },
        {
          name: '2017 Sport & Speed Youth Nationals',
          date: '07-13-2017',
          rank: 2,
        },
        {
          name: '2016 Sport & Speed Youth Nationals',
          date: '07-??-2016',
          rank: 3,
        },
        {
          name: '2015 Sport & Speed Youth Nationals',
          date: '07-??-2015',
          rank: 4,
        },
        {
          name: '2014 Sport & Speed Youth Nationals',
          date: '07-??-2014',
          rank: 7,
        },
        {
          name: '2013 Sport & Speed Youth Nationals',
          date: '07-??-2013',
          rank: 2,
        },
      ],
    },
  ];

  const lead = [
    {
      title: 'Elite Series',
      events: [
        {
          name: '2019 Sport & Speed Open Nationals Qualifier',
          date: '03-09-2019',
          rank: 40,
        },
      ],
    },
    {
      title: 'Collegiate Series',
      events: [
        {
          name: '2023 Collegiate National Springs Climbing Center/Gripstone Climbing & Fitness Lead/TR',
          date: '04-28-2023',
          rank: 20,
        },
        {
          name: '2022 Collegiate National Reach Climbing Lead/TR',
          date: '04-21-2022',
          rank: 16,
        },
      ],
    },
    {
      title: 'Youth Series',
      events: [
        {
          name: '2019 Sport & Speed Youth National Championships',
          date: '07-11-2019',
          rank: 24,
        },
        {
          name: '2018 Sport & Speed Youth National Championships',
          date: '07-12-2018',
          rank: 23,
        },
        {
          name: '2017 Sport & Speed Youth Nationals',
          date: '07-13-2017',
          rank: 30,
        },
      ],
    },
  ];

  return (
    <>

      <Paper elevation={5} sx={{ padding: 2, marginBottom: 2 }}>
        <Typography>
         As a mostly powerful climber, I excelled more towards speed and bouldering. There are some results previous to 2017, but seem to be lost to time. In order to trim down clutter,
         I decided not to put local, regional, and divisional competitions and only put National and World competitions.
        </Typography>
        <Typography align='center' fontWeight={'bold'}>
          Here are my results:
        </Typography>
      </Paper>
      <Paper elevation={5} sx={{ padding: 2, marginBottom: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
          <Typography variant="h6" component="h2">
            Speed
          </Typography>
        </Box>
        <CustomAccordion items={speed} />

      </Paper>
      <Paper elevation={5} sx={{ padding: 2, marginBottom: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
          <Typography variant="h6" component="h2">
            Bouldering
          </Typography>
        </Box>
  
        <CustomAccordion items={bouldering} />
      </Paper>
      
      <Paper elevation={5} sx={{ padding: 2, marginBottom: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
          <Typography variant="h6" component="h2">
            Lead/TR
          </Typography>
        </Box>
        <CustomAccordion items={lead} />

      </Paper>
    </>
  );
};

export default Competition;
