import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import View from '../../assets/candidate_icons/view.png'
import Reject from '../../assets/candidate_icons/reject.png'
import './candidate.scss';

function createData(
  id: string,
  name: string,
  position: string,
  firstLevel: string,
  secondLevel: string,
  thirdLevel: string,
  fourthLevel: string,
  totalMarks: string,
  status: string,
  actions: string
) {
  return { id, name, position, firstLevel, secondLevel, thirdLevel, fourthLevel, totalMarks, status, actions };
}

const rows = [
  createData('#001', 'John Doe', 'Designer', '6/10', '7/10', '3/10', '', '', 'Active', View),
  createData('#002', 'John Smith', 'Angular Developer', '6/10', '5/10', '5/10', '8/10', '24/40', 'Hired', View),
  createData('#003', 'Johnson Smith', 'Python Developer', '6/10', '7/10', '3/10', '', '', 'Active', View),
  createData('#004', 'Stella', 'Android Developer', '6/10', '2/10', '', '', '8/40', 'Reject', View),
  createData('#005', 'Randy', 'IOS Developer', '6/10', '7/10', '3/10', '', '', 'Active', View),
  createData('#006', 'John Doe', 'Junior Developer', '6/10', '7/10', '3/10', '', '', 'Active', View),
];

export default function CandidateTable() {
  return (
    <TableContainer component={Paper} style={{marginTop: "1rem"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor: "#F5F5F5"}}>
            <TableCell className='candidateTableHeader'>Job ID</TableCell>
            <TableCell align="left" className='candidateTableHeader'>Name</TableCell>
            <TableCell align="left" className='candidateTableHeader'>Position</TableCell>
            <TableCell align="left" className='candidateTableHeader'>1st Level</TableCell>
            <TableCell align="left" className='candidateTableHeader'>2nd Level</TableCell>
            <TableCell align="left" className='candidateTableHeader'>3rd Level</TableCell>
            <TableCell align="left" className='candidateTableHeader'>4th Level</TableCell>
            <TableCell align="left" className='candidateTableHeader'>Total Marks</TableCell>
            <TableCell align="left" className='candidateTableHeader'>Status</TableCell>
            <TableCell align="left" className='candidateTableHeader'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='candidateTableCell'>
                {row.id}
              </TableCell>
              <TableCell align="left" className='candidateTableCell'>{row.name}</TableCell>
              <TableCell align="left" className='candidateTableCell'>{row.position}</TableCell>
              <TableCell align="center" className='candidateTableCell'>
                {row?.firstLevel?row.firstLevel:row.status==='Active'?"...": <img src={Reject} alt='reject' />}
              </TableCell>
              <TableCell align="center" className='candidateTableCell'>
                {row?.secondLevel?row.secondLevel:row.status==='Active'?"...": <img src={Reject} alt='reject' />}
              </TableCell>
              <TableCell align="center" className='candidateTableCell'>
                {row?.thirdLevel?row.thirdLevel:row.status==='Active'?"...": <img src={Reject} alt='reject' />}
              </TableCell>
              <TableCell align="center" className='candidateTableCell'>
                {row?.fourthLevel?row.fourthLevel:row.status==='Active'?"...": <img src={Reject} alt='reject' />}
              </TableCell>
              <TableCell align="center" className='candidateTableCell'>
                {row?.totalMarks?row.totalMarks:"..."}
              </TableCell>
              <TableCell align="center" >
                <div style={{backgroundColor: row.status==="Active"?"#FFF9EC": row.status==="Hired"?"#0EAD0B26":"#E73B3B26", color: row.status==="Active"?"#F5C961": row.status==="Hired"?"#108F0E":"#D12323"}}>
                    <div style={{padding: "0.5rem"}} className='candidateTableCell'>
                        {row.status}
                    </div>
                </div>
              </TableCell>
              <TableCell align="center">
                <img src={row.actions} alt='view' style={{cursor: "pointer"}} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}