import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Input from '../../../../components/UI/input/index'
import Button from '../../../../components/UI/button/index'
import { testActions } from '../../../../store'
import { addQuestionRequest } from '../../../../api/testService'
import NotificationIconModal from '../../../../components/UI/modal/NotificationIconModal'
import { ROUTES } from '../../../../utils/constants/general'

const RespondInAtLeastNWords = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { title, duration, type } = useSelector((state) => state.questions)

   const [questionStatement, setQuestionStatement] = useState('')
   const [numberOfWords, setNumberOfWords] = useState('')
   const [isModal, setIsModal] = useState(false)
   const [message, setMessage] = useState('')
   const [error, setError] = useState(null)
   const [datas, setDatas] = useState('')

   const enabled = () => {
      return (
         questionStatement.trim() &&
         numberOfWords.trim() &&
         title.trim() &&
         duration.trim()
      )
   }

   const statementRespond = (event) => {
      setQuestionStatement(event.target.value)
   }
   const respondOfNumbers = (event) => {
      setNumberOfWords(event.target.value)
   }

   const onCloseModalHandler = () => {
      setIsModal((prevState) => !prevState)
   }

   const respondLeastWordsHandler = async (event) => {
      event.preventDefault()
      try {
         const countOfWords = +numberOfWords
         const respondData = {
            testId: 1,
            type,
            title,
            duration,
            questionStatement,
            countOfWords,
         }
         const response = await addQuestionRequest(respondData)
         setDatas(response.status)
         setMessage('Question is saved')
         setIsModal(true)
         dispatch(testActions.resetQuestion())
         setQuestionStatement('')
         setNumberOfWords('')
         navigate(ROUTES)
      } catch (error) {
         setIsModal(true)
         setMessage('Unable to save question')
         setError(error.message)
      }
   }

   const onGoBackHandler = () => {
      navigate(-1)
   }

   return (
      <Div>
         <NotificationIconModal
            open={isModal}
            onConfirm={onCloseModalHandler}
            error={error}
            success={datas}
            message={message}
         />
         <StyledP>Question statement</StyledP>
         <Input
            multiline
            value={questionStatement}
            onChange={statementRespond}
         />
         <StyledP>Number of minimum words</StyledP>
         <Input
            value={numberOfWords}
            onChange={respondOfNumbers}
            style={{ width: '83px' }}
         />
         <StyledDivOfModalFooter>
            <Button
               onClick={onGoBackHandler}
               color="primary"
               variant="outlined"
               sx={{ mr: '16px' }}
            >
               GO BACK
            </Button>
            <Button
               disabled={!enabled()}
               onClick={respondLeastWordsHandler}
               type="submit"
               color="secondary"
               variant="contained"
            >
               SAVE
            </Button>
         </StyledDivOfModalFooter>
      </Div>
   )
}

export default RespondInAtLeastNWords

const Div = styled.div`
   margin-top: 30px;
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

const StyledDivOfModalFooter = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`
