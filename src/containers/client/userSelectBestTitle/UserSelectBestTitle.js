import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/UI/button/index'
import LayoutFinal from '../../../layout/clientLayout/LayoutFinal/LayoutFinal'
import UserSelectBestTitleOptions from './UserSelectBestTitleOptions'

function UserSelectBestTitle() {
   const [state, setState] = useState([])

   const onChangeRadioButtonHandler = () => {
      setState()
   }

   return (
      <LayoutFinal>
         <Div>
            <div>
               <DivInput>PASSAGE</DivInput>
               <TextAreaDiv>
                  <TextArea />
               </TextAreaDiv>
            </div>
            <RightDiv>
               <Text>
                  <P>Select the best title for the passage</P>
               </Text>
               {state.map((option) => {
                  return (
                     <UserSelectBestTitleOptions
                        option={option}
                        onChangeRadioButtonHandler={onChangeRadioButtonHandler}
                     />
                  )
               })}
               <FooterDiv>
                  <Button
                     color="primary"
                     variant="contained"
                     sx={{ mt: '32px', width: '143px', height: '43px' }}
                  >
                     NEXT
                  </Button>
               </FooterDiv>
            </RightDiv>
         </Div>
      </LayoutFinal>
   )
}
export default UserSelectBestTitle

const DivInput = styled('div')`
   width: 522px;
   height: 17px;
   margin: 0 auto;
   border: 1px solid rgb(118, 118, 118);
   padding: 16px 34px;
   color: #4c4859;
   background-color: #d4d0d0;
   font-size: 16px;
   font-family: 'DINNextRoundedLTW04-Medium';
   border-radius: 8px 8px 0 0;
`
const RightDiv = styled.div`
   width: 390px;
   margin-left: 40px;
   display: flex;
   flex-direction: column;
`
const FooterDiv = styled.div`
   display: flex;
   justify-content: flex-end;
`
const TextAreaDiv = styled.div`
   width: 555px;
`
const TextArea = styled.textarea`
   width: 522px;
   height: 408px;
   padding: 28px 34px;
   border: 1px solid rgb(118, 118, 118);
   background-color: #d4d0d0;
   border-radius: 0 0 8px 8px;
   resize: none;
   font-family: 'DINNextRoundedLTW01';
   font-size: 16px;
   color: #4c4859;
`
const P = styled.p`
   margin: 0 auto;
   font-family: 'DINNextRoundedLTW01';
   font-size: 26px;
   color: #4c4859;
`
const Text = styled.div`
   width: 390px;
`
const Div = styled.div`
   display: flex;
   justify-content: space-between;
`
