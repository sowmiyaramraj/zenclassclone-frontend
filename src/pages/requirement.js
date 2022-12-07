import React,{useState} from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Formik} from "formik";
import axios from "axios";
function Requirement(){
    const [userStateData,setUserStateData]=useState([]);
    const validateform=(formdata)=>{
        var errors={};
        if(formdata.name==='') errors.name=("name is required"); 
        if(formdata.git==='') errors.git=("github Url is required"); 
        if(formdata.portfolio==='') errors.portfolio=("portfolio URL is required"); 
        if(formdata.resume==='') errors.resume=("resume URL is required"); 
       return errors;
       };

       const handleSubmit=async(formdata, { resetForm })=>{
        console.log(formdata);

        const response= await axios.post("http://localhost:3001/requirement/create",
       
        {
         name: formdata.name,
         githuburl: formdata.git,
         portfoliourl: formdata.portfolio,
         resumeurl: formdata.resume,
        });
        setUserStateData([...userStateData,response.data]);
        resetForm();
       };
    return(
        <div>
             <div style={{width:"200px",height:"50px",background:"purple"}} className="header">
             <Typography style={{color:"white", fontSize:"27px"}}>Requirement</Typography>
              </div>
              <Formik
       initialValues={{
        name:"",
        git:"",
        portfolio:"",
        resume:"",
        }}
       validate={(formdata)=>validateform(formdata)}
       onSubmit={handleSubmit}
     >
         {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         handleReset,
         isSubmitting,
       }) =>(
       
       <Box
       component="form"
       sx={{
         '& > :not(style)': { m: 1, width: '25ch' },
       }}
       noValidate
       autoComplete="off"
       onSubmit={handleSubmit}
       >
        {/* name */}
        <TextField id="name" 
        style={{width:"500px"}}
       label="Your Name" 
       variant="outlined"
       name="name" 
       value={values.name}     
        onChange={handleChange}
        onBlur={handleBlur} /><br/>
        <span style={{color:"red"}}>{touched.name && errors.name}</span><br/>
        {/* Github */}
       
       <TextField id="git" 
        style={{width:"500px"}}
       label="Github URL" 
       variant="outlined"
       name="git" 
       value={values.git}     
        onChange={handleChange}
        onBlur={handleBlur} /><br/>
        <span style={{color:"red"}}>{touched.git && errors.git}</span><br/>
       {/* Portfolio */}
       <TextField id="portfolio" 
       style={{width:"500px"}}
       label="Portfolio URL" 
       name="portfolio" 
       variant="outlined"
       value={values.portfolio}    
       onChange={handleChange}
       onBlur={handleBlur}   /><br/>
        <span style={{color:"red"}}>{touched.portfolio && errors.portfolio}</span><br/>
               {/* Resume */}
       <TextField 
      style={{width:"500px"}}
       id="resume" 
       label="Resume Url" 
        name="resume" 
       value={values.resume}
       type="resume"
       variant="outlined"       
       onChange={handleChange}
       onBlur={handleBlur}/><br/>
        <span style={{color:"red"}}>{touched.resume && errors.resume}</span><br/>
      
    
     <Button variant="contained" type="submit" disabled={isSubmitting} >Submit</Button>
       </Box>
       )}
       </Formik>
        </div>
    );
}

export default Requirement;