import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/UI/button/index'
import LayoutTest from '../../../layout/clientLayout/testLayout/LayoutTest'

function UserRespondInAtLeastNWords() {
   const [answer, setAnswer] = useState('')

   const onChangeWords = (event) => {
      setAnswer(event.target.value)
   }

   const countOfWords = () => {
      return answer
         .trim()
         .replace(/[ ]+/g, ' ')
         .split(' ')
         .filter((i) => i).length
   }

   const enabled = () => countOfWords() > 5

   const respondLeastWordsHandler = () => {
      const userAnswer = {
         questionId: 1,
         type: 'RESPOND_IN_AT_LEAST_N_WORDS',
         answer,
      }
   }

   return (
      <LayoutTest>
         <HeaderTitle>Respond to the question in at least 50 words</HeaderTitle>
         <Div>
            <Text>
               <P>describe a time you were surprised. what happened?”</P>
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