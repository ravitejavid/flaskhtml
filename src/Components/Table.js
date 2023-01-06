import React from 'react';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material'

function Tableone() {
  return (
    <div>
      <TableContainer component={Paper} sx={{ maxHeight:'200px'}}>
     <Table aria-label='simple table' stickyHeader>
         <TableHead >
          <TableRow >
            <TableCell >Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Login</TableCell>
            <TableCell  align='center'>Logout</TableCell>
            <TableCell  align='center'>No.of exits</TableCell>
            <TableCell  align='center'>Active hours</TableCell>
            <TableCell  align='center'>Action</TableCell>
          </TableRow>
         </TableHead>
         <TableBody>
          {
            tabledata.map((row) => (
              <TableRow 
              key={row.name}
              sx={{'&:last-child td, &:last-child th':{ border:0}}}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell >{row.Date} </TableCell>
                <TableCell >{row.Login} </TableCell>
                <TableCell align='center'>{row.Logout} </TableCell>
                <TableCell align='center'>{row.Noofexits} </TableCell>
                <TableCell align='center'>{row.Activehours} </TableCell>
                <TableCell align='center'>{row.Action} </TableCell>

              </TableRow>

            ) )
          }
         </TableBody>
     </Table>
      </TableContainer>

 
    </div>
    
  )
}

export default Tableone

const tabledata = [{
  "name": "Manohar",
  "Date":"20/09/2022",
  "Login": "11:12AM",
  "Logout": "18:12PM",
  "Noofexits": 4,
   "Activehours":"07:00:12s",
   "Action":"Request to edit"
}, {
  "name": "Manohar",
  "Date":"20/09/2022",
  "Login": "11:12AM",
  "Logout": "18:12PM",
  "Noofexits": 4,
   "Activehours":"07:00:12s",
   "Action":"Request to edit"
},{
  "name": "Manohar",
  "Date":"20/09/2022",
  "Login": "11:12AM",
  "Logout": "18:12PM",
  "Noofexits": 4,
   "Activehours":"07:00:12s",
   "Action":"Request to edit"
},{
  "name": "Manohar",
  "Date":"20/09/2022",
  "Login": "11:12AM",
  "Logout": "18:12PM",
  "Noofexits": 4,
   "Activehours":"07:00:12s",
   "Action":"Request to edit"
}, {
  "name": "Manohar",
  "Date":"20/09/2022",
  "Login": "11:12AM",
  "Logout": "18:12PM",
  "Noofexits": 4,
   "Activehours":"07:00:12s",
   "Action":"Request to edit"
},{
  "name": "Manohar",
  "Date":"20/09/2022",
  "Login": "11:12AM",
  "Logout": "18:12PM",
  "Noofexits": 4,
   "Activehours":"07:00:12s",
   "Action":"Request to edit"
},
{
  "name": "Manohar",
  "Date":"20/09/2022",
  "Login": "11:12AM",
  "Logout": "18:12PM",
  "Noofexits": 4,
   "Activehours":"07:00:12s",
   "Action":"Request to edit"
}, {
  "name": "Manohar",
  "Date":"20/09/2022",
  "Login": "11:12AM",
  "Logout": "18:12PM",
  "Noofexits": 4,
   "Activehours":"07:00:12s",
   "Action":"Request to edit"
},{
  "name": "Manohar",
  "Date":"20/09/2022",
  "Login": "11:12AM",
  "Logout": "18:12PM",
  "Noofexits": 4,
   "Activehours":"07:00:12s",
   "Action":"Request to edit"
}]