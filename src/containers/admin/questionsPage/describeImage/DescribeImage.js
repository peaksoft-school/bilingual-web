import styled from 'styled-components'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../../../components/UI/input'
import {
   addQuestionRequest,
   postQuestionRequest,
} from '../../../../api/testService'
import Button from '../../../../components/UI/button/index'
import { testActions } from '../../../../store'
import NotificationIconModal from '../../../../components/UI/modal/NotificationIconModal'

const StyledP = styled('p')`
   padding: 0;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 18px;
   color: #4b4759;
`

const DivImage = styled('div')`
   width: 300px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 30px;
`

const InputImage = styled(Input)`
   display: none;
`
const ButtonImage = styled(Button)`
   width: 182px;
   height: 178px;
   background-color: none;
   color: #4c4859;
   border: 1px solid #d4d0d0;
`

const InputFooter = styled(Input)`
   width: 900px;
   height: 70px;
`

const DivFooter = styled('div')`
   display: flex;
   width: 250px;
   justify-content: flex-end;
   justify-content: space-around;
   position: relative;
   left: 670px;
   top: 32px;
`

const ImageUpload = styled('img')`
   width: 182px;
   height: 178px;
   border-radius: 5%;
`
const StyledBtn = styled(Button)`
   margin-right: 16px;
`

const DescribeImage = () => {
   const [image, setImage] = useState({})
   const { title, duration, type } = useSelector((state) => state.questions)
   const transformedType = type.replace(/[\s.,%]/g, '')
   const [correctAnswer, setcCorrectAnswer] = useState('')
   const dispatch = useDispatch()

   const correctAnswerChangeHandler = (e) => {
      setcCorrectAnswer(e.target.value)
   }

   const sendFileToApi = () => {
      const formData = new FormData()
      formData.append('file', image.file)
      const response = postQuestionRequest(formData)
      return response
   }

   const onChangeHandler = (e) => {
      if (!e.target.files[0]) return
      setImage({
         file: e.target.files[0],
         preview: URL.createObjectURL(e.target.files[0]),
      })
   }

   const [datas, setDatas] = useState('')
   const [message, setMessage] = useState('')
   const [isModal, setIsModal] = useState(false)
   const [error, setError] = useState(null)

   const enabled =
      image.file && title.trim() && duration.trim() && correctAnswer.trim()

   const onCloseModalHandler = () => {
      setIsModal((prevState) => !prevState)
   }

   const clearStateDescribeImageState = () => {
      setcCorrectAnswer('')
      setImage({})
   }

   const sumbitDescribeImageHandler = async (e) => {
      e.preventDefault()
      if (correctAnswer.trim() === 0 && title.trim() && duration.trim()) {
         return
      }
      try {
         const responseImage = await sendFileToApi()
         const describeImageData = {
            testId: 0,
            type: transformedType,
            title,
            duration,
            file: responseImage.data,
            correctAnswer,
         }
         const responseResult = await addQuestionRequest(describeImageData)
         setDatas(responseResult.status)
         setMessage('Question is saved')
         setIsModal(true)
         dispatch(testActions.resetQuestion())
         clearStateDescribeImageState()
      } catch (error) {
         setIsModal(true)
         setMessage('Unable to save question')
         setError(error.message)
      }
   }

   return (
      <form onSubmit={sumbitDescribeImageHandler}>
         <NotificationIconModal
            open={isModal}
            onConfirm={onCloseModalHandler}
            error={error}
            success={datas}
            message={message}
         />
         <DivImage>
            <label htmlFor="contained-button-file">
               <InputImage
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={onChangeHandler}
               />
               <ButtonImage
                  variant="outlined"
                  color="secondary"
                  component="span"
               >
                  {image.preview ? (
                     <ImageUpload src={image.preview} />
                  ) : (
                     <p>Uppload image </p>
                  )}
               </ButtonImage>
            </label>
            {image ? image.file?.name : ''}
         </DivImage>
         <StyledP>Correct answer</StyledP>
         <InputFooter
            onChange={correctAnswerChangeHandler}
            multiline
            value={correctAnswer}
            name="correctAnswer"
         />
         <DivFooter>
            <StyledBtn color="primary" variant="outlined">
               GO BACK
            </StyledBtn>
            <Button
               disabled={!enabled}
               type="submit"
               color="secondary"
               variant="contained"
            >
               SAVE
            </Button>
         </DivFooter>
      </form>
   )
}

export default DescribeImage
