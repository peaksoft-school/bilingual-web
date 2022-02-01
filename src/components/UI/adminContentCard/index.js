import React from 'react'
import styled from 'styled-components'

const StyledCardDiv = styled.div`
   margin-left: auto;
   margin-right: auto;
   width: 100%;
   box-sizing: border-box;
`
const StyledContentCard = styled.div`
   margin-top: 66px;
   padding: 50px 115px;
   border-radius: 20px;
   box-shadow: 0px 4px 39px rgba(196, 196, 196, 0.6);
   background-color: #ffffff;
   box-sizing: border-box;
   display: block;
`

const ContentCard = ({ children }) => {
   return (
      <StyledCardDiv>
         <StyledContentCard>{children}</StyledContentCard>
      </StyledCardDiv>
   )
}

export default ContentCard
