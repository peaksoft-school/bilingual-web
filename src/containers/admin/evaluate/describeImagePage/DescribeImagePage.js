import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../../components/UI/button/index'
import { ReactComponent as Photo } from '../../../../assets/icons/Image.svg'
import Input from '../../../../components/UI/input/index'
import {
   User,
   Data,
   ContentWrapper,
   Title,
   SecondaryTitle,
   Score,
   Btnfooter,
} from '../../../../components/UI/evaluation'
import Layout from '../../../../components/UI/adminContentCard'

function DescribeImagePage() {
   const [user, setUser] = useState({
      name: 'John Smith',
   })

   const [question, setQuestion] = useState({
      testNum: 'Test number 1',
      questionTitle: ' Write one more sentences that describe the image',
      duration: '0.30',
      questionType: ' Describe image',
      numberOfWords: '3',
      correctAnswer: 'Protecting nature means protecting the Motherland',
      enteredStatement: '  Entered Statement: “I see a white car is burning ',
      numberOfPlays: '1',
   })
   // useEffect(({}, []))

   const saveHandler = () => {}
   const gobackHandler = () => {}
   return (
      <Layout>
         <User>User:</User>
         <Data>{user.name}</Data> <br />
         <User>Test: </User>
         <Data>{question.testNum}</Data>
         <ContentWrapper>
            <div style={{ paddingBottom: '33px' }}>
               <Title>Test Question </Title>
               <SecondaryTitle>Question Title: </SecondaryTitle>
               <Data>{question.questionTitle}</Data>
               <br />
               <SecondaryTitle>Duration (in minutes):</SecondaryTitle>
               <Data>{question.duration}</Data>
               <br />
               <SecondaryTitle>Question Type:</SecondaryTitle>
               <Data>{question.questionType}</Data>
               <br />
               <SecondaryTitle>Mimimum number of words:</SecondaryTitle>
               <Data>{question.numberOfWords}</Data>
            </div>
            <div>
               <Title>Evaluation</Title>
               <Score>Score (1 -10)</Score>
               <Input
                  type="text"
                  inputProps={{
                     style: {
                        height: '13px',
                        width: '66px',
                     },
                  }}
               />
            </div>
         </ContentWrapper>
         <ImgWrapper>
            <Photo style={{ marginRight: '31px' }} />
            <Data>Correct answer: {question.correctAnswer}</Data>
         </ImgWrapper>
         <div>
            <Title>User’s Answer </Title>
            <Data>{question.enteredStatement}</Data>
         </div>
         <Btnfooter>
            <Button
               color="primary"
               variant="outlined"
               sx={{ mr: '16px' }}
               onClick={gobackHandler}
            >
               GO BACK
            </Button>
            <Button color="secondary" variant="contained" onClick={saveHandler}>
               Save
            </Button>
         </Btnfooter>
      </Layout>
   )
}

export default DescribeImagePage
const ImgWrapper = styled.div`
   display: flex;
   align-items: center;
   margin: 43px 0px 43px 0px;
   color: #4c4859;
   font-weight: 500;
   font-family: 'DINNextRoundedLTW01-Regular';
`
