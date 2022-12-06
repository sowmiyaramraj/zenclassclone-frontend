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

function Syllabus(){
  const[syllabus,setSyllabus]=useState([]);

   useEffect(()=>{
        async function getData()
        {
            const response= await axios.get("http://localhost:3001/syllabus/get");
            setSyllabus(response.data);           
            
        }
        getData();
    },[]);
    return(
        <div  style={{marginLeft: '100px',marginRight:"100px"}}>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead style={{background:"purple"}}>
          <TableRow >
            <TableCell style={{color:"white"}}  align="center" >Course</TableCell>
            <TableCell style={{color:"white"}} align="center">Syllabus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {syllabus.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.course}
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

export default Syllabus;