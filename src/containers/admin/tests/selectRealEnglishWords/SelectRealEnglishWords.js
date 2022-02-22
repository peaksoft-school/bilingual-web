import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../components/UI/button/index'
import SelectRealEnglishWordModal from './SelectRealEnglishWordModal'
import { testActions } from '../../../../store'
import { addQuestionRequest } from '../../../../api/testService'
import { ROUTES } from '../../../../utils/constants/general'
import WordItem from './WordItem'

const SelectRealEnglishWord = () => {
   const dispatch = useDispatch()
   const { title, duration, type } = useSelector((state) => state.questions)
   const navigate = useNavigate()
   const [isOpenModal, setIsOpenModal] = React.useState(false)
   const [words, setWords] = useState([])

   const checkedHandler = (id) => {
      const selectedValue = words.find((el) => el.id === id)
      const optionsWithSelected = words.map((el) => {
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

      setWords(optionsWithSelected)
   }

   const deleteWord = (id) => {
      const newWord = words.filter((item) => item.id !== id)
      setWords(newWord)
   }

   const openModalHandler = () => {
      setIsOpenModal((prev) => !prev)
   }

   const addOptionsHandler = (text) => {
      const { enteredValue, checkbox } = text
      setWords((prevWords) => {
         const updateWords = [...prevWords]
         updateWords.push({
            word: enteredValue,
            isTrue: true,
            isChecked: checkbox,
            id: uuidv4(),
         })
         return updateWords
      })
   }

   const selectFormHandler = (e) => {
      e.preventDefault()
      const data = {
         words,
         title,
         duration,
         active: true,
      }
      dispatch(testActions.resetQuestion())
      navigate(ROUTES.SELECT_REAL_ENGLISH_WORDS)
      setWords([])
      addQuestionRequest(3, type, data)
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
            <WordItem
               words={words}
               deleteWord={deleteWord}
               checkedHandler={checkedHandler}
            />
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

const StyledDivOfModalFooter = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`
