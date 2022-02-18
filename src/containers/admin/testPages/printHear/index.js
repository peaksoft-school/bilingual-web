import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'
import Input from '../../../../components/UI/input/index'
import Button from '../../../../components/UI/button/index'

const StyledP = styled('p')`
   padding: 0;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 18px;
   color: #4b4759;
`

const InputNumber = styled(Input)`
   width: 83px;
`

const StyledStack = styled(Stack)`
   position: relative;
   left: 100px;
   top: 3px;
`

const InputStack = styled(Input)`
   display: none;
`

const DivUpploadButton = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 791px;
   height: 60px;
`

const NumberSpan = styled('span')`
   margin-top: 10px;
`

const InputCorrectAnswer = styled(Input)`
   width: 900px;
   height: 70px;
`

const DivButtonSave = styled('div')`
   display: flex;
   width: 250px;
   justify-content: flex-end;
   justify-content: space-around;
   position: relative;
   left: 670px;
   top: 32px;
`

const PrintHear = () => {
   const [question, setQuestion] = useState({
      id: '',
      duration: '',
      title: '',
      correctAnswer: '',
      fileName: '',
      attempt: '',
      test_id: '',
   })

   const onQuestionChangeHandler = (e) => {
      setQuestion((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }))
   }

   const navigate = useNavigate()

   const onGoBackHandler = () => {
      navigate(-1)
   }

   const sumbitHandler = (e) => {
      e.preventDefault()
   }

   const [image, setImage] = useState()

   const onChangeImageHandler = (e) => {
      setImage(e.target.files[0])
   }

   return (
      <form onSubmit={sumbitHandler}>
         <div>
            <StyledP>Number off Replays</StyledP>
            <DivUpploadButton>
               <InputNumber
                  name="attempt"
                  value={question.attempt}
                  onChange={onQuestionChangeHandler}
               />
               <StyledStack direction="row" alignItems="center" spacing={2}>
                  <label htmlFor="contained-button-file">
                     <InputStack
                        accept="audio/mp3"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={onChangeImageHandler}
                     />
                     <Button variant="outlined" component="span">
                        Upload
                     </Button>
                  </label>
               </StyledStack>
               <NumberSpan>{image ? image.name : ''}</NumberSpan>
            </DivUpploadButton>
         </div>
         <StyledP>Correct answer</StyledP>
         <InputCorrectAnswer
            multiline
            name="correctAnswer"
            value={question.correctAnswer}
            onChange={onQuestionChangeHandler}
         />
         <DivButtonSave>
            <Button onClick={onGoBackHandler} variant="outlined">
               GO BACK
            </Button>
            <Button variant="contained" color="success">
               SAVE
            </Button>
         </DivButtonSave>
      </form>
   )
}
export default PrintHear
