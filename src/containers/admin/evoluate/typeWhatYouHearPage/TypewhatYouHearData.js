import React from 'react'
import Button from '../../../../components/UI/button/index'
import { ReactComponent as Icon } from '../../../../assets/icons/play-circle.svg'
import Input from '../../../../components/UI/input/index'
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
} from '../../../../components/UI/evaluatePages'

function TypewhatYouHearData({ question, user, playAudio, onSave, goBack }) {
   return (
      <div>
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
         <Btn>
            <Button variant="outlined" sx={{ mr: '18px' }}>
               <IconWrapper>
                  <Icon onClick={playAudio} />
               </IconWrapper>
               PLAY AUDIO
            </Button>
            <Data>Correct answer: {question.correctAnswer}</Data>
         </Btn>
         <div>
            <Title>User’s Answer</Title>{' '}
            <SecondaryTitle>Entered Statement: </SecondaryTitle>
            <Data>{question.enteredStatement} </Data>
            <br />
            <SecondaryTitle>Number of plays:</SecondaryTitle>
            <Data>{question.numberOfPlays}</Data>
            <br />
         </div>
         <Btnfooter>
            <Button
               color="primary"
               variant="outlined"
               sx={{ mr: '16px' }}
               onClick={goBack}
            >
               GO BACK
            </Button>
            <Button color="secondary" variant="contained" onClick={onSave}>
               Save
            </Button>
         </Btnfooter>
      </div>
   )
}

export default TypewhatYouHearData
