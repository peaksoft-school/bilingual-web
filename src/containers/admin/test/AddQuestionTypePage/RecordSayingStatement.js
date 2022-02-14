import React from 'react'
import styled from 'styled-components'
import Button from '../../../../UI/button/index'

const RecordSayingStatement = () => {
   return (
      <div style={{ marginTop: '30px' }}>
         <StyledSpan>Statement</StyledSpan>
         <StyledInput />
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

export default RecordSayingStatement

const StyledSpan = styled.span`
   padding: 0;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 18px;
   color: #4b4759;
`

const StyledInput = styled.input`
   width: 100%;
   height: 46px;
   border: 1.53px solid #d4d0d0;
   box-sizing: border-box;
   border-radius: 8px;
   outline: none;
   margin: 16px auto 30px;
   padding: 14px 20px 14px 20px;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 18px;
   color: #4c4859;
`

const StyledDivOfModalFooter = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`
