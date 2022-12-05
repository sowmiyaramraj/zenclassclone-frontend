import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Application from "./application";
import Capestone from "./capestone";
import Certificate from "./certificate";
import Class from "./class";
import Dashboard from "./dashboard";
import Interviewtask from "./interviewtask";
import Leadership from "./leadership";
import Leaveapplication from "./leaveapplication";
import Mockinterview from "./mockinterview";
import Query from "./query";
import Requirement from "./requirement";
import Syllabus from "./syllabus";
import Task from "./task";
import Testimonial from "./testimonial";
import Webcode from "./webcode";
import Signin from "../register/signin";
import zenlogo from "../images/zenlogo.png";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Signup from "../register/signup"
import {useNavigate} from "react-router-dom";
import Profile from "./profile";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
    const profile=()=>{
        navigate("/profile")
      }
      const logout=()=>{
        navigate("/Signin")}
        const navigate=useNavigate();
  
        const [auth, setAuth] = React.useState(true);
        const [anchorEl, setAnchorEl] = React.useState(null);
      
        // const handleChange = (event) => {
        //   setAuth(event.target.checked);
        // };
      
        const handleMenu = (event) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleClose = () => {
          setAnchorEl(null);
        };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <div className="header">
    <Box sx={{ flexGrow: 1 }}>

<AppBar position="static" style={{background:"rgb(129, 43, 129)"}}>
  <Toolbar>
  <img style={{width: 50,height: 50, alignContent:"center"}} src={zenlogo}/>

    <Typography variant="h6" component="div" sx={{   flexGrow: 1,width: 1000 }}>
      Zen Class
    </Typography>
    {auth && (
      <div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={profile}>Profile</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </div>
    )}
  </Toolbar>
</AppBar>
</Box>
      </div>
      
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 700 }}
    >
     
      <Tabs
        orientation="vertical"
        textColor="secondary"
        indicatorColor="secondary"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      > 
        <Tab label="Class" {...a11yProps(0)} />
        <Tab label="Dashboard" {...a11yProps(1)} />
        <Tab label="Task" {...a11yProps(2)} />
        <Tab label="Webcode" {...a11yProps(3)} />
        <Tab label="Capestone" {...a11yProps(4)} />
        <Tab label="Query" {...a11yProps(5)} />
        <Tab label="Requirement" {...a11yProps(6)} />
        <Tab label="Application" {...a11yProps(7)} />
        <Tab label="Interviewtask" {...a11yProps(8)} />
        <Tab label="Leave-applications" {...a11yProps(9)} />
        <Tab label="Mock-Interview" {...a11yProps(10)} />
        <Tab label="Certificate" {...a11yProps(11)} />
        <Tab label="Testimonial" {...a11yProps(12)} />
        <Tab label="Leadership" {...a11yProps(13)} />
        <Tab label="Syllabus" {...a11yProps(14)} />

      </Tabs>
     
      <TabPanel value={value} index={0}>
      <Class/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Dashboard/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Task/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Webcode/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Capestone/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Query/>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Requirement/>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <Application/>
      </TabPanel>
      <TabPanel value={value} index={8}>
      <Interviewtask/>
      </TabPanel>
      <TabPanel value={value} index={9}>
      <Leaveapplication/>
      </TabPanel>
      <TabPanel value={value} index={10}>
      <Mockinterview/>
      </TabPanel>
      <TabPanel value={value} index={11}>
      <Certificate/>
      </TabPanel>
      <TabPanel value={value} index={12}>
      <Testimonial/>
      </TabPanel>
      <TabPanel value={value} index={13}>
      <Leadership/>
      </TabPanel>
      <TabPanel value={value} index={14}>
      <Syllabus/>
      </TabPanel>
    </Box>
    </div>
  );
}