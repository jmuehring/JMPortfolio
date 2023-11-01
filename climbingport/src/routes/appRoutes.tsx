import OutdoorClimbing from "../pages/Outdoor Climbing/OutdoorClimbing";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import Rocklands from "../pages/Outdoor Climbing/Rocklands";
import DashboardIndex from "../pages/Outdoor Climbing/DashboardIndex";
import ContactMe from "../pages/Contact Me/ContactMe";
import NewRiverGorge from "../pages/Outdoor Climbing/NewRiverGorge";
import Rifle from "../pages/Outdoor Climbing/Rifle";
import ComponentPageLayout from "../pages/Indoor Climbing Areas/ComponentPageLayout";
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

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/installation",
    element: <AboutMe />,
    state: "AboutMe",
    sidebarProps: {
      displayText: "About Me",
      icon: <AccessibilityIcon />
    }
  },
  {
    path: "/Outdoor Climbing",
    element: <OutdoorClimbing />,
    state: "Outdoor Climbing",
    sidebarProps: {
      displayText: "Outdoor Climbing",
      icon: <LandscapeIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index"
      },
      {
        path: "/Outdoor Climbing/Rocklands",
        element: <Rocklands />,
        state: "Rocklands",
        sidebarProps: {
          displayText: "Rocklands"
        },
      },
      {
        path: "/Outdoor Climbing/NewRiverGorge",
        element: <NewRiverGorge />,
        state: "newrivergorge",
        sidebarProps: {
          displayText: "New River Gorge"
        }
      },
      {
        path: "/Outdoor Climbing/Rifle",
        element: <Rifle />,
        state: "rifle",
        sidebarProps: {
          displayText: "Rifle"
        }
      }
    ]
  },
  {
    path: "/Indoor Climbing",
    element: <ComponentPageLayout />,
    state: "dropDown, finished.",
    sidebarProps: {
      displayText: "Indoor Climbing",
      icon: <FitnessCenterIcon />
    },
    child: [
      {
        path: "/Indoor Climbing/Competition",
        element: <Competition />,
        state: "Competition",
        sidebarProps: {
          displayText: "Competition"
        },
      },
      {
        path: "/Indoor Climbing/Training",
        element: <Training />,
        state: "training",
        sidebarProps: {
          displayText: "Training"
        }
      }
    ]
  },
  {
    path: "/Education",
    element: <Education />,
    state: "education",
    sidebarProps: {
      displayText: "Education",
      icon: <SchoolIcon />
    }
  },
  {
    path: "/Work", 
    element: <WorkExperience />,
    state: "work experience", 
    sidebarProps: {
      displayText: "Work Experience",
      icon: <WorkIcon />
    }
  },
  {
    path: "/Contact Me",
    element: <ContactMe />,
    state: "contact me",
    sidebarProps: {
      displayText: "Contact Me",
      icon: <ContactMailIcon />
    }
  }
];

export default appRoutes;