import React, { useState } from 'react'
import styled from 'styled-components'
import ReCheckbox from '../../../../UI/checkbox/index'
import Button from '../../../../UI/button/index'
import Trash from '../../../../../assets/icons/trash.svg'
import SelectRealEnglishWordModal from './SelectRealEnglishWordModal'

const SelectRealEnglishWord = () => {
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
   console.log(options)

   /* const deleteOptionsHandler = (optionId) => {
      setOptions((prevOptions) => {
         const updateOptions = prevOptions.filter(
            (option) => option.id !== optionId
         )
         return updateOptions
      })
   } */
   return (
      <div>
         <Button
            onClick={openModalHandler}
            color="primary"
            variant="contained"
            sx={{ m: '32px 0 4px', float: 'right' }}
         >
            + ADD OPTIONS
         </Button>
         <SelectRealEnglishWordModal
            onAddOptions={addOptionsHandler}
            onClose={openModalHandler}
            open={isOpenModal}
         />

         <StyledContainer>
            {options.map((option) => {
               return (
                  <Box>
                     <Item>{option.answers}</Item>
                     <StyledDivIcons>
                        <ReCheckbox />
                        <StyledTrash src={Trash} alt="trash" />
                     </StyledDivIcons>
                  </Box>
               )
            })}
         </StyledContainer>
         <StyledDivOfModalFooter>
            <Button color="primary" variant="outlined" sx={{ mr: '16px' }}>
               GO BACK
            </Button>
            <Button type="submit" color="secondary" variant="contained">
               SAVE
            </Button>
         </StyledDivOfModalFooter>
      </div>
   )
}

export default SelectRealEnglishWord

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
const StyledDivOfModalFooter = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`
