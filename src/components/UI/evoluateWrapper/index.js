import * as React from 'react'
import Table from '@mui/material/Table'
import { Paper, Checkbox } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

function createData(userName, time, testNumber, evoluate, icon) {
   return { userName, time, testNumber, evoluate, icon }
}

const rows = [
   createData('1', 'ANNA', '08:15', 'Test number 1', 'Not evaluated'),
   createData('1', 'ANNA', '08:15', 'Test number 1', 'Not evaluated'),
   createData('3'),
   createData('4'),
]

export default function BasicTable({ rows }) {
   return (
      <TableContainer
         component={Paper}
         sx={{
            borderRadius: '20px',
            boxShadow: '0px 4px 39px rgba(196, 196, 196, 0.6)',
            padding: '50px 115px',
            width: '70%',
            height: '80%',
            mx: 'auto',
            marginTop: '40px',
         }}
      >
         <Table sx={{ tableLayout: 'auto' }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="center">User Name</TableCell>
                  <TableCell align="center">Date of Submitiion</TableCell>
                  <TableCell align="center">Question Type</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell>.</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <TableRow
                     key={row.name}
                     sx={{
                        height: '66px',
                        color: '#4C4859',
                     }}
                  >
                     <TableCell
                        component="th"
                        scope="row"
                        sx={{ color: '#4C4859', padding: '0px 0px' }}
                        padding="0px 0px"
                     >
                        {row.userName}
                     </TableCell>
                     <TableCell
                        sx={{ color: '#4C4859', fontSize: '16px' }}
                        align="center"
                     >
                        {row.time}
                     </TableCell>
                     <TableCell
                        sx={{ color: '#4C4859', fontSize: '16px' }}
                        align="center"
                     >
                        {row.testNumber}
                     </TableCell>
                     <TableCell align="center">{row.evoluate}</TableCell>
                     <TableCell align="center">{row.evoluate}</TableCell>

                     <Checkbox />
                     <Checkbox />
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}
