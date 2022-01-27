import React from 'react'
import { ThemeProvider } from '@emotion/react'
import styled from 'styled-components'
import Logo from '../../assets/icons/logo.svg'
import Button from '../../components/UI/Button'
import { theme } from '../../components/UI/StyleTheme'

const StyledHeader = styled.div`
   margin-top: 0px;
   width: 100%;
   height: 94px;
   background-color: white;
`
const StyledMainDiv = styled.div`
   margin-top: 0px;
   margin-left: auto;
   margin-right: auto;
   padding: 26px 167px 26px 168px;
   max-width: 1440px;
   height: 94px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   box-sizing: border-box;
`
const StyledLogoDiv = styled.div`
   width: 187px;
   height: 100%;
   box-sizing: border-box;
`
const StyledButtonDiv = styled.div`
   width: 431px;
   height: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   box-sizing: border-box;
`
const StyledLogo = styled.img`
   width: 174px;
   height: 42px;
`
const StyledTextButton = styled.button`
   border: none;
   color: rgba(76, 72, 89, 1);
   margin-top: 0px;
   padding: 0px;
   font-family: 'DINNextRoundedLTPro-bold';
   font-weight: bold;
   font-size: 14px;
   text-transform: uppercase;
   line-height: 18px;
   cursor: pointer;
   background: none;
   :focus {
      color: #3a10e5;
   }
   :active {
      transform: translateY(2px);
   }
`
const Header = () => {
   return (
      <ThemeProvider theme={theme}>
         <StyledHeader>
            <StyledMainDiv>
               <StyledLogoDiv>
                  <StyledLogo src={Logo} alt="logo" />
               </StyledLogoDiv>
               <StyledButtonDiv>
                  <StyledTextButton>tests</StyledTextButton>
                  <StyledTextButton>submitted results</StyledTextButton>
                  <Button variant="outlined" color="login">
                     log out
                  </Button>
               </StyledButtonDiv>
            </StyledMainDiv>
         </StyledHeader>
      </ThemeProvider>
   )
}

export default Header
