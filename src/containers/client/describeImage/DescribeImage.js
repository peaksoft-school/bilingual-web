import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import line from '../../../assets/icons/Line.svg'
import LayoutClient from '../../../layout/clientLayout/layoutClient/LayoutClient'
import CountTime from './CountTime'

const DivStyled = styled('div')`
   margin-top: 50px;
   margin-bottom: 50px;
   display: flex;
   justify-content: center;
`
const StyledP = styled('p')`
   color: #4c4859;
   font-size: 28px;
   line-height: 32px;
`
const DivImgInput = styled('div')`
   display: flex;
   justify-content: center;
   align-items: center;
`
const Input = styled('textarea')`
   width: 439px;
   height: 131px;
   background: #ffffff;
   border: 1.53px solid #d4d0d0;
   box-sizing: border-box;
   border-radius: 8px;
   margin-left: 94px;
   resize: none;
`
const DivNumber = styled('div')`
   display: flex;
   justify-content: center;
   color: #afafaf;
   font-size: 16px;
   line-height: 124%;
   width: 730px;
   margin-bottom: 89px;
`
const DescribeImage = () => {
   const [time, setTime] = useState({ min: 2, sec: 50 })
   const getAllLanguagesApi = async () => {
      const requestConfig = await getQuestUser()
      console.log(requestConfig)
      // const response = await sendRequest(requestConfig)
      // return setGetAllLanguages(response)
   }
   useEffect(() => getAllLanguagesApi(), [])
   useEffect(() => {
      const myInterval = setInterval(() => {
         setTime((time) => {
            const updateIn = { ...time }
            if (time.sec > 0) updateIn.sec--
            if (time.sec === 0) {
               if (time.min === 0) {
                  clearInterval(myInterval)
               } else if (time.min > 0) {
                  updateIn.min--
                  updateIn.sec = 59
               }
            }
            return updateIn
         })
      }, 1000)
   }, [])
   console.log(time)
   return (
      <LayoutClient>
         <div>
            <div>
               <CountTime time={time} />
            </div>
            <DivStyled>
               <StyledP>Type the statement you hear</StyledP>
            </DivStyled>
            <DivImgInput>
               <img src={listen} alt="listen" />
               <Input type="text" multiline placeholder="Your response" />
            </DivImgInput>
            <DivNumber>
               <p>number of replays left: 2</p>
            </DivNumber>
            <div>
               <img src={line} alt="line" />
            </div>
         </div>
      </LayoutClient>
   )
}
export default DescribeImage
