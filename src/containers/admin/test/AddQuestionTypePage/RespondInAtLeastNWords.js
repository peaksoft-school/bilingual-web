import React from 'react'
import styled from 'styled-components'
import Input from '../../../../UI/input'
import Button from '../../../../UI/button/index'

const RespondInAtLeastNWords = () => {
   return (
      <div style={{ marginTop: '30px' }}>
         <StyledP>Question statement</StyledP>
         <Input />
         <StyledP>Number of minimum words</StyledP>
         <Input style={{ width: '83px' }} />
         <StyledDivOfModalFooter>
            <Button color="primary" variant="outlined" sx={{ mr: '16px' }}>
               GO BACK
            </Button>
            <Button type="submit" color="secondary" variant="contained">
               SAVE
            </Button>
         </StyledDivOfModalFooter>
      </div>
   )
}

export default RespondInAtLeastNWords

const StyledP = styled.p`
   padding: 0;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 18px;
   color: #4b4759;
`

const StyledDivOfModalFooter = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`
