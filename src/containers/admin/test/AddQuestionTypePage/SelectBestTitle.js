import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../../../../UI/input'
import ReCheckbox from '../../../../UI/checkbox/index'
import Button from '../../../../UI/button/index'
import Trash from '../../../../../assets/icons/trash.svg'
import SelectBestTitleModal from './SelectBestTitleModal'

const SelectBestTitle = () => {
   const [isOpenModal, setIsOpenModal] = React.useState(false)
   const [options, setOptions] = useState([])

   const openModalHandler = () => {
      setIsOpenModal((prev) => !prev)
   }

   const addOptionsHandler = (enteredText) => {
      setOptions((prevOptions) => {
         const updateOptions = [...prevOptions]
         updateOptions.push({
            answers: enteredText,
            id: Math.random().toString(),
         })
         return updateOptions
      })
   }

   return (
      <div>
         <StyledP>Passage</StyledP>
         <Input multiline sx={{ width: '100%' }} />
         <Button
            onClick={openModalHandler}
            color="primary"
            variant="contained"
            sx={{ m: '32px 0 22px', float: 'right' }}
         >
            + ADD OPTIONS
         </Button>
         <SelectBestTitleModal
            onAddOptions={addOptionsHandler}
            onClose={openModalHandler}
            open={isOpenModal}
         />

         <StyledContainer>
            {options.map((option) => {
               return (
                  <Box key={option.id}>
                     <span style={{ width: '770px' }}>{option.answers}</span>
                     <StyledDivIcons>
                        <ReCheckbox />
                        <StyledTrash src={Trash} alt="trash" />
                     </StyledDivIcons>
                  </Box>
               )
            })}
         </StyledContainer>
         <StyledDivOfFooter>
            <Button color="primary" variant="outlined" sx={{ mr: '16px' }}>
               GO BACK
            </Button>
            <Button type="submit" color="secondary" variant="contained">
               SAVE
            </Button>
         </StyledDivOfFooter>
      </div>
   )
}

export default SelectBestTitle

const StyledContainer = styled.ul`
   width: 100%;
   padding: 0px;
   box-sizing: border-box;
   counter-reset: my-counter;
`

const Box = styled.li`
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
const StyledDivIcons = styled.div`
   width: 70px;
   display: flex;
   justify-content: space-between;
`
const StyledTrash = styled.img`
   width: 23px;
   height: 22px;
   margin-top: 9px;
`
const StyledDivOfFooter = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`
const StyledP = styled.p`
   padding: 0;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 18px;
   color: #4b4759;
`
