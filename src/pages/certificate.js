import React,{useState,useEffect} from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import jwt from "jsonwebtoken";
import {useNavigate} from "react-router-dom";
  
function Certificate(){
  const navigate=useNavigate();
  const[certificate,setCertificate]=useState([]);
  useEffect(()=>{
       async function getData()
       {
        const decodedtoken=jwt.decode(localStorage.getItem("token"));
        if(decodedtoken.exp * 1000 < Date.now())
        {
          navigate("/signin");

        }
else{
           const responce= await axios.get("http://localhost:3001/certificate/get",{
            headers:{
              accesstoken: localStorage.getItem("token"),
            },
           });
           console.log(responce.data);           
           setCertificate(responce.data);           
       }
          }
       getData();
   },[]);
  
    return(
        <div style={{marginLeft: '100px',marginRight:"100px"}}>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead style={{background:"purple"}}>
          <TableRow >
            <TableCell style={{color:"white"}}  align="center">Certificate</TableCell>
            <TableCell style={{color:"white"}}  align="center">Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {certificate.map((row) => (
            <TableRow key={row.course}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.syllabus}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
        </div>
    );
}

export default Certificate;