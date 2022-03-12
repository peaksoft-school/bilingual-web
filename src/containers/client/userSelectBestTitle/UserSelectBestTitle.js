import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../../components/UI/button/index'
import CountTimeLong from '../../../components/UI/progressTimeLong/CountTimeLong'
import LayoutFinal from '../../../layout/clientLayout/LayoutFinal/LayoutFinal'
import { testSliceActions } from '../../../store'
import { submitQuestion } from '../../../store/testActions'
import { ROUTES } from '../../../utils/constants/general'
import UserSelectBestTitleOptions from './UserSelectBestTitleOptions'

function UserSelectBestTitle() {
   const [state, setState] = useState([])
   const navigate = useNavigate()
   const { testId } = useParams()
   const dispatch = useDispatch()
   const { id: userId } = useSelector((state) => state.auth.user)
   const { questions } = useSelector((state) => state.test)
   const { currentQuestion } = useSelector((state) => state.test)
   const [optionResults, setOptionResults] = useState('')

   useEffect(() => {
      setState(questions[currentQuestion])
      if (questions.length === 0) {
         return navigate('/user/tests')
      }
      return null
   }, [])

   const onChangeRadioButtonHandler = (checkedData) => {
      setOptionResults(checkedData)
   }

   const selectBestTitleHandler = async () => {
      try {
         const answers = {
            questionResults: [{ type: 'SELECT_BEST_TITLE', optionResults }],
         }
         await dispatch(submitQuestion({ testId, userId, answers })).unwrap()
         dispatch(testSliceActions.incrementState())
         if (questions[currentQuestion]?.type === undefined) {
            navigate(ROUTES.END_TEST)
         } else {
            navigate(
               `/user/test/${testId}/${
                  ROUTES[questions[currentQuestion]?.type]
               }`
            )
         }
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(async () => {
      dispatch(testSliceActions.incrementState())
   }, [])

   return (
      <LayoutFinal>
         <CountTimeLong time={state.duration} totalTime={state.duration} />
         <Div>
            <div>
               <DivInput>PASSAGE</DivInput>
               <TextAreaDiv>
                  <TextArea value={state?.title} />
               </TextAreaDiv>
            </div>
            <RightDiv>
               <Text>
                  <P>{state?.passage}</P>
               </Text>
               {state.options &&
                  state.options.map((option) => {
                     return (
                        <UserSelectBestTitleOptions
                           key={option.id}
                           name={option.id}
                           onChangeRadioButtonHandler={
                              onChangeRadioButtonHandler
                           }
                           option={option}
                        />
                     )
                  })}
               <FooterDiv>
                  <Button
                     onClick={selectBestTitleHandler}
                     color="primary"
                     variant="contained"
                     sx={{ mt: '32px', width: '143px', height: '43px' }}
                  >
                     NEXT
                  </Button>
               </FooterDiv>
            </RightDiv>
         </Div>
      </LayoutFinal>
   )
}
export default UserSelectBestTitle

const DivInput = styled('div')`
   width: 522px;
   height: 17px;
   margin: 0 auto;
   border: 1px solid rgb(118, 118, 118);
   padding: 16px 34px;
   color: #4c4859;
   background-color: #d4d0d0;
   font-size: 16px;
   font-family: 'DINNextRoundedLTW04-Medium';
   border-radius: 8px 8px 0 0;
`
const RightDiv = styled.div`
   width: 390px;
   margin-left: 40px;
   display: flex;
   flex-direction: column;
`
const FooterDiv = styled.div`
   display: flex;
   justify-content: flex-end;
`
const TextAreaDiv = styled.div`
   width: 555px;
`
const TextArea = styled.textarea`
   width: 522px;
   height: 408px;
   padding: 28px 34px;
   border: 1px solid rgb(118, 118, 118);
   background-color: #d4d0d0;
   border-radius: 0 0 8px 8px;
   resize: none;
   font-family: 'DINNextRoundedLTW01';
   font-size: 16px;
   color: #4c4859;
`
const P = styled.p`
   margin: 0 auto;
   font-family: 'DINNextRoundedLTW01';
   font-size: 26px;
   color: #4c4859;
`
const Text = styled.div`
   width: 390px;
`
const Div = styled.div`
   display: flex;
   justify-content: space-between;
`
