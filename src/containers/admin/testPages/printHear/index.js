import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'
import NotStartedOutlinedIcon from '@mui/icons-material/NotStartedOutlined'
import PauseCircleFilledOutlinedIcon from '@mui/icons-material/PauseCircleFilledOutlined'
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

const ButtonStartStop = styled(Button)`
   width: 30px;
   height: 45px;
   position: relative;
   top: 1px;
   &.MuiButton-root {
      border: none;
   }
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

let a

const PrintHear = () => {
   const [question, setQuestion] = useState({
      correctAnswer: '',
      fileName: '',
      attempt: '',
      test_id: '',
   })

   const [buttonName, setButtonName] = useState('Play')
   const [audio, setAudio] = useState(null)
   const [uploadedAudioObject, setUploadedAudioObject] = useState(null)
   const [startStop, setStartStop] = useState(true)

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

   const toggleStartStopHandler = () => {
      setStartStop((prev) => !prev)
   }

   useEffect(() => {
      if (a) {
         a.pause()
         a = null
         setButtonName('Play')
      }
      if (audio) {
         a = new Audio(audio)
         a.onended = () => {
            setButtonName('Play')
         }
      }
   }, [audio])

   const handleClick = () => {
      if (buttonName === 'Play') {
         a.play()
         setButtonName('Pause')
      } else {
         a.pause()
         setButtonName('Play')
      }
   }
   const onChangeImageHandler = (e) => {
      setUploadedAudioObject(e.target.files[0])
      if (e.target.files[0]) {
         setAudio(URL.createObjectURL(e.target.files[0]))
      }
   }

   const ClickStartStopHandler = () => {
      handleClick()
      toggleStartStopHandler()
   }

   const sumbitHandler = (e) => {
      e.preventDefault()
   }

   return (
      <form onSubmit={sumbitHandler}>
         <div>
            <StyledP>Number off Replays</StyledP>
            <DivUppload>
               <InputNumber
                  name="attempt"
                  value={question.attempt}
                  onChange={onQuestionChangeHandler}
               />
               <StyledStack direction="row" alignItems="center" spacing={2}>
                  <label htmlFor="contained-button-file">
                     <InputStack
                        accept="audio/mp3 audio/mpeg"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={onChangeImageHandler}
                     />
                     <Button variant="outlined" component="span">
                        Upload
                     </Button>
                  </label>
                  <ButtonStartStop variant="outlined">
                     {startStop ? (
                        <NotStartedOutlinedIcon
                           color="primary"
                           onClick={ClickStartStopHandler}
                        />
                     ) : (
                        <PauseCircleFilledOutlinedIcon
                           color="primary"
                           onClick={ClickStartStopHandler}
                        />
                     )}
                  </ButtonStartStop>
               </StyledStack>
               <NumberSpan>
                  {uploadedAudioObject ? uploadedAudioObject.name : ''}
               </NumberSpan>
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
            <ButtonSave variant="contained" color="success">
               SAVE
            </ButtonSave>
         </DivFooterSave>
      </form>
   )
}
export default PrintHear
