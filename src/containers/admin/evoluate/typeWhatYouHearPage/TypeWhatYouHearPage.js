import React, { useState } from 'react'
import Header from '../../../../layout/adminHeader'
import MainContainer from '../../../../layout/MainContainer'
import ContendCard from '../../../../components/UI/adminContentCard'
import TypewhatYouHearData from './TypewhatYouHearData'

function TypeWhatYouHearPage() {
   const [user, setUser] = useState({
      name: 'John Smith',
   })

   const [question, setQuestion] = useState({
      testNum: 'Test number 1',
      questionTitle: ' Type the statement that you hear',
      duration: '0.30',
      questionType: 'Type what you hear',
      numberOfWords: '3',
      correctAnswer: ' “Hello, how is it going?”',
      enteredStatement: '“Hello, how is it going?”',
      numberOfPlays: '1',
   })
   // React.useEffect(({}, []))

   const saveHandler = () => {}
   const gobackHandler = () => {}
   const playAudioHandler = () => {}
   return (
      <>
         <Header />
         <MainContainer>
            <ContendCard>
               <TypewhatYouHearData
                  question={question}
                  user={user}
                  onSave={saveHandler}
                  goBack={gobackHandler}
                  playAudio={playAudioHandler}
               />
            </ContendCard>
         </MainContainer>
      </>
   )
}
export default TypeWhatYouHearPage
