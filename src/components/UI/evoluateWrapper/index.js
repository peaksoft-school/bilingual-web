import * as React from 'react'
import Table from '@mui/material/Table'
import styled from 'styled-components'
import { Paper } from '@mui/material'
import { DeleteOutlined } from '@mui/icons-material'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Header from '../../../layout/adminHeader'
import MainContainer from '../../../layout/MainContainer'
import ReCheckbox from '../checkbox'

function createData(number, userName, time, testNumber, evoluate, icon) {
   return { number, userName, time, testNumber, evoluate, icon }
}

const rows = [
   createData('1', 'Adilet', '08:15', 'Test number 1', 'Not evaluated'),
   createData('2', 'Nurs', '08:15', 'Test number 1', 'Not evaluated'),
   createData('3'),
   createData('4'),
]

export default function BasicTable() {
   return (
      <>
         <Header />
         <MainContainer>
            <TableContainer component={StyledPaper}>
               <StyledTable>
                  <TableHead>
                     <TableRow sx={{ color: '#4C4859' }}>
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
                           {/* {row.userName} */}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                           {/* {row.time} */}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                           {/* {row.testNumber} */}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                           {/* {row.evoluate} */}
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
export const StyletTableRow = styled(TableRow)`
   &.MuiTableRow-root {
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0px 3px 14px rgba(0, 0, 0, 0.09);
      padding: 30px;
      align-content: space-between;
      border-collapse: separate;
      border-spacing: 0 5em;
      padding-top: 15px;
      font-size: 16px;
   }
`

export const StyledTableCell = styled(TableCell)`
   &.MuiTableCell-body {
      border-radius: 8px;
      color: '#4C4859';
      font-size: 16px;
      font-family: 'DINNextRoundedLTW01-Regular';
      font-style: normal;
      padding: 50px 115px;
   }
`
const DeleteIcon = styled(DeleteOutlined)`
   &.MuiSvgIcon-root {
      margin-top: 9px;
      margin-left: 20px;
      color: #9a9a9a;
      cursor: pointer;
      &:hover {
         color: #a9a9a9;
      }
   }
`
const Div = styled.div`
   display: flex;
   justify-content: column;
`
export const StyledHead = styled(TableCell)`
   &.MuiTableCell-head {
      border-bottom: 'none';
      border-collapse: separate;
      background: transparent;
      border: none;
      color: #4c4859;
      font-family: 'DINNextRoundedLTW04-Medium';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
   }
`
export const StyledPaper = styled(Paper)`
&.MuiPaper-root{
   border-radius: 20px;
   box-shadow: 0px 4px 39px rgba(196, 196, 196, 0.6);
   /* width: 111%; */
   height: 90%,
   margin: auto;
   margin-left: auto;
   margin-top: 66px;
   border-collapse: separate;
   border-spacing: 0 5em;
}
`
export const StyledTable = styled(Table)`
   &.MuiTable-root {
      border-collapse: separate;
      border-spacing: 10px;
      padding: 50px 115px;
   }
`
