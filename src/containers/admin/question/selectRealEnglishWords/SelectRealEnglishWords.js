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

   const enabled = () => words.length > 0 && title.trim() && duration.trim()

   const checkedHandler = (id) => {
      const optionsWithSelected = words.map((el) => {
         if (el.id === id) {
            return {
               ...el,
               isChecked: !el.isChecked,
            }
         }
         return el
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
      if (words.length === 0 && title.trim() && duration.trim()) return
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
            <StledButton
               onClick={openModalHandler}
               color="primary"
               variant="contained"
            >
               + ADD OPTIONS
            </StledButton>
            <SelectRealEnglishWordModal
               onAddOptions={addOptionsHandler}
               onClose={openModalHandler}
               open={isOpenModal}
            />
            <StyledContainer>
               {words.map((option) => {
                  return (
                     <WordItem
                        key={option}
                        words={option}
                        deleteWord={deleteWord}
                        checkedHandler={checkedHandler}
                     />
                  )
               })}
            </StyledContainer>
            <StyledDivOfModalFooter>
               <StyledBtn color="primary" variant="outlined">
                  GO BACK
               </StyledBtn>
               <Button
                  disabled={!enabled()}
                  type="submit"
                  color="secondary"
                  variant="contained"
               >
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
const StyledDivOfModalFooter = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`
const StledButton = styled(Button)`
   margin: 32px 0 4px;
   float: right;
`
const StyledBtn = styled(Button)`
   margin-right: 16px;
`
