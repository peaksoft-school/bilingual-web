import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import LayoutClient from '../../../layout/clientLayout/layoutClient/LayoutClient'
import { ROUTES } from '../../../utils/constants/general'
import { ReactComponent as Circle } from '../../../assets/icons/progress.svg'

function CheckingYourDevice() {
   const navigate = useNavigate()

   useEffect(() => {
      setTimeout(() => {
         navigate(ROUTES.USER_SELECT_REAL_ENGLISH_WORDS)
      }, 3000)
   }, [])

   return (
      <LayoutClient>
         <HeaderTitle>Checking your device...</HeaderTitle>
         <P>
            This process is automatic, and may take a few second. Please wait...
         </P>
         <StyleBox>
            <CircleStyle />
         </StyleBox>
      </LayoutClient>
   )
}

export default CheckingYourDevice

const CircleStyle = styled(Circle)`
   animation-name: rotate;
   animation-duration: 3s;
   animation-iteration-count: infinite;
   animation-timing-function: linear;
   @keyframes rotate {
      from {
         transform: rotate(-360deg);
      }
      to {
         transform: rotate(360deg);
      }
   }
`

const HeaderTitle = styled.p`
   font-family: 'DINNextRoundedLTW01';
   font-size: 28px;
   line-height: 30px;
   color: #4c4859;
   display: flex;
   justify-content: center;
`
const P = styled.p`
   font-family: 'DINNextRoundedLTW01';
   font-size: 18px;
   line-height: 20px;
   color: #4c4859;
   display: flex;
   justify-content: center;
`
const StyleBox = styled.div`
   margin-top: 126px;
   margin-bottom: 126px;
   display: flex;
   justify-content: center;
   align-items: center;
`
