import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
function Class(){
 
    return(
        <div>

          {/* REgular class */}

          <div>
            <Button style={{ background:"rgb(129, 43, 129)",color:"white"}}> 1 </Button> 
          </div> 
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
      </CardContent>
    </Card>

          </div>     
        </div>
    );
}

export default Class;