import React from 'react'
import styled from 'styled-components'
import HighlightTheAnswerTextField from './HighlightTheAnswerTextField'
import Input from '../../../../components/UI/input/index'
import Button from '../../../../components/UI/button/index'

const HighLightTheAnswer = () => {
   const [passage, setPassage] = React.useState('')
   const [highlighted, sethighlighted] = React.useState('')
   const [questionStatement, setQuestionStatement] = React.useState('')

   const onChangeHandlerinput = (props) => {
      setPassage(props)
   }

   const QuestionsPassegeChangeHandler = (e) => {
      setQuestionStatement(e.target.value)
   }

   const onMouse = () => {
      let selectedText = ''
      if (window.getSelection()) {
         selectedText = window.getSelection()
      } else if (document.getSelection()) {
         selectedText = document.getSelection()
      } else if (document.selection) {
         selectedText = document.selection.createRange().text
      }

      sethighlighted(selectedText.toString())
   }

   const HighlightSumbitHAndler = (e) => {
      e.preventDefault()
      const CorrectAnswer = highlighted
      const data = {
         questionStatement,
         CorrectAnswer,
         passage,
      }
      console.log(data)
   }

   return (
      <form onSubmit={HighlightSumbitHAndler}>
         <div style={{ margin: '30px 0px 32px', width: '100%' }}>
            <StyledP>Questions to the Passage</StyledP>
            <Input
               onChange={QuestionsPassegeChangeHandler}
               sx={{ width: '100%' }}
            />
            <StyledP>Passage</StyledP>
            <HighlightTheAnswerTextField
               onChageHandler={onChangeHandlerinput}
               value={passage}
            />

            <StyledP>Highlight correct answer:</StyledP>
            <StyledSelected onMouseUp={onMouse}>{passage}</StyledSelected>
         </div>

         <StyledDivOfFooter>
            <Button color="primary" variant="outlined" sx={{ mr: '16px' }}>
               GO BACK
            </Button>
            <Button type="submit" color="secondary" variant="contained">
               SAVE
            </Button>
         </StyledDivOfFooter>
      </form>
   )
}

export default HighLightTheAnswer

const StyledP = styled.p`
   padding: 0;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 18px;
   color: #4b4759;
`

const StyledDivOfFooter = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`

const StyledSelected = styled.p`
   text-decoration: underline transparent;
   &::selection {
      text-decoration: underline blue;
      color: blue;
   }
`
