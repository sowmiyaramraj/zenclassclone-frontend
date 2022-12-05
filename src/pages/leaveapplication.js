import React from "react";
import { styled } from '@mui/material/styles';
import Sidenavmenubar from "../sidenavbar/sidenavmenubar";

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));


function Leaveapplication(){
    return(
        <div>
           <div className="header">
            <Div>{"Leave application"}</Div>
            </div>
          
        </div>
    );
}

export default Leaveapplication;