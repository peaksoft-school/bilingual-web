import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import line from '../../../assets/icons/Line.svg'
import elephant from '../../../assets/icons/elephant.svg'
import LayoutClient from '../../../layout/clientLayout/layoutClient/LayoutClient'
import CountTime from './CountTime'
import { getUserTest } from '../../../api/clientService'

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
   margin-bottom: 89px;
`
const Input = styled('textarea')`
   width: 382px;
   height: 183px;
   background: #ffffff;
   border: 1.53px solid #d4d0d0;
   box-sizing: border-box;
   border-radius: 8px;
   margin-left: 24px;
   resize: none;
`

const DescribeImage = () => {
   const [state, setState] = useState({})
   const [time, setTime] = useState({ min: 0, sec: 0 })

   useEffect(() => setTime({ ...time, min: state?.duration }), [state])

   const getAllLanguagesApi = async () => {
      const requestConfig = await getUserTest()
      setState(requestConfig.data[8]?.questions[1])
   }

   useEffect(() => getAllLanguagesApi(), [])

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
   }, [])
   return (
      <LayoutClient>
         <div>
            <div>
               <CountTime time={time} totalTime={state.duration} />
            </div>
            <DivStyled>
               <StyledP>{state.title}</StyledP>
            </DivStyled>
            <DivImgInput>
               <img src={elephant} alt="listen" />
               <Input type="text" multiline placeholder="Your response" />
            </DivImgInput>
            <div>
               <img src={line} alt="line" />
            </div>
         </div>
      </LayoutClient>
   )
}
export default DescribeImage
