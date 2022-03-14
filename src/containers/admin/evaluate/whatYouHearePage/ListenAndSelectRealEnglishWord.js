import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../../../components/UI/button/index'
import Input from '../../../../components/UI/input/index'
import {
   User,
   Data,
   ContentWrapper,
   Title,
   SecondaryTitle,
   Score,
   Btn,
   Btnfooter,
} from '../../../../components/UI/evaluation'
import Layout from '../../../../components/UI/adminContentCard'
import {
   GET_FILE_FROM_SERVER,
   ROUTES,
} from '../../../../utils/constants/general'
import {
   getUserTestAnswerQuestionRequest,
   postUserQuestionScoreRequest,
} from '../../../../api/testService'
import ReCheckbox from '../../../../components/UI/checkbox'
import SoundIcon from '../../../../assets/icons/sound.svg'

function ListenAndSelectRealEnglishWord({ userAnswer, testTitle }) {
   const navigate = useNavigate()
   const params = useParams()
   const paramsUserID = params.UserID
   const idQuestion = params.questionID

   const [words, setWords] = React.useState([])
   const [userScore, setUserScore] = React.useState('')
   const [usersAnsver, setusersAnsver] = React.useState([])

   const getQuestionById = async () => {
      try {
         const response = await getUserTestAnswerQuestionRequest(idQuestion)
         setWords(response.data.mainQuestion.options)
         setusersAnsver(response.data.userResult.optionResults)
      } catch (error) {
         console.log(error)
      }
   }

   React.useEffect(() => {
      getQuestionById()
   }, [])

   const inputCgangeHandler = (e) => {
      setUserScore({ score: e.target.value })
   }
   const submitHandler = (e) => {
      e.preventDefault()
      postUserQuestionScoreRequest(idQuestion, userScore)
      navigate(`${ROUTES.EVALUATE_QUESTIONS}/${paramsUserID}`)
   }
   const gobackHandler = () => {
      navigate(`${ROUTES.EVALUATE_QUESTIONS}/${paramsUserID}`)
   }
   const handleClick = () => {
      const audio = new Audio(`${GET_FILE_FROM_SERVER}/${words.file}`)
      audio.play()
   }

   return (
      <Layout>
         <form onSubmit={submitHandler}>
            <User>User:</User>
            <Data>{userAnswer.user?.fullName} </Data> <br />
            <User>Test: </User>
            <Data> {testTitle} </Data>
            <ContentWrapper>
               <div style={{ paddingBottom: '33px' }}>
                  <Title>Test Question </Title>
                  <SecondaryTitle>Question Title: </SecondaryTitle>
                  <Data>{userAnswer.mainQuestion?.title}</Data>
                  <br />
                  <SecondaryTitle>Duration (in minutes):</SecondaryTitle>
                  <Data>{userAnswer.mainQuestion?.duration}</Data>
                  <br />
                  <SecondaryTitle>Question Type:</SecondaryTitle>
                  <Data>{userAnswer.mainQuestion?.type}</Data>
                  <br />
               </div>
               <div>
                  <Title>Evaluation</Title>
                  <Score>Score (1 -10)</Score>
                  <Input
                     type="number"
                     min="1"
                     max="10"
                     onChange={inputCgangeHandler}
                     inputProps={{
                        style: {
                           height: '13px',
                           width: '66px',
                        },
                     }}
                  />
               </div>
            </ContentWrapper>
            <Btn>
               <StyledContainer>
                  {words.map((option, index) => {
                     return (
                        <Box key={option.id}>
                           <span>{index}</span>
                           <StyledIcon
                              key={option.id}
                              onClick={handleClick}
                              src={SoundIcon}
                              alt="volume"
                           >
                              {option.audio}
                           </StyledIcon>
                           <Item>{option.word}</Item>
                           <StyledDivIcons>
                              <ReCheckbox checked={option.correct} />
                           </StyledDivIcons>
                        </Box>
                     )
                  })}
               </StyledContainer>
            </Btn>
            <div>
               <Title>User’s Answer</Title>
               <StyledContainer>
                  {usersAnsver.map((option, index) => {
                     return (
                        <Box key={option.id}>
                           <span>{index}</span>
                           <StyledIcon
                              onClick={handleClick}
                              src={SoundIcon}
                              alt="volume"
                           >
                              {option.audio}
                           </StyledIcon>
                           <Item>{option.word}</Item>
                           <StyledDivIcons>
                              <ReCheckbox checked={option.answer} />
                           </StyledDivIcons>
                        </Box>
                     )
                  })}
               </StyledContainer>

               <br />
            </div>
            <Btnfooter>
               <Button
                  color="primary"
                  variant="outlined"
                  sx={{ mr: '16px' }}
                  onClick={gobackHandler}
               >
                  GO BACK
               </Button>
               <Button type="submit" color="secondary" variant="contained">
                  Save
               </Button>
            </Btnfooter>
         </form>
      </Layout>
   )
}

export default ListenAndSelectRealEnglishWord

const StyledContainer = styled('ul')`
   width: 100%;
   padding: 0px;
   display: flex;
   flex-wrap: wrap;
   box-sizing: border-box;
`

const Box = styled.li`
   width: 280px;
   height: 46px;
   margin-top: 18px;
   margin-right: 18px;
   padding: 14px 16px;
   background: #ffffff;
   border: 1.53px solid #d4d0d0;
   box-sizing: border-box;
   border-radius: 8px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const Item = styled.span`
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 700;
   font-size: 18px;
   line-height: 16px;
   color: #4c4859;
   margin-right: 10px;
   margin-left: 17px;
`
const StyledDivIcons = styled.div`
   width: 66px;
   display: flex;
   justify-content: space-between;
`
const StyledIcon = styled.img`
   width: 23px;
   height: 22px;
   cursor: pointer;
`
