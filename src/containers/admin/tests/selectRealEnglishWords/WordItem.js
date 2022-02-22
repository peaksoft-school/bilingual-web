import React from 'react'
import styled from 'styled-components'
import ReCheckbox from '../../../../components/UI/checkbox'
import Trash from '../../../../assets/icons/trash.svg'

function WordItem({ words, deleteWord, checkedHandler }) {
   return (
      <StyledContainer>
         {words.map((option) => {
            return (
               <Box>
                  <Item>{option.word}</Item>
                  <StyledDivIcons>
                     <ReCheckbox
                        checked={option.isChecked}
                        onClick={() => checkedHandler(option.id)}
                     />
                     <StyledTrash
                        src={Trash}
                        alt="trash"
                        onClick={() => deleteWord(option.id)}
                     />
                  </StyledDivIcons>
               </Box>
            )
         })}
      </StyledContainer>
   )
}

export default WordItem
const StyledContainer = styled.ul`
   width: 100%;
   padding: 0px;
   display: flex;
   flex-wrap: wrap;
   box-sizing: border-box;
`

const Box = styled.li`
   width: 280px;
   height: 46px;
   margin-top: 18px;
   margin-right: 18px;
   padding: 14px 16px;
   background: #ffffff;
   border: 1.53px solid #d4d0d0;
   box-sizing: border-box;
   border-radius: 8px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const Item = styled.span`
   padding: 5px;
   text-align: center;
   color: 'green';
`
const StyledDivIcons = styled.div`
   width: 66px;
   display: flex;
   justify-content: space-between;
`
const StyledTrash = styled.img`
   width: 23px;
   height: 22px;
   margin-top: 9px;
`