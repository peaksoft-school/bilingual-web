import React from 'react'
import { TableHead, TableRow } from '@mui/material'
import styled from 'styled-components'
import Button from '../../../../components/UI/button/index'

import {
   StyletTableRow,
   StyledTableCell,
   StyledHead,
   StyledTable,
} from '../../../../components/UI/table/Table'

function EvaluatingSubmittedResultsTable({ rows }) {
   return (
      <>
         <Linee>
            <Line />
         </Linee>
         <StyledTable>
            <TableHead>
               <TableRow>
                  <StyledHead align="right">#</StyledHead>
                  <StyledHead align="left">Question</StyledHead>
                  <StyledHead align="left">Score</StyledHead>
                  <StyledHead align="left">Status</StyledHead>
               </TableRow>
            </TableHead>
            {rows.map((row) => (
               <StyletTableRow key={row.number} align="center">
                  <StyledTableCell align="center">{row.number}</StyledTableCell>
                  <StyledTableCell align="left">{row.question}</StyledTableCell>
                  <StyledTableCell align="left">{row.score}</StyledTableCell>
                  <StyledTableCell align="left">{row.status}</StyledTableCell>

                  <StyledTableCell align="center">
                     <Button
                        color="primary"
                        variant="outlined"
                        style={{ padding: '6.5px 13.5px', float: 'right' }}
                     >
                        evaluate
                     </Button>
                  </StyledTableCell>
               </StyletTableRow>
            ))}
         </StyledTable>
      </>
   )
}

export default EvaluatingSubmittedResultsTable

const Linee = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`
const Line = styled.div`
   border: 0.8px solid #d4d0d0;
   position: absolute;
   width: 890px;
   background: #c4c4c4;
   display: flex;
   justify-content: center;
   align-items: center;
`
