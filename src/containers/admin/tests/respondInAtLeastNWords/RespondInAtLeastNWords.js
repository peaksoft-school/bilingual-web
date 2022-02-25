import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Input from '../../../../components/UI/input/index'
import Button from '../../../../components/UI/button/index'
import { testActions } from '../../../../store'
import { addQuestionRequest } from '../../../../api/testService'

const RespondInAtLeastNWords = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { title, duration, type } = useSelector((state) => state.questions)

   const [statement, setStatement] = useState('')
   const [numberOfWords, setNumberOfWords] = useState('')

   const statementRespond = (event) => {
      setStatement(event.target.value)
   }
   const respondOfNumbers = (event) => {
      setNumberOfWords(event.target.value)
   }

   const respondLeastWordsHandler = (event) => {
      event.preventDefault()
      const respondData = {
         title,
         duration,
         statement,
         numberOfWords,
      }

      setStatement('')
      setNumberOfWords('')
      dispatch(testActions.resetQuestion())
      addQuestionRequest(8, type, respondData)
   }

   const onGoBackHandler = () => {
      navigate(-1)
   }
   return (
      <div style={{ marginTop: '30px' }}>
         <StyledP>Question statement</StyledP>
         <Input valu={statement} onChange={statementRespond} />
         <StyledP>Number of minimum words</StyledP>
         <Input
            valu={numberOfWords}
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
               onClick={respondLeastWordsHandler}
               type="submit"
               color="secondary"
               variant="contained"
            >
               SAVE
            </Button>
         </StyledDivOfModalFooter>
      </div>
   )
}

export default RespondInAtLeastNWords

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
