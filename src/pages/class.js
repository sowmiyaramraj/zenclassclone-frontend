import React,{useState,useEffect} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import jwt from "jsonwebtoken";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
function Class(){
  const navigate=useNavigate();
  const [classdata,setClassdata]=useState([]);
  

  useEffect(()=>{
           async function getData()
           {
            const decodedtoken=jwt.decode(localStorage.getItem("token"));
            if(decodedtoken.exp * 1000 < Date.now())
            {
              navigate("/signin");
    
            }
    else{
               const responce= await axios.get("http://localhost:3001/class/get",{
                headers:{
                  accesstoken: localStorage.getItem("token"),
                },
               });
               console.log(responce.data);           
               setClassdata(responce.data);           
           }
              }
           getData();
       },[]);
 
    return(
        <div>

          {/* REgular class */}
          {classdata.map((row) => (

          <div key={row.id}>
            <Button style={{ background:"rgb(129, 43, 129)",color:"white"}} href={row.roadmapclasslink}> {row.roadmap} </Button> 
          </div> 
          ))}
          <hr/>

          {/* Additional session */}

          <div> 
          <Card sx={{ minWidth: 275 }}>
      <CardContent>
       
        <Typography variant="h5" component="div">
         Additional Session
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         11/12/2022 
        </Typography>
        <Button style={{ background:"rgb(129, 43, 129)",color:"white"}} href={row.additionalclasslink}> {row.additionalclass} </Button> 

      </CardContent>
    </Card>

          </div>     
        </div>
    );
}

export default Class;