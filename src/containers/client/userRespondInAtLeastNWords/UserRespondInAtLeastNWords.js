import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../../components/UI/button/index'
import LayoutTest from '../../../layout/clientLayout/testLayout/LayoutTest'
import { allTest } from '../../../store/userTests'
import CountTime from './CountTime'

function UserRespondInAtLeastNWords() {
   const dispatch = useDispatch()
   // const navigate = useNavigate()
   const questions = useSelector((state) => state.tests.questions)
   console.log(questions)

   const [words, setWords] = useState('')
   const [time, setTime] = useState({ min: 0, sec: 0 })

   useEffect(() => setTime({ ...time, min: questions?.duration }), [questions])

   useEffect(() => {
      const myInterval = setInterval(() => {
         setTime((time) => {
            const updateIn = { ...time }
            if (time.sec > 0) updateIn.sec -= 1
            if (time.sec === 0) {
               if (time.min === 0) {
                  clearInterval(myInterval)
               } else if (time.min > 0) {
                  updateIn.min -= 1
                  updateIn.sec = 59
               }
            }
            return updateIn
         })
      }, 1000)

      return () => {
         clearTimeout(myInterval)
      }
   }, [])

   const onChangeWords = (event) => {
      setWords(event.target.value)
   }

   const countOfWords = () => {
      return words
         .trim()
         .replace(/[ ]+/g, ' ')
         .split(' ')
         .filter((i) => i).length
   }

   useEffect(() => {
      dispatch(allTest())
   }, [])

   const enabled = () => countOfWords() > questions.count

   return (
      <LayoutTest>
         <div>
            <CountTime time={time} totalTime={questions.duration} />
         </div>
         <HeaderTitle>{questions.title}</HeaderTitle>
         <Div>
            <Text>
               <P>{questions.statement}</P>
            </Text>
            <TextAreaDiv>
               <TextArea onChange={onChangeWords} />
               <Footer isEnabled={!enabled()}>Words: {countOfWords()}</Footer>
            </TextAreaDiv>
         </Div>
         <FooterDiv>
            <Button
               disabled={!enabled()}
               color="primary"
               variant="contained"
               sx={{ width: '143px' }}
            >
               NEXT
            </Button>
         </FooterDiv>
      </LayoutTest>
   )
}

export default UserRespondInAtLeastNWords
const Footer = styled.h4`
   margin: 0 auto;
   margin-top: 10px;
   font-family: 'DINNextRoundedLTW01';
   font-size: 16px;
   color: ${({ isEnabled }) => (isEnabled ? '#afafaf' : '#3a10e5')};
`
const FooterDiv = styled.div`
   margin-top: 90px;
   border-top: 2px solid #d4d0d0;
   padding-top: 32px;
   display: flex;
   justify-content: flex-end;
`
const TextAreaDiv = styled.div`
   width: 382px;
`
const TextArea = styled.textarea`
   width: 348px;
   height: 169px;
   padding: 14px 16px;
   border-radius: 8px;
   resize: none;
   font-family: 'DINNextRoundedLTW01';
   font-size: 16px;
   color: #4c4859;
`

const P = styled.p`
   margin: 0 auto;
   font-family: 'DINNextRoundedLTW01';
   font-size: 18px;
   color: #4c4859;
`

const Text = styled.div`
   width: 330px;
`
const Div = styled.div`
   margin-top: 50px;
   display: flex;
   justify-content: space-between;
`

const HeaderTitle = styled.p`
   margin: 0 auto;
   margin-top: 50px;
   font-family: 'DINNextRoundedLTW01';
   font-size: 28px;
   color: #4c4859;
   display: flex;
   justify-content: center;
`
