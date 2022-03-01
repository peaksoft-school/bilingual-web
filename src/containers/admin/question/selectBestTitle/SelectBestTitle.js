import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid7 } from 'uuid'
import Input from '../../../../components/UI/input/index'
import Button from '../../../../components/UI/button/index'
import SelectBestTitleModal from './SelectBestTitleModal'
import SelectBestTitleOptionsItem from './SelectBestTitleOptionsItem'
import { addQuestionRequest } from '../../../../api/testService'
import { testActions } from '../../../../store'
import NotificationIconModal from '../../../../components/UI/modal/NotificationIconModal'

const SelectBestTitle = () => {
   const [isOpenModal, setIsOpenModal] = React.useState(false)
   const { title, duration, type } = useSelector((state) => state.questions)
   const transformedType = type.replace(/[\s.,%]/g, '')
   const [words, setWords] = React.useState([])
   const [passage, setPassage] = useState('')
   const dispatch = useDispatch()

   const enabled = () => {
      return (
         words.length > 0 && title.trim() && duration.trim() && passage.trim()
      )
   }

   const checkedHandler = (id) => {
      const optionsWithSelected = words.map((el) => {
         if (el.id === id) {
            return {
               ...el,
               isTrue: !el.isTrue,
            }
         }
         return el
      })
      setWords(optionsWithSelected)
   }
   const onChangePassage = (e) => {
      setPassage(e.target.value)
   }
   const deletText = (id) => {
      const newText = words.filter((item) => item.id !== id)
      setWords(newText)
   }
   const openModalHandler = () => {
      setIsOpenModal((prev) => !prev)
   }
   const addOptionsHandler = (enteredText) => {
      const { enteredValue, isChecked } = enteredText
      setWords((prevOptions) => {
         const updateOptions = [...prevOptions]
         updateOptions.push({
            word: enteredValue,
            isTrue: isChecked,
            id: uuid7(),
         })
         return updateOptions
      })
   }
   const [formValue, setFormValue] = useState('')
   const [message, setMessage] = useState('')
   const [isModal, setIsModal] = useState(false)
   const [error, setError] = useState(null)
   const onCloseModal = () => {
      setIsModal((prev) => !prev)
   }
   const clearSelectBestTitleState = () => {
      setPassage('')
      setWords([])
   }
   const selectBestTitleFormHandler = async (e) => {
      e.preventDefault()
      try {
         const selectIdeaData = {
            words,
            testId: 1,
            type: transformedType,
            title,
            duration,
            passage,
         }
         const responseResult = await addQuestionRequest(selectIdeaData)
         setFormValue(responseResult.status)
         setMessage('Question is saved')
         setIsModal(true)
         dispatch(testActions.resetQuestion())
         clearSelectBestTitleState()
      } catch (error) {
         setIsModal(true)
         setMessage('Unable to save question')
         setError(error.message)
      }
   }
   return (
      <form onSubmit={selectBestTitleFormHandler}>
         <NotificationIconModal
            open={isModal}
            onConfirm={onCloseModal}
            error={error}
            success={formValue}
            message={message}
         />
         <div>
            <StyledP>Passage</StyledP>
            <InputPassage
               value={passage}
               onChange={onChangePassage}
               multiline
            />
            <ButtonADDOptions
               onClick={openModalHandler}
               color="primary"
               variant="contained"
            >
               + ADD OPTIONS
            </ButtonADDOptions>
            <SelectBestTitleModal
               onAddOptions={addOptionsHandler}
               onClose={openModalHandler}
               open={isOpenModal}
            />
            <StyledContainer>
               {words.map((option) => {
                  return (
                     <SelectBestTitleOptionsItem
                        key={option.id}
                        option={option}
                        deletText={deletText}
                        checkedHandler={checkedHandler}
                     />
                  )
               })}
            </StyledContainer>
            <StyledDivOfFooter>
               <ButtonGoBack color="primary" variant="outlined">
                  GO BACK
               </ButtonGoBack>
               <Button
                  disabled={!enabled()}
                  type="submit"
                  color="secondary"
                  variant="contained"
               >
                  SAVE
               </Button>
            </StyledDivOfFooter>
         </div>
      </form>
   )
}
export default SelectBestTitle

const InputPassage = styled(Input)`
   width: 100;
`
const ButtonADDOptions = styled(Button)`
   margin: 32px 0 22px;
   float: right;
`
const StyledContainer = styled('ul')`
   width: 100%;
   padding: 0px;
   box-sizing: border-box;
   counter-reset: my-counter;
`
const StyledDivOfFooter = styled('div')`
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
const ButtonGoBack = styled(Button)`
   margin-right: 16px;
`
