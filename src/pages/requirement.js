import React,{useState,useEffect} from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Requirement(){
    const [formdata,setFormdata]=useState({
        git:"",
        resume:"",
        portfolio:"" 
    });
    const handlesubmit=async(e)=>{
        e.preventDefault();
    }
    return(
        <div>
             <div style={{width:"200px",height:"50px",background:"purple"}} className="header">
             <Typography style={{color:"white", fontSize:"27px"}}>Requirement</Typography>
              </div>
              <form onSubmit={handlesubmit}>
              <span>Github URL</span> <br/>                
                <TextField style={{width:"200px",height:"50px"}}
                 id="outlined-basic"  
                 variant="outlined"
                 name="git" 
                 value={formdata.git}  
                 onChange={(e)=>setFormdata({...formdata,git:e.target.value})}/><br/>
               <br/><br/>  
                <span>Portfolio URL</span> <br/>                  
                <TextField style={{width:"200px",height:"50px"}}
                 id="outlined-basic"  
                 variant="outlined"
                 name="portfolio" 
                 value={formdata.portfolio}  
                 onChange={(e)=>setFormdata({...formdata,portfolio:e.target.value})}/><br/><br/>
                 <span>Resume URL</span> <br/>                 
                 <TextField style={{width:"200px",height:"50px"}}
                 id="outlined-basic"  
                 variant="outlined"
                 name="resume" 
                 value={formdata.resume}  
                 onChange={(e)=>setFormdata({...formdata,resume:e.target.value})}/><br/><br/>
                      <Button type="submit"> Submit</Button>
                </form>
        </div>
    );
}

export default Requirement;