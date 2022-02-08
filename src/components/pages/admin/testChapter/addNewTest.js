import React from 'react'
import styled from 'styled-components'
import Header from '../../../../layout/adminHeader'
import MainContainer from '../../../../layout/MainContainer'
import ContentCard from '../../../UI/adminContentCard'
import Button from '../../../UI/button/index'

const AddNewTest = () => {
   return (
      <div>
         <Header />
         <MainContainer>
            <ContentCard>
               <StyledSpan>Title</StyledSpan>
               <StyledDivOfInput>
                  <StyledInput />
               </StyledDivOfInput>
               <StyledSpan>Short Description</StyledSpan>
               <StyledDivOfInput>
                  <StyledInput />
               </StyledDivOfInput>
               <StyledDivOfButtons>
                  <Button
                     color="primary"
                     variant="outlined"
                     sx={{ mr: '16px' }}
                  >
                     GO BACK
                  </Button>
                  <Button color="secondary" variant="contained">
                     SAVE
                  </Button>
               </StyledDivOfButtons>
            </ContentCard>
         </MainContainer>
      </div>
   )
}

const StyledSpan = styled.span`
   margin: 0;
   padding: 0;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 18px;
   color: #4b4759;
`

const StyledDivOfInput = styled.div`
   width: 100%;
   height: 46px;
   margin: 16px auto 30px;
   padding: 0px;
   box-sizing: border-box;
`

const StyledInput = styled.input`
   width: 100%;
   height: 100%;
   border: 1.53px solid #d4d0d0;
   box-sizing: border-box;
   border-radius: 8px;
   outline: none;
   padding: 14px 20px 14px 20px;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 18px;
   color: #4c4859;
`

const StyledDivOfButtons = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`

export default AddNewTest
