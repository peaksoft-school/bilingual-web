import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import LayoutClient from '../../../layout/clientLayout/layoutClient/LayoutClient'
import Button from '../../../components/UI/button/index'
import CountTime from '../../../components/UI/progressTime/CountTime'
import { getTest, submitQuestion } from '../../../store/testActions'
import { ROUTES } from '../../../utils/constants/general'

const DivStyled = styled('div')`
   margin-top: 50px;
   margin-bottom: 50px;
   display: flex;
   justify-content: center;
`
const StyledP = styled('p')`
   color: #4c4859;
   font-size: 28px;
   line-height: 32px;
`
const DivImgInput = styled('div')`
   display: flex;
   justify-content: center;
   margin-bottom: 89px;
`

const Img = styled('img')`
   width: 182px;
`
const Input = styled('textarea')`
   width: 382px;
   height: 183px;
   background: #ffffff;
   border: 1.53px solid #d4d0d0;
   box-sizing: border-box;
   border-radius: 8px;
   margin-left: 24px;
   resize: none;
`

const DivButton = styled('div')`
   margin-top: 90px;
   border-top: 2px solid #d4d0d0;
   padding-top: 32px;
   display: flex;
   justify-content: flex-end;
`
const ButtonS = styled(Button)`
   width: 143px;
`

const DescribeImage = () => {
   const [state, setState] = useState({
      title: '',
      duration: '',
      file: '',
   })

   const { getState } = useStore()

   const { testId } = useParams()

   const { currentQuestion } = useSelector((state) => state.test)
   const { id: userId } = useSelector((state) => state.auth.user)

   const dispatch = useDispatch()

   useEffect(async () => {
      const { questions } = await dispatch(getTest(testId)).unwrap()
      setState(questions[currentQuestion] || { ...state })
      console.log(questions)
   }, [])

   const [text, setText] = useState('')

   const onChangeText = (e) => setText(e.target.value)

   const navigate = useNavigate()

   const submitTest = async (e) => {
      e.preventDefault()
      const answers = {
         questionResults: {
            type: 'DESCRIBE_IMAGE',
            file: state.file,
            answer: text,
         },
      }
      await dispatch(submitQuestion({ testId, userId, answers })).unwrap()

      const { currentQuestion, questions } = getState().test
      navigate(
         `/user/test/${testId}/${ROUTES[questions[currentQuestion].type]}`
      )
      setText('')
   }

   const enabled = () => text.trim()
   return (
      <LayoutClient>
         <div>
            <div>
               <CountTime time={state.duration} totalTime={state.duration} />
            </div>
            <DivStyled>
               <StyledP>{state?.title}</StyledP>
            </DivStyled>
            <DivImgInput>
               <Img
                  src={`http://3.65.208.103/api/files/${state?.file}`}
                  alt="listen"
               />
               <Input
                  onChange={onChangeText}
                  type="text"
                  multiline
                  placeholder="Your response"
                  value={text}
               />
            </DivImgInput>
            <DivButton>
               <ButtonS
                  disabled={!enabled()}
                  color="primary"
                  variant="contained"
                  onClick={submitTest}
               >
                  NEXT
               </ButtonS>
            </DivButton>
         </div>
      </LayoutClient>
   )
}
export default DescribeImage
