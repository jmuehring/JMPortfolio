import OutdoorClimbing from "../pages/Outdoor Climbing Areas/OutdoorClimbing";
import { RouteType } from "./config";
import Rocklands from "../pages/Outdoor Climbing Areas/Rocklands";
import ContactMe from "../pages/Contact Me/ContactMe";
import Squamish from "../pages/Outdoor Climbing Areas/Squamish";
import Rifle from "../pages/Outdoor Climbing Areas/Rifle";
import IndoorClimbing from "../pages/Indoor Climbing Areas/IndoorClimbing";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LandscapeIcon from '@mui/icons-material/Landscape';
import SchoolIcon from '@mui/icons-material/School';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Competition from "../pages/Indoor Climbing Areas/Competition";
import Training from "../pages/Indoor Climbing Areas/Training";
import AboutMe from "../pages/Bio/AboutMe";
import Education from "../pages/Education/Education";
import WorkExperience from "../pages/Work/WorkExperience";
import WorkIcon from '@mui/icons-material/Work';
import Projects from "../pages/Projects/Projects";
import AppsIcon from '@mui/icons-material/Apps';

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <AboutMe />,
    state: "aboutMe"
  },
  {
    path: "/about-me",
    element: <AboutMe />,
    state: "AboutMe",
    sidebarProps: {
      displayText: "About Me",
      icon: <AccessibilityIcon />
    }
  },
  {
    path: "/outdoor-climbing",
    element: <OutdoorClimbing />,
    state: "Outdoor Climbing",
    sidebarProps: {
      displayText: "Outdoor Climbing",
      icon: <LandscapeIcon />
    },
    child: [
  
      {
        path: "/outdoor-climbing/rocklands",
        element: <Rocklands />,
        state: "Rocklands",
        sidebarProps: {
          displayText: "Rocklands"
        },
      },
      {
        path: "/outdoor-climbing/squamish",
        element: <Squamish />,
        state: "squamish",
        sidebarProps: {
          displayText: "Squamish"
        }
      },
      {
        path: "/outdoor-climbing/rifle",
        element: <Rifle />,
        state: "rifle",
        sidebarProps: {
          displayText: "Rifle"
        }
      }
    ]
  },
  {
    path: "/indoor-climbing",
    element: <IndoorClimbing />,
    state: "dropDown, finished.",
    sidebarProps: {
      displayText: "Indoor Climbing",
      icon: <FitnessCenterIcon />
    },
    child: [
      {
        path: "/indoor-climbing/competition",
        element: <Competition />,
        state: "Competition",
        sidebarProps: {
          displayText: "Competition"
        },
      },
      {
        path: "/indoor-climbing/training",
        element: <Training />,
        state: "training",
        sidebarProps: {
          displayText: "Training"
        }
      }
    ]
  },
  {
    path: "/education",
    element: <Education />,
    state: "education",
    sidebarProps: {
      displayText: "Education",
      icon: <SchoolIcon />
    }
  },
  {
    path: "/work", 
    element: <WorkExperience />,
    state: "work experience", 
    sidebarProps: {
      displayText: "Work Experience",
      icon: <WorkIcon />
    }
  },
  {
    path: "/projects", 
    element: <Projects />,
    state: "projects", 
    sidebarProps: {
      displayText: "Projects",
      icon: <AppsIcon />
    }
  },
  {
    path: "/contact-me",
    element: <ContactMe />,
    state: "contact me",
    sidebarProps: {
      displayText: "Contact Me",
      icon: <ContactMailIcon />
    }
  }
];

export default appRoutes;