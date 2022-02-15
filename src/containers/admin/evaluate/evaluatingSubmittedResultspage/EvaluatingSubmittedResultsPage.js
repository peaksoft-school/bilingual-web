import React from 'react'
import styled from 'styled-components'
import { TableContainer } from '@mui/material'
import Header from '../../../../layout/adminHeader/index'
import EvaluatingSubmittedResultsTable from './EvaluatingSubmittedResultsTable'
import MainContainer from '../../../../layout/MainContainer'
import Button from '../../../../components/UI/button/index'
import { StyledPaper } from '../../../../components/UI/table/Table'

function createData(number, question, score, status) {
   return { number, question, score, status }
}

const rows = [
   createData('1', 'Select real English words', '0 out of 10', 'Not evaluated'),
   createData(
      '2',
      'Listen and select English word',
      '8 out of 10',
      'Not evaluated'
   ),
   createData('3'),
   createData('4'),
]
function EvaluatingSubmittedResultsPage() {
   return (
      <>
         <Header />
         <MainContainer>
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
               <EvaluatingSubmittedResultsTable rows={rows} />
            </TableContainer>
         </MainContainer>
      </>
   )
}

export default EvaluatingSubmittedResultsPage
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
