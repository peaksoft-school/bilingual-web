import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/icons/logo.svg'

const StyledFooterDiv = styled.div`
   position: absolute;
   bottom: 0;
   margin-bottom: 0px;
   width: 100%;
   height: 109px;
   background-color: white;
   box-sizing: border-box;
`
const StyledMainDiv = styled.div`
   margin-bottom: 0px;
   margin-left: auto;
   margin-right: auto;
   padding: 62px 153px 14.98px 153px;
   max-width: 1440px;
   max-height: 109px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   box-sizing: border-box;
`
const StyledLogo = styled.img`
   margin: 0;
   width: 125px;
   height: 44px;
`
const StyledCopyrightDiv = styled.div`
   padding: 4px 0px;
`

const StyledCopyright = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: normal;
   font-size: 14px;
   line-height: 24px;
   color: #98a2b3;
`

const Footer = () => {
   return (
      <StyledFooterDiv>
         <StyledMainDiv>
            <StyledLogo src={Logo} alt="Logo" />
            <StyledCopyrightDiv>
               <StyledCopyright>© 2022 Peaksoft</StyledCopyright>
            </StyledCopyrightDiv>
         </StyledMainDiv>
      </StyledFooterDiv>
   )
}

export default Footer
