import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/icons/logo.svg'

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
   :hover {
      color: #3a10e5;
   }
   :focus {
      color: #3a10e5;
   }
   :active {
      transform: translateY(2px);
   }
`
const StyledLogOutButton = styled.button`
   width: 104px;
   height: 42px;
   background: none;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 2px solid #4c4859;
   border-radius: 8px;
   color: rgba(76, 72, 89, 1);
   font-family: DINNextRoundedLTPro-Bold;
   font-size: 14px;
   text-transform: uppercase;
   cursor: pointer;
   box-sizing: border-box;
   :hover {
      color: #3a10e5;
      border-color: #3a10e5;
   }
`
const Header = (props) => {
   return (
      <StyledHeader>
         <StyledMainDiv>
            <StyledLogoDiv>
               <StyledLogo src={Logo} alt="logo" />
            </StyledLogoDiv>
            <StyledButtonDiv>
               <StyledTextButton onClick={props}>tests</StyledTextButton>
               <StyledTextButton onClick={props}>
                  submitted results
               </StyledTextButton>
               <StyledLogOutButton onClick={props}>log out</StyledLogOutButton>
            </StyledButtonDiv>
         </StyledMainDiv>
      </StyledHeader>
   )
}

export default Header
