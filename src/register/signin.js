import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import VerticalTabs from "../pages/tab"

function Signin(){
    const navigate=useNavigate();
    const handlesubmit=()=>{
        navigate("/tab");

    }
    return(
        <div>
            <h1>Signin</h1>
            <form onSubmit={handlesubmit}>
            <TextField id="outlined-basic" label="Email" variant="outlined" type="email" /><br/><br/>
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" /><br/><br/>
            <Button variant="contained" type="submit">Login</Button>
            </form>
        </div>
    );
}

export default Signin;