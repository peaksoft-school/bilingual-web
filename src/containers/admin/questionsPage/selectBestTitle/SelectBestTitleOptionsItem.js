import React from 'react'
import styled from 'styled-components'
import ReCheckbox from '../../../../components/UI/checkbox'
import Trash from '../../../../assets/icons/trash.svg'

function SelectBestTitleOptionsItem({ option, deletText, checkedandler }) {
   return (
      <Box>
         <Span>{option.word}</Span>
         <StyledDivIcons>
            <ReCheckbox
               checked={option.isTrue}
               onChange={() => checkedandler(option.id)}
            />
            <StyledTrash
               key={option}
               onClick={() => deletText(option.id)}
               src={Trash}
               alt="trash"
            />
         </StyledDivIcons>
      </Box>
   )
}
export default SelectBestTitleOptionsItem

const Span = styled('span')`
   width: 770px;
`
const Box = styled('li')`
   width: 100%;
   min-height: 46px;
   margin-top: 18px;
   padding: 14px 16px;
   background: #ffffff;
   border: 1.53px solid #d4d0d0;
   box-sizing: border-box;
   border-radius: 8px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   &::before {
      content: counter(my-counter);
      counter-increment: my-counter;
      width: 25px;
   }
`
const StyledDivIcons = styled('div')`
   width: 66px;
   display: flex;
   justify-content: space-between;
`
const StyledTrash = styled('img')`
   width: 23px;
   height: 22px;
   margin-top: 9px;
`
