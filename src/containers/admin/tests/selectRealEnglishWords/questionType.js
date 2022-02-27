import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import ContentCard from '../../../../components/UI/adminContentCard/index'
import AppSelect from '../../../../components/UI/select'
import Input from '../../../../components/UI/input/index'
import SelectRealEnglishWord from './SelectRealEnglishWords'
import {
   QUESTION_OPTIONS,
   QUESTION_TYPES,
} from '../../../../utils/constants/QuestionTypesAndOptions'
import { testActions } from '../../../../store'
import ListenAndSelectEnglishWords from '../listenAndSelectEnglishWords/ListenAndSelectEnglishWords'

const AddQuestionTypePage = () => {
   const dispatch = useDispatch()
   const { title, duration, type } = useSelector((state) => state.questions)

   const titleChageHandler = (e) => {
      dispatch(testActions.setTitle(e.target.value))
   }
   const durationChageHandler = (e) => {
      dispatch(testActions.setDuration(e.target.value))
   }
   const typeChageHandler = (e) => {
      dispatch(testActions.setType(e.target.value))
   }

   const [typeOfQuestion, setTypeOfQuestion] = React.useState('')

   const questionTypeChangeHandler = (id) => {
      setTypeOfQuestion(id)
   }

   return (
      <ContentCard>
         <StyledDiv>
            <div>
               <StyledP>Title</StyledP>
               <Input
                  sx={{ width: '720px', mr: '18px' }}
                  onChange={titleChageHandler}
                  value={title}
               />
            </div>
            <div>
               <StyledP>Duration (in minutes)</StyledP>
               <Input onChange={durationChageHandler} value={duration} />
            </div>
         </StyledDiv>
         <StyledP>Type</StyledP>
         <AppSelect
            onChange={typeChageHandler}
            questionTypeChangeHandler={questionTypeChangeHandler}
            options={QUESTION_OPTIONS}
            value={type}
         />
         {typeOfQuestion === QUESTION_TYPES.SELECT_THE_REAL_ENGLISH_WORD && (
            <SelectRealEnglishWord />
         )}
         {typeOfQuestion ===
            QUESTION_TYPES.LISTEN_AND_SELECT_REAL_ENGLISH_WORD && (
            <ListenAndSelectEnglishWords />
         )}
         {/* {typeOfQuestion ===
            QUESTION_TYPES.TYPE_WHAT_YOU_HEAR && (
            < /> */}
         {/* )} */}
      </ContentCard>
   )
}

export default AddQuestionTypePage

const StyledP = styled.p`
   padding: 0;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 18px;
   color: #4b4759;
`

const StyledDiv = styled.div`
   width: 100%;
   display: flex;
   box-sizing: border-box;
`
