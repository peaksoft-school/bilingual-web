import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'
import NotStartedOutlinedIcon from '@mui/icons-material/NotStartedOutlined'
import PauseCircleFilledOutlinedIcon from '@mui/icons-material/PauseCircleFilledOutlined'
import Input from '../../../../components/UI/input/index'
import Button from '../../../../components/UI/button/index'
import {
   postQuestionRequest,
   postQuestionRequest2,
} from '../../../../api/testService'

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

const PrintHear = () => {
   const [question, setQuestion] = useState({
      correctAnswer: '',
      fileName: '',
      attemptNumber: '',
   })

   const [buttonName, setButtonName] = useState('Play')
   const [startStop, setStartStop] = useState(true)
   const [audio, setAudio] = useState({ file: {} })

   const { correctAnswer, attemptNumber } = question

   const onQuestionChangeHandler = (e) => {
      setQuestion((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }))
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

   const toggleStartStopHandler = () => {
      setStartStop((prev) => !prev)
   }

   const handleClick = () => {
      if (buttonName === 'Play') {
         audio.play.play()
         setButtonName('Pause')
      } else {
         audio.play.pause()
         setButtonName('Play')
      }
   }
   const onChangeImageHandler = (e) => {
      if (e.target.files[0]) {
         setAudio({
            file: e.target.files[0],
            play: new Audio(URL.createObjectURL(e.target.files[0])),
         })
      }
   }

   const ClickStartStopHandler = () => {
      handleClick()
      toggleStartStopHandler()
   }
   // console.log(audio.file)

   const sumbitHandler = async (e) => {
      e.preventDefault()
      const attempt = +attemptNumber
      const data = {
         correctAnswer,
         attempt,
      }
      const response = await sendFileToApi()
      const secondRes = await postQuestionRequest2(2, data)
      console.log(secondRes)
      console.log(response)
      // response.data api/tests/questions/:testId

      console.log(data)
   }

   // useEffect(() => {
   //    sendFileToApi()
   // }, [audio.file.name])

   return (
      <form onSubmit={sumbitHandler}>
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
