import logo from './logo.svg';
import './App.css';
import useState from "react";
import Sidenavmenubar from "./sidenavbar/sidenavmenubar";
import Application from "./pages/application";
import Capestone from "./pages/capestone";
import Certificate from "./pages/certificate";
import Class from "./pages/class";
import Dashboard from "./pages/dashboard";
import Interviewtask from "./pages/interviewtask";
import Leadership from "./pages/leadership";
import Leaveapplication from "./pages/leaveapplication";
import Mockinterview from "./pages/mockinterview";
import Query from "./pages/query";
import Requirement from "./pages/requirement";
import Syllabus from "./pages/syllabus";
import Task from "./pages/task";
import Testimonial from "./pages/testimonial";
import Webcode from "./pages/webcode";
import Signin from "./register/signin";
import Signup from "./register/signup";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import VerticalTabs from "./pages/tab";
import EnhancedTable from "./pages/table";
function App() {
   return (
    <div className="App">
      <div className="body">
        <Router>
           
            <Routes>
            <Route path="/table"  element={<EnhancedTable/>}/>
            <Route path="/"  element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/tab" element={<VerticalTabs/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/application" element={<Application/>}/>
                <Route path="/capestone" element={<Capestone/>}/>
                <Route path="/certificate" element={<Certificate/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>               
                <Route path="/interviewtask" element={<Interviewtask/>}/>
                <Route path="/leadership" element={<Leadership/>}/>
                <Route path="/mockinterview" element={<Mockinterview/>}/>
                <Route path="/query" element={<Query/>}/>
                <Route path="/requirement" element={<Requirement/>}/>
                <Route path="/syllabus" element={<Syllabus/>}/>
                <Route path="/task" element={<Task/>}/>
                <Route path="/testimonial" element={<Testimonial/>}/>               
                <Route path="/webcode" element={<Webcode/>}/>
                <Route path="/class" element={<Class/>}/>               
                <Route path="/leaveapplication" element={<Leaveapplication/>}/>
            </Routes>
           </Router>
        </div>
    </div>
  );
}

export default App;
