import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import MainContainer from '../../../../layout/MainContainer'
import ContentCard from '../../../UI/adminContentCard'
import Button from '../../../UI/button/index'

const AddNewTest = () => {
   const navigate = useNavigate()

   const [showAddQuestionsButton, setShowAddQuestionsButton] = useState(false)
   const [title, setTitle] = useState('')
   const [shortDescriptions, setShortDescriptions] = useState('')

   const onChangeTitle = (event) => {
      setTitle(event.target.value)
   }

   const onChangeShortDescriptions = (event) => {
      setShortDescriptions(event.target.value)
   }

   const onGoBackHandler = () => {
      navigate(-1)
   }

   const onClickToAddMoreQuestionsPage = () => {
      navigate('/addQuestionsPage')
   }
   const submitHandler = (event) => {
      event.preventDefault()
      setShowAddQuestionsButton(true)
   }
   return (
      <MainContainer>
         <ContentCard>
            <form onSubmit={submitHandler}>
               <StyledSpan>Title</StyledSpan>
               <StyledInput onChange={onChangeTitle} />
               <StyledSpan>Short Description</StyledSpan>
               <StyledInput onChange={onChangeShortDescriptions} />
               <StyledDivOfButtons>
                  <Button
                     onClick={onGoBackHandler}
                     color="primary"
                     variant="outlined"
                     sx={{ mr: '16px' }}
                  >
                     GO BACK
                  </Button>
                  <Button type="submit" color="secondary" variant="contained">
                     SAVE
                  </Button>
                  {showAddQuestionsButton && (
                     <Button
                        onClick={onClickToAddMoreQuestionsPage}
                        variant="contained"
                        color="primary"
                        sx={{ ml: '16px' }}
                     >
                        + ADD MORE QUESTIONS
                     </Button>
                  )}
               </StyledDivOfButtons>
            </form>
         </ContentCard>
      </MainContainer>
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

const StyledInput = styled.input`
   width: 100%;
   height: 46px;
   border: 1.53px solid #d4d0d0;
   box-sizing: border-box;
   border-radius: 8px;
   outline: none;
   margin: 16px auto 30px;
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
