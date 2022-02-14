import React from 'react'
import styled from 'styled-components'
import HighlightTheAnswerTextField from './HighlightTheAnswerTextField'
import Input from '../../../../components/UI/input/index'
import Button from '../../../../components/UI/button/index'

const HighLightTheAnswer = () => {
   const [data, setData] = React.useState('')

   const onChangeHandlerinput = (props) => {
      setData(props)
   }
   return (
      <>
         <div style={{ margin: '30px 0px 32px', width: '100%' }}>
            <StyledP>Questions to the Passage</StyledP>
            <Input sx={{ width: '100%' }} />
            <StyledP>Passage</StyledP>
            <HighlightTheAnswerTextField
               onChageHandler={onChangeHandlerinput}
            />
            <StyledP>Highlight correct answer:</StyledP>
            <div>{data}</div>
         </div>

         <StyledDivOfFooter>
            <Button color="primary" variant="outlined" sx={{ mr: '16px' }}>
               GO BACK
            </Button>
            <Button type="submit" color="secondary" variant="contained">
               SAVE
            </Button>
         </StyledDivOfFooter>
      </>
   )
}

export default HighLightTheAnswer

const StyledP = styled.p`
   padding: 0;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 18px;
   color: #4b4759;
`

const StyledDivOfFooter = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`
