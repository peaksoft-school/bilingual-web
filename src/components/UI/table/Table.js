import Table from '@mui/material/Table'
import styled from 'styled-components'
import { Paper, TableCell, TableRow } from '@mui/material'
import { ReactComponent as DeleteIconn } from '../../../assets/icons/deleteIcon.svg'

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
      color: #4c4859;
   }
`

export const StyledTableCell = styled(TableCell)`
   &.MuiTableCell-body {
      border-radius: 8px;
      color: '#4C4859';
      font-weight: normal;
      font-size: 16px;
      font-family: 'DINNextRoundedLTW01-Regular';
      font-style: normal;
      /* padding: 50px 115px; */
   }
   &.MuiTableCell-root {
      /* padding: 16px 20px; */
   }
`
export const DeleteIcon = styled(DeleteIconn)`
   margin-top: 9px;
   margin-left: 20px;
   cursor: pointer;
   &:hover {
      color: #f61414;
   }
`
export const Div = styled.div`
   display: flex;
   justify-content: column;
   width: 100%;
`
export const StyledHead = styled(TableCell)`
   &.MuiTableCell-head {
      border-bottom: 'none';
      border-collapse: separate;
      background: transparent;
      border: none;
      color: #4c4859;
      font-weight: bold;
      font-family: 'DINNextRoundedLTW04-Medium';
      font-style: normal;
      font-size: 16px;
   }
`
export const StyledPaper = styled(Paper)`
<<<<<<< HEAD
    &.MuiPaper-root{
   border-radius: 20px;
   box-shadow: 0px 4px 39px rgba(196, 196, 196, 0.6);
   width: 100%;
   height: 100%,
   margin: auto;
   margin-left: auto;
   margin-top: 66px;
   border-collapse: separate;
   border-spacing: 0 5em;
}
=======
   &.MuiPaper-root {
      border-radius: 20px;
      box-shadow: 0px 4px 39px rgba(196, 196, 196, 0.6);
      border-collapse: separate;
      border-spacing: 0 5em;
      padding: 50px 115px;
      margin-top: 66px;
   }
>>>>>>> 81e5c9f165713c0458f9935e9083f116041a8814
`

export const StyledTable = styled(Table)`
   &.MuiTable-root {
      border-collapse: separate;
      border-spacing: 10px;
      margin: 26px 0;
      /* padding: 50px 115px 50px 115px; */
   }
`
