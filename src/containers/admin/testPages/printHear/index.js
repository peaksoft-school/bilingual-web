import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'
import MainContainer from '../../../../layout/MainContainer'
import ContentCard from '../../../../components/UI/adminContentCard/index'
import AppSelect from '../../../../components/UI/select/index'
import Input from '../../../../components/UI/input/index'
import Header from '../../../../layout/adminHeader'
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

const StyledDiv = styled('div')`
   width: 100%;
   display: flex;
   box-sizing: border-box;
`

const InputTitle = styled(Input)`
   width: 700px;
   margin-right: 18px;
`

const InputDuration = styled(Input)`
   margin: 0;
   padding: 0;
   width: 181px;
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
   width: 661px;
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
      title: '',
      duration: '',
      type: '',
      numberOffReplays: '',
      correctAnswer: '',
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

   return (
      <>
         <Header />
         <MainContainer>
            <ContentCard>
               <form onSubmit={sumbitHandler}>
                  <StyledDiv>
                     <div>
                        <StyledP>Title</StyledP>
                        <InputTitle
                           name="title"
                           value={question.title}
                           onChange={onQuestionChangeHandler}
                        />
                     </div>
                     <div>
                        <StyledP>Duration (in minutes)</StyledP>
                        <InputDuration
                           name="duration"
                           value={question.duration}
                           onChange={onQuestionChangeHandler}
                        />
                     </div>
                  </StyledDiv>
                  <StyledP>Type</StyledP>
                  <AppSelect
                     options={[
                        'Select real English words',
                        'Listen and select word',
                        'Type what you hear',
                     ]}
                  />
                  <div>
                     <div>
                        <StyledP>Number off Replays</StyledP>
                        <DivUpploadButton>
                           <InputNumber
                              name="numberOffReplays"
                              value={question.numberOffReplays}
                              onChange={onQuestionChangeHandler}
                           />
                           <StyledStack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                           >
                              <label htmlFor="contained-button-file">
                                 <InputStack
                                    accept="image/*"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                 />
                                 <Button variant="outlined" component="span">
                                    Upload
                                 </Button>
                              </label>
                           </StyledStack>
                           <NumberSpan>
                              File_name_of_the_audio_file.mp3
                           </NumberSpan>
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
                  </div>
               </form>
            </ContentCard>
         </MainContainer>
      </>
   )
}
export default PrintHear
