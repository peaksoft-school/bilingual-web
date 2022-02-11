import React from 'react'
import { TableContainer, TableHead, TableRow } from '@mui/material'
import {
   StyletTableRow,
   StyledTableCell,
   DeleteIcon,
   Div,
   StyledPaper,
   StyledHead,
   StyledTable,
} from '../../../../components/UI/table/Table'
import ReCheckbox from '../../../../components/UI/checkbox'

export const SubmittedResultsTable = ({ rows }) => {
   return (
      <TableContainer component={StyledPaper}>
         <StyledTable>
            <TableHead>
               <TableRow>
                  <StyledHead>#</StyledHead>
                  <StyledHead>User Name</StyledHead>
                  <StyledHead align="center">Date of Submitiion</StyledHead>
                  <StyledHead align="center">Question Type</StyledHead>
                  <StyledHead align="center">Status</StyledHead>
               </TableRow>
            </TableHead>
            {rows.map((row) => (
               <StyletTableRow key={row.number} align="center">
                  <StyledTableCell align="center">{row.number}</StyledTableCell>
                  <StyledTableCell align="center">
                     {row.userName}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.time}</StyledTableCell>
                  <StyledTableCell align="center">
                     {row.testNumber}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                     {row.evoluate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                     <Div>
                        <ReCheckbox />
                        <DeleteIcon />
                     </Div>
                  </StyledTableCell>
               </StyletTableRow>
            ))}
         </StyledTable>
      </TableContainer>
   )
}
