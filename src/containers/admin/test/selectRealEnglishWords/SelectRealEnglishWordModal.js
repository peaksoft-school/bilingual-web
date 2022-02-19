import React, { useState } from 'react'
import styled from 'styled-components'
import ReCheckbox from '../../../../components/UI/checkbox/index'
import Button from '../../../../components/UI/button/index'
import ModalWrapper, {
   ModalFooter,
} from '../../../../components/UI/modal/ModalWrapper'

const SelectRealEnglishWordModal = ({ onClose, open, onAddOptions }) => {
   const [enteredValue, setEnteredValue] = useState('')
   const [checkbox, setCheckBox] = useState(false)
   const goalInputChangeHandler = (event) => {
      setEnteredValue(event.target.value)
   }

   const formSubmitHandler = (event) => {
      event.preventDefault()
      event.stopPropagation()
      const answer = {
         enteredValue,
         checkbox,
      }
      onAddOptions(answer)
      setCheckBox(false)
   }

   return (
      <ModalWrapper onClose={onClose} open={open}>
         <form onSubmit={formSubmitHandler}>
            <div style={{ margin: '42px 60px 16px' }}>
               <StyledSpan>Title</StyledSpan>
            </div>

            <StyledInput
               onChange={goalInputChangeHandler}
               style={{ width: '517px', margin: '16px 60px 34px 60px' }}
            />

            <div>
               <StyledSpanInModal>Is true option?</StyledSpanInModal>
               <ReCheckbox
                  onClick={() => {
                     setCheckBox((checkbox) => !checkbox)
                  }}
               />
            </div>
            <ModalFooter>
               <StyledDivOfModalFooter>
                  <Button
                     color="primary"
                     variant="outlined"
                     sx={{ mr: '16px', background: 'white' }}
                  >
                     GO BACK
                  </Button>
                  <Button
                     type="submit"
                     onClick={onClose}
                     color="secondary"
                     variant="contained"
                  >
                     SAVE
                  </Button>
               </StyledDivOfModalFooter>
            </ModalFooter>
         </form>
      </ModalWrapper>
   )
}

export default SelectRealEnglishWordModal
const StyledSpanInModal = styled.span`
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 18px;
   color: #4c4859;
   margin-left: 60px;
`
const StyledDivOfModalFooter = styled.div`
   width: 100%;
   margin-right: 60px;
   display: flex;
   justify-content: flex-end;
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
