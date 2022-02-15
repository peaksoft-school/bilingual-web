import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
// import { getTestRequest } from '../../../../api/testService'
import ContentCard from '../../../../components/UI/adminContentCard/index'
import Button from '../../../../components/UI/button/index'
import TestItems from './TestItems'

const TestPage = () => {
   const navigate = useNavigate()

   const [tests, setTests] = useState([])

   const onClickToAddNewTest = () => {
      navigate('/addNewTest')
   }

   return (
      <ContentCard>
         <div>
            <Button
               onClick={onClickToAddNewTest}
               color="primary"
               variant="contained"
               sx={{
                  p: '12px 24px 12px 16px',
                  float: 'right',
                  mb: '22px',
               }}
            >
               + ADD NEW TEST
            </Button>
         </div>
         <StyledUl>
            {tests.map((test) => {
               return (
                  <StyledLists key={test.id}>
                     <StyledSpan>{test.title}</StyledSpan>
                     <TestItems />
                  </StyledLists>
               )
            })}
         </StyledUl>
      </ContentCard>
   )
}

export default TestPage

const StyledUl = styled.ul`
   margin: 0;
   padding: 0;
`
const StyledLists = styled.li`
   width: 100%;
   height: 66px;
   margin: 16px 0px;
   padding: 20px 23px 20px 16px;
   list-style: none;
   border-radius: 8px;
   background: #ffffff;
   box-shadow: 0px 3px 14px rgba(0, 0, 0, 0.09);
   display: flex;
   justify-content: space-between;
   box-sizing: border-box;
`

const StyledSpan = styled.span`
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 18px;
   color: #4c4859;
`
