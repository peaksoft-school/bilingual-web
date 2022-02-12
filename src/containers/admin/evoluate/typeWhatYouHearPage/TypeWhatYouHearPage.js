import React from 'react'
import Header from '../../../../layout/adminHeader'
import MainContainer from '../../../../layout/MainContainer'
import ContendCard from '../../../../components/UI/adminContentCard'
import Button from '../../../../components/UI/button/index'
import { ReactComponent as Icon } from '../../../../assets/icons/Vector (5).svg'
import Input from '../../../../components/UI/input/index'

function TypeWhatYouHearPage() {
   return (
      <>
         <Header />
         <MainContainer>
            <ContendCard>
               <div>
                  <span>User: Askarov Marat</span>
                  <span>Test: Test number 1</span>
                  <div>
                     <h5>Test Question </h5>
                     <div>Question Title: Type the statement that you hear</div>
                     <div>Duration (in minutes): 0:30</div>
                     <div>Question Type: Type what you hear</div>
                     <div>Mimimum number of words: 3</div>
                     <div>
                        <h5>Evaluation</h5>
                        <div>Score</div>
                        <Input />
                     </div>
                  </div>
                  <div>
                     <Button variant="outlined">
                        <Icon />
                        PLAY AUDIO
                     </Button>
                     <div>Correct ansver: “Hello, how is it going?”</div>
                  </div>
                  <div>
                     <h5>User’s Answer</h5>
                     <div>Entered Statement: “Hello, how is it going?”</div>
                     <div>Number of plays: 1</div>
                  </div>
               </div>
               <div>
                  <Button color="primary" variant="outlined">
                     GO BACK
                  </Button>
                  <Button color="secondary" variant="contained">
                     Save
                  </Button>
               </div>
            </ContendCard>
         </MainContainer>
      </>
   )
}

export default TypeWhatYouHearPage
