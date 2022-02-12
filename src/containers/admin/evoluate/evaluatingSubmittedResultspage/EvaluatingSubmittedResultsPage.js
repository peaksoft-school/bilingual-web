import React from 'react'
import Header from '../../../../layout/adminHeader/index'
import EvaluatingSubmittedResultsTable from './EvaluatingSubmittedResultsTable'
import MainContainer from '../../../../layout/MainContainer'

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
            <EvaluatingSubmittedResultsTable rows={rows} />
         </MainContainer>
      </>
   )
}

export default EvaluatingSubmittedResultsPage
