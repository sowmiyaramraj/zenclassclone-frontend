import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Certificate(){
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
          {/* {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  
        </div>
    );
}

export default Certificate;