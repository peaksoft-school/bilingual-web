import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { postQuestionRequest } from '../../../../../api/testService'
import Button from '../../../../../components/UI/button/index'

const RecordSayingStatement = () => {
   const navigate = useNavigate()
   const [recordText, setRecordText] = useState({ text: '' })

   const statement = (event) => {
      setRecordText((prev) => ({
         ...prev,
         [event.target.name]: event.target.value,
      }))
   }

   const submitHandler = (event) => {
      event.preventDefault()
      postQuestionRequest(recordText)
      console.log(recordText)
   }

   const onGoBackHandler = () => {
      navigate(-1)
   }

   return (
      <Div style={{ marginTop: '30px' }}>
         <StyledSpan>Statement</StyledSpan>
         <StyledInput
            name="text"
            value={recordText.text}
            onChange={statement}
         />
         <StyledDivOfModalFooter>
            <Button
               onClick={onGoBackHandler}
               color="primary"
               variant="outlined"
               sx={{ mr: '16px' }}
            >
               GO BACK
            </Button>
            <Button
               onClick={submitHandler}
               type="submit"
               color="secondary"
               variant="contained"
            >
               SAVE
            </Button>
         </StyledDivOfModalFooter>
      </Div>
   )
}

export default RecordSayingStatement

const Div = styled.div`
   margin-top: 30px;
`

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
