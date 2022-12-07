import React,{useState,useEffect} from "react";
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import TextField from '@mui/material/TextField';
import "./pagestyle.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import axios from "axios";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));
function Webcode(props){

    const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;
    const [webcode,setWebcode]= useState([]);

    useEffect(()=>{
      async function getData()
      {
          const response= await axios.get("http://localhost:3001/task/get");
          setWebcode(response.data);    
      }
      getData();
  },[]);
    return(
        <div>
            <div style={{width:"200px",height:"50px",background:"purple"}} className="header">
           <Typography style={{color:"white", fontSize:"27px"}}>Webcode</Typography>
            </div>
            {webcode.map((row)=>(
      <Root  key={row.id}>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}> {row.webcodename}<br/>
       {row.webcodetitle}</Button>
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>
          </Typography>
        </StyledBox>

        {/* card */}

        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {row.webcodename}
        </Typography>
        <Typography variant="h5" component="div">
         {row.webcodetitle}
        </Typography>
        <Button className="cmdbutton" style={{height: '30px', width : '100px'}} size="small" variant="contained">webcode</Button>&nbsp;
          {/* <Button className="cmdbutton"  style={{height: '30px', width : '100px'}} size="small" variant="outlined">{webcode.webcodemark}</Button> */}
        <br/><br/>
        <Card style={{width:'800px', height:'100px'}} >
        <CardContent>
<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    Answer
  </Typography>
  <Typography variant="h5" component="div">
   <TextField lable="Enter your deployed URL" style={{width:"150px"}}></TextField>
  </Typography>
  </CardContent>
      
      </Card>
      <Card style={{width:'800px', height:'100px'}}>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Commend
        </Typography>
        <Typography variant="h5" component="div">
         {row.webcodefeedback}
        </Typography>
        </CardContent>
      
      </Card>
      </CardContent>
      
    </Card>
       </SwipeableDrawer>
    </Root>
    ))}
</div>
    );
}

export default Webcode;