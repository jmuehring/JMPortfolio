import { AppBar, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const Topbar = () => {
  const topbarTitle = useSelector((state: RootState) => state.appState.topbarTitle);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}
    >
      <Toolbar>
        <Typography variant="h6">
          {topbarTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;