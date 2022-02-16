import React, { useState } from 'react'
import Layout from '../../../../components/UI/adminContentCard'
import Button from '../../../../components/UI/button/index'
import { ReactComponent as Icon } from '../../../../assets/icons/play-circle.svg'
import {
   User,
   Data,
   ContentWrapper,
   Title,
   SecondaryTitle,
   Score,
   Btn,
   IconWrapper,
   Btnfooter,
} from '../../../../components/UI/evaluation'
import Input from '../../../../components/UI/input'

function RecordSayingStatementPage() {
   const [user, setUser] = useState({
      name: 'John Smith',
   })

   const [question, setQuestion] = useState({
      testNum: 'Test number 1',
      questionTitle: '  Record yourself saying the statement below',
      duration: '0.30',
      questionType: 'Record saying statement ',
      statement: 'Do you like my car? yes or no?',
   })
   const saveHandler = () => {}
   const gobackHandler = () => {}
   const playAudioHandler = () => {}
   return (
      <Layout>
         <User>User:</User>
         <Data>{user.name}</Data>
         <br />
         <User>Test:</User>
         <Data>{question.testNum}</Data>
         <ContentWrapper>
            <div style={{ paddingBottom: '33px' }}>
               <Title>Test Question</Title>
               <Data>{question.questionTitle}</Data>
               <SecondaryTitle>Duration (in minutes):</SecondaryTitle>
               <Data>{question.duration}</Data>
               <br />
               <SecondaryTitle>Question Type:</SecondaryTitle>
               <Data>{question.questionType}</Data>
               <br />
               <SecondaryTitle>Statement:</SecondaryTitle>
               <Data>{question.statement}</Data>
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
         <Btn>
            <Button variant="outlined" sx={{ mr: '18px' }}>
               <IconWrapper>
                  <Icon onClick={playAudioHandler} />
               </IconWrapper>
               PLAY RECORD AUDIO
            </Button>
         </Btn>
         <Btnfooter>
            <Button
               color="primary"
               variant="outlined"
               sx={{ mr: '16px' }}
               onClick={gobackHandler}
            >
               Go BACK
            </Button>
            <Button color="secondary" variant="contained" onClick={saveHandler}>
               Save
            </Button>
         </Btnfooter>
      </Layout>
   )
}

export default RecordSayingStatementPage
