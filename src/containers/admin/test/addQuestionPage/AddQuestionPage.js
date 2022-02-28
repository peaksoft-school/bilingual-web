import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import ContentCard from '../../../../components/UI/adminLayout'
import Button from '../../../../components/UI/button/index'
import Items from './Items'
import { getTestRequest } from '../../../../api/testService'

const AddQuestionPage = () => {
   const navigate = useNavigate()
   const dataOfDescription = async () => {
      try {
         const response = await getTestRequest()
         setTestName(response.data)
         setQuestionDetails(response.data.questions)
         console.log(response)
      } catch (error) {
         console.log(error)
      }
   }

   React.useEffect(() => {
      dataOfDescription()
   }, [])
   const [testName, setTestName] = React.useState({})
   const [questionDetails, setQuestionDetails] = React.useState([])

   const deleteQuestinHandler = () => {}
   const editQuestionHandler = () => {}

   const [toggleValue, setToggleValue] = React.useState([{}])
   const toggleHandler = () => {
      setToggleValue()
   }
   console.log(toggleValue)

   const onClickToAddMoreQuestionsPage = () => {
      navigate('/addQuestionsTypesPage')
   }

   const onGoBackHandler = () => {
      navigate(-1)
   }

   const submitHandler = (event) => {
      event.preventDefault()
      // putTestQuestionRequest(toggle)
   }
   return (
      <ContentCard>
         <form onSubmit={submitHandler}>
            <div>
               <Styledh4>Title :</Styledh4>
               <StyledSpan>{testName.title}</StyledSpan>
               <br />
               <Styledh4>Total Duration :</Styledh4>
               <StyledSpan>{testName.duration}</StyledSpan>
               <br />
               <Styledh4>Short Description :</Styledh4>
               <StyledSpan>{testName.shortDescription}</StyledSpan>
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
               <StyledDivQuestionType>Question Type</StyledDivQuestionType>
               <StyledDivIcons> </StyledDivIcons>
            </StyledDivTableHeader>

            <StyledUl>
               {questionDetails.map((details) => {
                  return (
                     <StyledLiTable key={details.id}>
                        <StyledDivName>{details.title}</StyledDivName>
                        <StyledDivDuration>
                           {details.duration}
                        </StyledDivDuration>
                        <StyledDivQuestionType>
                           {details.type}
                        </StyledDivQuestionType>
                        <Items
                           onHandleValue={toggleHandler}
                           onDelete={deleteQuestinHandler}
                           onEdit={editQuestionHandler}
                        />
                     </StyledLiTable>
                  )
               })}
            </StyledUl>

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
            </StyledDivOfButtons>
         </form>
      </ContentCard>
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

const StyledUl = styled.ul`
   padding: 0px;
   counter-reset: my-counter;
`
const StyledLiTable = styled.li`
   width: 100%;
   height: 66px;
   box-shadow: 0px 3px 14px rgba(0, 0, 0, 0.09);
   border-radius: 8px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 0px auto 16px;
   padding: 21px 22px 21px 16px;
   box-sizing: border-box;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 18px;
   color: #4c4859;
   &::before {
      content: counter(my-counter);
      counter-increment: my-counter;
      width: 30px;
   }
`
const StyledDivNumber = styled.div`
   width: 30px;
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
