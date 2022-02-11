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
import Header from '../../../../layout/adminHeader'
import MainContainer from '../../../../layout/MainContainer'

export const SubmittedResultsTable = ({ rows }) => {
   return (
      <>
         <Header />
         <MainContainer>
            <TableContainer component={StyledPaper}>
               <StyledTable>
                  <TableHead>
                     <TableRow sx={{ color: ' #4C4859' }}>
                        <StyledHead>#</StyledHead>
                        <StyledHead>User Name</StyledHead>
                        <StyledHead align="center">
                           Date of Submitiion
                        </StyledHead>
                        <StyledHead align="center">Question Type</StyledHead>
                        <StyledHead align="center">Status</StyledHead>
                     </TableRow>
                  </TableHead>
                  {rows.map((row) => (
                     <StyletTableRow key={row.number} align="center">
                        <StyledTableCell align="center">
                           {row.number}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                           {row.userName}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                           {row.time}
                        </StyledTableCell>
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
         </MainContainer>
      </>
   )
}
