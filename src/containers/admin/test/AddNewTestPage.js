import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import MainContainer from '../../../layout/MainContainer'
import ContentCard from '../../../components/UI/adminContentCard'
import Input from '../../../components/UI/input/index'
import Button from '../../../components/UI/button/index'
import { sendNewTestRequest } from '../../../api/testService'

const AddNewTest = () => {
   const navigate = useNavigate()

   const [showAddQuestionsButton, setShowAddQuestionsButton] = useState(false)
   const [newTest, setNewTest] = useState({ title: '', shortDescriptions: '' })

   const onChangeHandle = (event) => {
      setNewTest((prev) => ({
         ...prev,
         [event.target.name]: event.target.value,
      }))
   }

   const onGoBackHandler = () => {
      navigate(-1)
   }

   const onClickToAddMoreQuestionsPage = () => {
      navigate('/AddQuestionsPage')
   }
   const submitHandler = (event) => {
      event.preventDefault()
      setShowAddQuestionsButton(true)
      sendNewTestRequest(newTest)
   }
   return (
      <MainContainer>
         <ContentCard>
            <form onSubmit={submitHandler}>
               <div style={{ width: '100%' }}>
                  <StyledSpan>Title</StyledSpan>
                  <Input
                     name="title"
                     style={{ width: '100%', margin: '16px 0px 30px' }}
                     value={newTest.title}
                     onChange={onChangeHandle}
                  />
                  <StyledSpan>Short Description</StyledSpan>
                  <Input
                     name="shortDescriptions"
                     style={{ width: '100%', margin: '16px 0px 30px' }}
                     value={newTest.shortDescriptions}
                     onChange={onChangeHandle}
                  />
               </div>

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

const StyledSpan = styled.p`
   margin: 0;
   padding: 0;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 18px;
   color: #4b4759;
`

const StyledDivOfButtons = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`

export default AddNewTest
