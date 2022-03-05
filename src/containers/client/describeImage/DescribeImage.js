import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LayoutClient from '../../../layout/clientLayout/layoutClient/LayoutClient'
import Button from '../../../components/UI/button/index'
import CountTime from '../../../components/UI/progressTime/CountTime'
import { getFiles, getUserTest } from '../../../api/clientService'

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

const DivButton = styled('div')`
   margin-top: 90px;
   border-top: 2px solid #d4d0d0;
   padding-top: 32px;
   display: flex;
   justify-content: flex-end;
`
const ButtonS = styled(Button)`
   width: 143px;
`

const DescribeImage = () => {
   const [state, setState] = useState({})
   const [time, setTime] = useState({ min: 0, sec: 0 })
   const [text, setText] = useState('')

   const [files, setFiles] = useState([])

   useEffect(() => setTime({ ...time, min: state?.duration }), [state])

   const getAllLanguagesApi = async () => {
      const requestConfig = await getUserTest()
      const fileName = requestConfig.data.file
      const api = await getFiles(fileName)

      setFiles(api)

      setState(requestConfig.data)
   }

   console.log(state.file)
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

   const onChangeText = (e) => {
      setText(e.target.value)
   }
   console.log(files)

   const enabled = () => text.trim()
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
               <img src={files} alt="listen" />
               <Input
                  onChange={onChangeText}
                  type="text"
                  multiline
                  placeholder="Your response"
               />
            </DivImgInput>
            <DivButton>
               <ButtonS
                  disabled={!enabled()}
                  color="primary"
                  variant="contained"
               >
                  NEXT
               </ButtonS>
            </DivButton>
         </div>
      </LayoutClient>
   )
}
export default DescribeImage
