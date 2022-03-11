import React from 'react'
import styled from 'styled-components'
import RadioButton from '../../../components/UI/radioButton'

function UserSelectBestTitleOptions({ option, onChangeRadioButtonHandler }) {
   const radioButtonChangeHandler = (id) => {
      onChangeRadioButtonHandler(id)
   }

   return (
      <Box>
         <StyledDivIcons
            checked={option.correct}
            onChange={() => radioButtonChangeHandler(option.id)}
         >
            <RadioButton color="primary" />
         </StyledDivIcons>
         <P>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have.
         </P>
      </Box>
   )
}

export default UserSelectBestTitleOptions

const P = styled('p')`
   margin: 0 auto;
   font-size: 16px;
   font-family: 'DINNextRoundedLTW01';
   color: #4c4859;
`
const Box = styled('li')`
   margin-top: 30px;
   padding: 12px 18px;
   background: #ffffff;
   border: 1.53px solid #d4d0d0;
   box-sizing: border-box;
   border-radius: 8px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const StyledDivIcons = styled('div')`
   display: flex;
   justify-content: space-between;
`
