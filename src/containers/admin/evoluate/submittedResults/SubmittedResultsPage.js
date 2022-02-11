import * as React from 'react'
import { SubmittedResultsTable } from './SubmittedResultsTable'

function createData(number, userName, time, testNumber, evoluate, icon) {
   return { number, userName, time, testNumber, evoluate, icon }
}

const rows = [
   createData('1', 'Adilet', '08:15', 'Test number 1', 'Not evaluated'),
   createData('2', 'Nurs', '08:15', 'Test number 1', 'Not evaluated'),
   createData('3'),
   createData('4'),
]

export default function SubmittedResultsPage() {
   return (
      <div>
         <SubmittedResultsTable rows={rows} />
      </div>
   )
}
