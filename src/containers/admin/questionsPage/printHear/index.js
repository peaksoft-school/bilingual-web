import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'
import start from '../../../../assets/icons/start.svg'
import stop from '../../../../assets/icons/stop.svg'
import Input from '../../../../components/UI/input/index'
import Button from '../../../../components/UI/button/index'
import {
   postQuestionRequest,
   addQuestionRequest,
} from '../../../../api/testService'
import { testActions } from '../../../../store'

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
   left: 50px;
   top: 3px;
`

const InputStack = styled(Input)`
   display: none;
`

const DivUppload = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 881px;
   height: 60px;
`

const NumberSpan = styled('span')`
   margin-top: 10px;
   width: 360px;
`
const ImgStart = styled('img')`
   cursor: pointer;
`

const InputCorrectAnswer = styled(Input)`
   width: 900px;
   height: 70px;
`

const DivFooterSave = styled('div')`
   display: flex;
   width: 250px;
   justify-content: flex-end;
   justify-content: space-around;
   position: relative;
   left: 670px;
   top: 32px;
`

const ButtonSave = styled(Button)`
   &.MuiButton-root {
      border: none;
   }
`

const PrintHear = () => {
   const [question, setQuestion] = useState({
      correctAnswer: '',
      fileName: '',
      attemptNumber: '',
   })
   const { title, duration, type } = useSelector((state) => state.questions)
   const [startStop, setStartStop] = useState(true)
   const [audio, setAudio] = useState({ file: {} })
   const transformedType = type.replace(/[\s.,%]/g, '')
   const dispatch = useDispatch()
   const { correctAnswer, attemptNumber } = question

   const onQuestionChangeHandler = (e) => {
      setQuestion((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }))
   }

   const clearState = () => {
      setAudio({ file: {} })
      setQuestion({ correctAnswer: '', attemptNumber: '' })
   }

   const sendFileToApi = () => {
      const formData = new FormData()
      formData.append('file', audio.file)
      const response = postQuestionRequest(formData)
      return response
   }

   const navigate = useNavigate()

   const onGoBackHandler = () => {
      navigate(-1)
   }

   const stopAudio = () => {
      setStartStop(true)
      audio.play.pause()
   }

   const playAudio = () => {
      setStartStop(false)
      audio.play.play()
   }

   const onChangeAudioHandler = (e) => {
      if (e.target.files[0]) {
         setAudio({
            file: e.target.files[0],
            play: new Audio(URL.createObjectURL(e.target.files[0])),
         })
      }
   }

   const submitPrintHearHandler = async (e) => {
      e.preventDefault()
      const attempt = +attemptNumber
      const response = await sendFileToApi()
      const data = {
         testId: 1,
         type: transformedType,
         title,
         duration,
         attempt,
         correctAnswer,
         file: response.data,
      }
      addQuestionRequest(data)
         .then((result) => alert('success', JSON.stringify(result.datas)))
         .catch((err) => alert(err))
      dispatch(testActions.resetQuestion())
      navigate('/*')
      clearState()
   }

   return (
      <form onSubmit={submitPrintHearHandler}>
         <div>
            <StyledP>Number off Replays</StyledP>
            <DivUppload>
               <InputNumber
                  name="attemptNumber"
                  value={question.attemptNumber}
                  onChange={onQuestionChangeHandler}
               />
               <StyledStack direction="row" alignItems="center" spacing={2}>
                  <label htmlFor="contained-button-file">
                     <InputStack
                        accept="audio/mp3 audio/mpeg"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={onChangeAudioHandler}
                     />
                     <Button variant="outlined" component="span">
                        Upload
                     </Button>
                  </label>
                  {startStop ? (
                     <ImgStart src={start} onClick={playAudio} alt="start" />
                  ) : (
                     <ImgStart src={stop} onClick={stopAudio} alt="stop" />
                  )}
               </StyledStack>
               <NumberSpan>{audio.file.name ? audio.file.name : ''}</NumberSpan>
            </DivUppload>
         </div>
         <StyledP>Correct answer</StyledP>
         <InputCorrectAnswer
            multiline
            name="correctAnswer"
            value={question.correctAnswer}
            onChange={onQuestionChangeHandler}
         />
         <DivFooterSave>
            <Button onClick={onGoBackHandler} variant="outlined">
               GO BACK
            </Button>
            <ButtonSave type="sumbit" variant="contained" color="success">
               SAVE
            </ButtonSave>
         </DivFooterSave>
      </form>
   )
}
export default PrintHear
