import React from 'react'
import styled from 'styled-components'
import MainContainer from '../../../../layout/MainContainer'
import ContentCard from '../../../../components/UI/adminContentCard/index'
import AppSelect from '../../../../components/UI/select/index'
import Input from '../../../../components/UI/input/index'
import Header from '../../../../layout/adminHeader'
import Button from '../../../../components/UI/button/index'

const DescribeImage = () => {
   return (
      <>
         <Header />
         <MainContainer>
            <ContentCard>
               <StyledDiv>
                  <div>
                     <StyledP>Title</StyledP>
                     <Input sx={{ width: '700px', mr: '18px' }} />
                  </div>
                  <div>
                     <StyledP>Duration (in minutes)</StyledP>
                     <Input />
                  </div>
               </StyledDiv>
               <StyledP>Type</StyledP>
               <AppSelect
                  options={[
                     'Select real English words',
                     'Listen and select word',
                     'Type what you hear',
                  ]}
               />
               <div>
                  <StyledP>Number off Replays</StyledP>
                  <div>
                     <DivNumber>
                        <span
                           sx={{
                              position: 'absolute',
                              left: '400px',
                              top: '400px',
                           }}
                        >
                           File_name_of_the_audio_file.mp3
                        </span>
                     </DivNumber>
                  </div>
                  <StyledP>Correct answer</StyledP>
                  <Input sx={{ width: '900px', height: '70px' }} />
                  <DivButtonFotter>
                     <Button
                        sx={{ width: '105px', height: '42px' }}
                        variant="outlined"
                     >
                        GO BACK
                     </Button>
                     <Button
                        sx={{ width: '82px', height: '42px' }}
                        variant="contained"
                        color="success"
                     >
                        SAVE
                     </Button>
                  </DivButtonFotter>
               </div>
            </ContentCard>
         </MainContainer>
      </>
   )
}
export default DescribeImage
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
const DivNumber = styled('div')`
   position: relative;
   left: 400px;
   bottom: 35px;
`

const DivButtonFotter = styled('div')`
   display: flex;
   width: 250px;
   justify-content: flex-end;
   justify-content: space-around;
   position: relative;
   left: 670px;
   top: 32px;
`
