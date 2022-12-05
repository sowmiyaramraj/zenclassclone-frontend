import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Rank from "../images/rank.jpg"
function Leadership(){
    return(
        <div style={{paddingLeft:"50px",paddingRight:"50px"}}>
            <div>
            <img style={{height:"200px",width:"650px"}} src={Rank}/>
            </div>
        <div style={{marginLeft:"50px",marginRight:"50px"}}>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead style={{background:"purple"}}>
          <TableRow>
            <TableCell style={{color:"white"}}>Rank</TableCell>
            <TableCell style={{color:"white"}} align="right">Name</TableCell>
            <TableCell style={{color:"white"}}  align="right">Batch</TableCell>
            <TableCell style={{color:"white"}}  align="right">Learning</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>
    );
}
export default Leadership;