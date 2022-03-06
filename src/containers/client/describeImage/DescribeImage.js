import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LayoutClient from '../../../layout/clientLayout/layoutClient/LayoutClient'
import Button from '../../../components/UI/button/index'
import CountTime from '../../../components/UI/progressTime/CountTime'
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

const Img = styled('img')`
   width: 182px;
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

   const [text, setText] = useState('')
   const [files, setFiles] = useState([])

   const getAllLanguagesApi = async () => {
      const requestConfig = await getUserTest()

      setFiles(requestConfig.data.file)

      setState(requestConfig.data)
   }

   useEffect(() => getAllLanguagesApi(), [])

   const onChangeText = (e) => {
      setText(e.target.value)
   }

   const enabled = () => text.trim()
   return (
      <LayoutClient>
         <div>
            <div>
               <CountTime time={state.duration} totalTime={state.duration} />
            </div>
            <DivStyled>
               <StyledP>{state.title}</StyledP>
            </DivStyled>
            <DivImgInput>
               <Img
                  src={`http://3.65.208.103/api/files/${files}`}
                  alt="listen"
               />
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
