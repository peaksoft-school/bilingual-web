import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../../components/UI/button/index'
import CountTime from '../../../components/UI/progressTime/CountTime'
import { getTest, submitQuestion } from '../../../store/testActions'
import { ROUTES } from '../../../utils/constants/general'
import LayoutTest from '../../../layout/clientLayout/testLayout/LayoutTest'
import { testSliceActions } from '../../../store'

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
   const navigate = useNavigate()
   const [state, setState] = useState([])
   const { testId } = useParams()
   const { questions } = useSelector((state) => state.test)
   const { currentQuestion } = useSelector((state) => state.test)
   const { id: userId } = useSelector((state) => state.auth.user)

   const dispatch = useDispatch()

   useEffect(async () => {
      await dispatch(getTest(testId)).unwrap()
      setState(questions[currentQuestion])
   }, [])

   const [text, setText] = useState('')

   const onChangeText = (e) => setText(e.target.value)

   const submitTest = async (e) => {
      e.preventDefault()
      try {
         const answers = {
            questionResults: {
               answer: text,
            },
         }
         await dispatch(submitQuestion({ testId, userId, answers })).unwrap()

         if (questions[currentQuestion]?.type === undefined) {
            navigate(ROUTES.END_TEST)
         } else {
            navigate(
               `/user/test/${testId}/${ROUTES[questions[currentQuestion].type]}`
            )
         }
         setText('')
      } catch (error) {
         console.log(error)
      }
      return null
   }

   useEffect(async () => {
      dispatch(testSliceActions.incrementState())
   }, [])

   const enabled = () => text.trim()
   return (
      <LayoutTest>
         <div>
            <div>
               <CountTime time={state?.duration} totalTime={state?.duration} />
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
      </LayoutTest>
   )
}
export default DescribeImage
