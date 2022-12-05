import React,{useState} from "react";
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

function a11yProps(card) {
  return {
    id: `vertical-tab-${card.id}`,
    'aria-controls': `vertical-tabpanel-${card.id}`,
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

  const [card,setCard]= useState([
    {
        id:"1",
    name:"sowmiya",
    title:"stackoverflowclone",
    feedback:"came poda seyoon loose ramraj looseee",
    mark:"9",
        },
        {
            id:"2",
            name:"sowmiya",
            title:"stackoverflowclone",
            feedback:"came poda seyoon loose ramraj looseee",
            mark:"9",
                },
                {
                    id:"3",
                    name:"sowmiya",
                    title:"stackoverflowclone",
                    feedback:"came poda seyoon loose ramraj looseee",
                    mark:"9",
                        },
    ]);

  return (
    <div>
       {card.map((rows)=>(   
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 700 }}
    key={rows.id}>
     
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
     
        <Tab style={{width:"800px"}} label={rows.title} {...a11yProps(rows.id)} />       
      </Tabs>     
      <TabPanel value={rows.id} index={rows.id}>
     { rows.name}
      </TabPanel>      
    
    
      </Box>
        ))}
        
    </div>
  );
}