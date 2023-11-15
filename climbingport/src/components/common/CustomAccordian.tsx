import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Event {
  date: string;
  name: string;
  rank: number;
}

interface AccordionItem {
  title: string;
  events: Event[];
}

interface CustomAccordionProps {
  items: AccordionItem[];
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Accordion 
          key={index}
          sx={{
            border: '1px solid #333', 
            '&:not(:last-child)': {
              borderBottom: 0,
            },
            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
            sx={{
              backgroundColor: '#f7f7f7', 
            }}
          >
            <Typography sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: '#fff', 
            }}
          >
            {item.events.map((event, eventIndex) => (
              <div key={eventIndex}>
                <Typography variant="body1"><strong>Event:</strong> {event.name}</Typography>
                <Typography variant="body1"><strong>Date:</strong> {event.date}</Typography>
                <Typography variant="body1"><strong>Rank:</strong> {event.rank}</Typography>
                {eventIndex < item.events.length - 1 && <Divider />}
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};


export default CustomAccordion;
