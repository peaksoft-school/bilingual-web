import React from 'react'
import styled from 'styled-components'
import MainContainer from '../../../../layout/MainContainer'
import ContentCard from '../../../../components/UI/adminContentCard/index'
import AppSelect from '../../../../components/UI/select'
import Input from '../../../../components/UI/input/index'
import HighLightTheAnswer from './HighLightTheAnswer'

const AddQuestionTypePage = () => {
   return (
      <MainContainer>
         <ContentCard>
            <StyledDiv>
               <div>
                  <StyledP>Title</StyledP>
                  <Input sx={{ width: '720px', mr: '18px' }} />
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
            <HighLightTheAnswer />
         </ContentCard>
      </MainContainer>
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
