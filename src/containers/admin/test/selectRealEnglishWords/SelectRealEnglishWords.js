import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../components/UI/button/index'
import Trash from '../../../../assets/icons/trash.svg'
import SelectRealEnglishWordModal from './SelectRealEnglishWordModal'
import ReCheckbox from '../../../../components/UI/checkbox'
import { testActions } from '../../../../store'
import { postQuestionRequest } from '../../../../api/testService'

const SelectRealEnglishWord = () => {
   const dispatch = useDispatch()

   const { title, duration, type } = useSelector((state) => state.questions)
   const [isOpenModal, setIsOpenModal] = React.useState(false)
   const [options, setOptions] = useState([])

   const checkedHandler = (id) => {
      const selectedValue = options.find((el) => el.id === id)
      const optionsWithSelected = options.map((el) => {
         if (el.id === selectedValue.id) {
            return {
               ...selectedValue,
               isChecked: !selectedValue.isChecked,
            }
         }
         return {
            ...el,
         }
      })

      setOptions(optionsWithSelected)
   }

   const deleteWord = (id) => {
      const newWord = options.filter((item) => item.id !== id)
      setOptions(newWord)
   }

   const openModalHandler = () => {
      setIsOpenModal((prev) => !prev)
   }

   const addOptionsHandler = (text) => {
      const { enteredValue, checkbox } = text
      setOptions((prevOptions) => {
         const updateOptions = [...prevOptions]
         updateOptions.push({
            word: enteredValue,
            isTrue: true,
            isChecked: checkbox,
            id: uuidv4(),
         })
         return updateOptions
      })
   }

   const selectFormHandler = (e) => {
      e.preventDefault()
      const data = {
         options,
         title,
         duration,
         active: true,
      }
      dispatch(testActions.resetQuestion())
      setOptions([])
      postQuestionRequest(3, type, data)
   }

   return (
      <div>
         <form onSubmit={selectFormHandler}>
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
            <StyledDivOfModalFooter>
               <Button color="primary" variant="outlined" sx={{ mr: '16px' }}>
                  GO BACK
               </Button>
               <Button type="submit" color="secondary" variant="contained">
                  SAVE
               </Button>
            </StyledDivOfModalFooter>
         </form>
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
