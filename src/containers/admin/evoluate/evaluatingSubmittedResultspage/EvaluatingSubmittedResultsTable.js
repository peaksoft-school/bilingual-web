import React from 'react'
import { TableContainer, TableHead, TableRow } from '@mui/material'
import styled from 'styled-components'
import Button from '../../../../components/UI/button/index'

import {
   StyletTableRow,
   StyledTableCell,
   StyledPaper,
   StyledHead,
   StyledTable,
} from '../../../../components/UI/table/Table'

function EvaluatingSubmittedResultsTable({ rows }) {
   return (
      <TableContainer component={StyledPaper}>
         <Wrapper>
            <Divv>
               <span>User: John Smith</span>
               <span>Test: Test number 1</span>
            </Divv>
            <Wrapperr>
               <span>Final Score: 0</span>
               <span>Final Status: Evalauted</span>
            </Wrapperr>
         </Wrapper>
         <Div>
            <Button color="primary" variant="outlined">
               SEND RESULTS TO USER’S EMAIL
            </Button>
         </Div>
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
      </TableContainer>
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
const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 0px 115px;
   margin-top: 50px;
`
const Wrapperr = styled.div`
   display: flex;
   flex-direction: column;
   text-align: end;
   padding: 5px;
`

const Div = styled.div`
   display: flex;
   justify-content: flex-end;
   padding: 20px;
   margin: 0px 100px;
   text-align: end;
`
const Divv = styled.div`
   display: flex;
   flex-direction: column;
   padding: 5px;
   color: #4c4859;
`
