import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import MainContainer from '../../../../layout/MainContainer'
import ContentCard from '../../../UI/adminContentCard'
import Button from '../../../UI/button/index'
import SwitchButton from '../../../UI/switchButton/index'
import Edit from '../../../../assets/icons/edit.svg'
import Trash from '../../../../assets/icons/trash.svg'

const AddQuestionPage = () => {
   const navigate = useNavigate()

   const onClickToAddMoreQuestionsPage = () => {
      navigate('/addQuestionsPageType')
   }

   const onGoBackHandler = () => {
      navigate(-1)
   }

   const submitHandler = (event) => {
      event.preventDefault()
   }
   return (
      <div>
         <MainContainer>
            <ContentCard>
               <form onSubmit={submitHandler}>
                  <div>
                     <Styledh4>Title :</Styledh4>
                     <StyledSpan>
                        Take a free practice test and estimate your score
                     </StyledSpan>
                     <br />
                     <Styledh4>Total Duration :</Styledh4>
                     <StyledSpan>15:00</StyledSpan>
                     <br />
                     <Styledh4>Short Description :</Styledh4>
                     <StyledSpan>Select real English words</StyledSpan>
                  </div>
                  <StyledDivOfButton>
                     <Button
                        onClick={onClickToAddMoreQuestionsPage}
                        color="primary"
                        variant="contained"
                     >
                        + ADD MORE QUESTIONS
                     </Button>
                  </StyledDivOfButton>
                  <StyledDivTableHeader>
                     <StyledDivNumber>#</StyledDivNumber>
                     <StyledDivName>Name</StyledDivName>
                     <StyledDivDuration>Duration</StyledDivDuration>
                     <StyledDivQuestionType>
                        Question Type
                     </StyledDivQuestionType>
                     <StyledDivIcons> </StyledDivIcons>
                  </StyledDivTableHeader>
                  <StyledDivTableBody>
                     <StyledDivNumber>1</StyledDivNumber>
                     <StyledDivName>
                        Select the real Englisg word in the list...
                     </StyledDivName>
                     <StyledDivDuration>1 min</StyledDivDuration>
                     <StyledDivQuestionType>
                        Select real English word
                     </StyledDivQuestionType>
                     <StyledDivIcons>
                        <SwitchButton />
                        <img src={Edit} alt="edit" />
                        <img src={Trash} alt="trash" />
                     </StyledDivIcons>
                  </StyledDivTableBody>
                  <StyledDivTableBody>
                     <StyledDivNumber>2</StyledDivNumber>
                     <StyledDivName>
                        Select the real Englisg word in the list...
                     </StyledDivName>
                     <StyledDivDuration>1 min</StyledDivDuration>
                     <StyledDivQuestionType>
                        Select real English word
                     </StyledDivQuestionType>
                     <StyledDivIcons>
                        <SwitchButton />
                        <img src={Edit} alt="edit" />
                        <img src={Trash} alt="trash" />
                     </StyledDivIcons>
                  </StyledDivTableBody>
                  <StyledDivOfButtons>
                     <Button
                        onClick={onGoBackHandler}
                        color="primary"
                        variant="outlined"
                        sx={{ mr: '16px' }}
                     >
                        GO BACK
                     </Button>
                     <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                     >
                        SAVE
                     </Button>
                  </StyledDivOfButtons>
               </form>
            </ContentCard>
         </MainContainer>
      </div>
   )
}

export default AddQuestionPage

const Styledh4 = styled.h4`
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 20px;
   color: #4c4859;
   margin: 0px auto 10px 0px;
   padding: 0px;
   display: flex;
   display: inline-block;
`
const StyledSpan = styled.span`
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 20px;
   color: #4c4859;
   margin: 0px auto 10px 0px;
   padding: 0px;
   display: inline-block;
`
const StyledDivOfButton = styled.div`
   display: flex;
   justify-content: flex-end;
   margin: 40px auto 20px;
`

const StyledDivTableHeader = styled.div`
   width: 100%;
   height: 66px;
   border-top: 3px solid #d4d0d0;
   display: flex;
   justify-content: space-between;
   padding: 21px 22px 21px 16px;
   box-sizing: border-box;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 18px;
   display: flex;
   align-items: center;
   color: #4c4859;
`
const StyledDivTableBody = styled.div`
   width: 100%;
   height: 66px;
   box-shadow: 0px 3px 14px rgba(0, 0, 0, 0.09);
   border-radius: 8px;
   display: flex;
   justify-content: space-between;
   margin: 0px auto 16px;
   padding: 21px 22px 21px 16px;
   box-sizing: border-box;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 18px;
   display: flex;
   align-items: center;
   color: #4c4859;
`
const StyledDivNumber = styled.div`
   width: 50px;
`
const StyledDivName = styled.div`
   width: 290px;
`
const StyledDivDuration = styled.div`
   width: 120px;
`
const StyledDivQuestionType = styled.div`
   width: 226px;
`
const StyledDivIcons = styled.div`
   width: 123px;
   display: flex;
   justify-content: space-between;
`
const StyledDivOfButtons = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`
