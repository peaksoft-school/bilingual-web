import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import MainContainer from '../../../../layout/MainContainer'
import ContentCard from '../../../UI/adminContentCard/index'
import Button from '../../../UI/button/index'
import SwitchButton from '../../../UI/switchButton/index'
import Edit from '../../../../assets/icons/edit.svg'
import Trash from '../../../../assets/icons/trash.svg'

const TestPage = () => {
   const navigate = useNavigate()

   const [title, setTitle] = useState()
   const [accessToTest, setAccessToTest] = useState(false)

   useEffect(() => {
      setTitle('Test number 1')
   }, [])

   const onClickToAddNewTest = () => {
      navigate('/addNewTest')
   }

   const onClickToAddMoreQuestionsPage = () => {
      navigate('/addQuestionsPage')
   }

   const onChangeHandlerSwitcher = () => {
      setAccessToTest(!accessToTest)
   }
   return (
      <MainContainer>
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
               <StyledLists>
                  <StyledSpan>{title}</StyledSpan>
                  <StyledIconsDiv>
                     <SwitchButton
                        type="checkbox"
                        onChange={onChangeHandlerSwitcher}
                        checked={accessToTest}
                     />
                     <StyledEdit
                        type="checkbox"
                        onClick={onClickToAddMoreQuestionsPage}
                        src={Edit}
                        alt="edit"
                     />
                     <StyledTresh src={Trash} alt="trash" />
                  </StyledIconsDiv>
               </StyledLists>
            </StyledUl>
         </ContentCard>
      </MainContainer>
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
const StyledIconsDiv = styled.div`
   width: 112px;
   display: flex;
   justify-content: space-between;
`
const StyledTresh = styled.img`
   width: 22px;
   height: 22px;
`
const StyledEdit = styled.img`
   width: 22px;
   height: 22px;
`
const StyledSpan = styled.span`
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 18px;
   color: #4c4859;
`
