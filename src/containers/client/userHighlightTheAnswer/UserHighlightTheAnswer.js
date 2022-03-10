import React, { useState } from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import Button from '../../../components/UI/button/index'
import LayoutFinal from '../../../layout/clientLayout/LayoutFinal/LayoutFinal'

function UserHighlightTheAnswer() {
   const [passage, setPassage] = useState('')
   const [highlighted, sethighlighted] = useState('')

   const enabled = () => highlighted.trim()

   const onChangeHandlerInput = (event) => {
      setPassage(event.target.value)
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

   return (
      <LayoutFinal>
         <Div>
            <div>
               <DivInput>PASSAGE</DivInput>
               <TextAreaDiv>
                  <TextArea
                     onMouseUp={onMouse}
                     onChange={onChangeHandlerInput}
                     value={passage}
                  />
               </TextAreaDiv>
            </div>
            <RightDiv>
               <Text>
                  <P>
                     Click and drad text to highlight the answer to the question
                     below
                  </P>
                  <Question>
                     What did residents think couild happen with new bridge?
                  </Question>
                  <Inputt value={highlighted} multiline fullWidth />
               </Text>
               <FooterDiv>
                  <Button
                     disabled={!enabled()}
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

export default UserHighlightTheAnswer

const Inputt = styled(TextField)`
   margin-top: 13px;
   width: 390px;
   border-radius: 8px;
`
const Question = styled.p`
   margin: 0 auto;
   margin-top: 33px;
   font-family: 'DINNextRoundedLTW01';
   font-size: 18px;
   color: #4c4859;
`

const DivInput = styled('div')`
   width: 522px;
   height: 17px;
   margin: 0 auto;
   border: 1px solid rgb(118, 118, 118);
   padding: 16px 34px;
   color: #4c4859;
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
   height: 169px;
   padding: 28px 34px;
   border: 1px solid rgb(118, 118, 118);

   border-radius: 0 0 8px 8px;
   resize: none;
   font-family: 'DINNextRoundedLTW01';
   font-size: 16px;
   color: #4c4859;
   &::selection {
      text-decoration: underline blue;
      background-color: #dcd4fa;
   }
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
