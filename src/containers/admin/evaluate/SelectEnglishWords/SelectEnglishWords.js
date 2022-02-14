import React from 'react'
import styled from 'styled-components'
import ContentCard from '../../../../components/UI/adminContentCard'
import Header from '../../../../layout/adminHeader'
import MainContainer from '../../../../layout/MainContainer'
import { FooterButton, InputBox, MainTitle, UserAnswers } from './Exports'

function SelectEnglishWords() {
   return (
      <>
         <Header />
         <MainContainer>
            <ContentCard>
               <SpanUser>User: </SpanUser>
               <UserName> Ivanov Ivan</UserName>
               <br />
               <SpanUser>Test: </SpanUser>
               <UserName> Test number 1</UserName>
               <MainTitle />
               <InputBox />
               <UserAnswers />
               <FooterButton />
            </ContentCard>
         </MainContainer>
      </>
   )
}

export default SelectEnglishWords

const SpanUser = styled.span`
   font-weight: 600;
   font-size: 18px;
   font-family: 'DINNextRoundedLTW01-Regular';
`
const UserName = styled.span`
   font-weight: 500;
   font-size: 18px;
   font-family: 'DINNextRoundedLTW01-Regular';
`
