import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../../components/UI/button/index'
import CountTime from '../../../components/UI/progressTime/CountTime'
import LayoutTest from '../../../layout/clientLayout/testLayout/LayoutTest'
import { getTest, submitQuestion } from '../../../store/testActions'
import { ROUTES } from '../../../utils/constants/general'

function UserRespondInAtLeastNWords() {
   const [state, setState] = useState({
      duration: '',
   })

   const [answer, setAnswer] = useState('')

   const onChangeWords = (event) => {
      setAnswer(event.target.value)
   }

   const countOfWords = () => {
      return answer
         .trim()
         .split(' ')
         .filter((i) => i).length
   }

   // const { getState } = useStore()

   const enabled = () => countOfWords() >= state.count

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const { testId } = useParams()

   const { id: userId } = useSelector((state) => state.auth.user)
   const { questions } = useSelector((state) => state.test)
   const { currentQuestion } = useSelector((state) => state.test)

   useEffect(async () => {
      const { questions } = await dispatch(getTest(testId)).unwrap()
      setState(questions[currentQuestion] || { ...state })
      if (questions.length === 0) {
         return navigate(`/user/start-practice-test/test/${testId}`)
      }
      return null
   }, [])

   const respondLeastWordsHandler = async (e) => {
      e.preventDefault()
      // const { currentQuestion, questions } = getState().test
      if (questions[currentQuestion]?.type === undefined) {
         navigate(ROUTES.END_TEST)
      } else {
         navigate(
            `/user/test/${testId}/${ROUTES[questions[currentQuestion]?.type]}`
         )
      }
   }

   useEffect(async () => {
      const answers = {
         questionResults: [
            {
               type: 'RESPOND_IN_AT_LEAST_N_WORDS',
               answer,
            },
         ],
      }
      await dispatch(submitQuestion({ testId, userId, answers })).unwrap()
   }, [])

   return (
      <LayoutTest>
         <CountTime time={state.duration} totalTime={state.duration} />
         <HeaderTitle>{state.title}</HeaderTitle>
         <Div>
            <Text>
               <P>{state.statement}</P>
            </Text>
            <TextAreaDiv>
               <TextArea onChange={onChangeWords} />
               <Footer isEnabled={!enabled()}>Words: {countOfWords()}</Footer>
            </TextAreaDiv>
         </Div>
         <FooterDiv>
            <Button
               onClick={respondLeastWordsHandler}
               disabled={!enabled()}
               color="primary"
               variant="contained"
               sx={{ width: '143px' }}
            >
               NEXT
            </Button>
         </FooterDiv>
      </LayoutTest>
   )
}

export default UserRespondInAtLeastNWords
const Footer = styled.h4`
   margin: 0 auto;
   margin-top: 10px;
   font-family: 'DINNextRoundedLTW01';
   font-size: 16px;
   color: ${({ isEnabled }) => (isEnabled ? '#afafaf' : '#3a10e5')};
`
const FooterDiv = styled.div`
   margin-top: 90px;
   border-top: 2px solid #d4d0d0;
   padding-top: 32px;
   display: flex;
   justify-content: flex-end;
`
const TextAreaDiv = styled.div`
   width: 382px;
`
const TextArea = styled.textarea`
   width: 348px;
   height: 169px;
   padding: 14px 16px;
   border-radius: 8px;
   resize: none;
   font-family: 'DINNextRoundedLTW01';
   font-size: 16px;
   color: #4c4859;
`

const P = styled.p`
   margin: 0 auto;
   font-family: 'DINNextRoundedLTW01';
   font-size: 18px;
   color: #4c4859;
`

const Text = styled.div`
   width: 330px;
`
const Div = styled.div`
   margin-top: 50px;
   display: flex;
   justify-content: space-between;
`

const HeaderTitle = styled.p`
   margin: 0 auto;
   margin-top: 50px;
   font-family: 'DINNextRoundedLTW01';
   font-size: 28px;
   color: #4c4859;
   display: flex;
   justify-content: center;
`
