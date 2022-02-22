import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../../../../components/UI/input'
import ReCheckbox from '../../../../components/UI/checkbox/index'
import Button from '../../../../components/UI/button/index'
import ModalWrapper, {
   ModalFooter,
} from '../../../../components/UI/modal/ModalWrapper'

const SelectTheMainIdeaModal = ({ onClose, open, onAddOptions }) => {
   const [enteredValue, setEnteredValue] = useState('')
   const [checkbox, setCheckbox] = useState(false)

   const goalInputChangeHandler = (event) => {
      setEnteredValue(event.target.value)
   }
   const enabled = enteredValue.length > 0

   const formSubmitHandler = (event) => {
      event.preventDefault()
      event.stopPropagation()
      const ansewer = {
         enteredValue,
         checkbox,
      }
      onAddOptions(ansewer)
      setCheckbox(false)
      setEnteredValue('')
      onClose()
   }

   return (
      <ModalWrapper onClose={onClose} open={open}>
         <form onSubmit={formSubmitHandler}>
            <div style={{ margin: '42px 60px 16px' }}>
               <StyledP>Title</StyledP>
            </div>

            <Input
               multiline
               value={enteredValue}
               onChange={goalInputChangeHandler}
               style={{ width: '517px', margin: '16px 60px 34px 60px' }}
            />

            <div>
               <StyledSpanInModal>Is true option?</StyledSpanInModal>
               <ReCheckbox
                  onClick={() => {
                     setCheckbox((checkbox) => !checkbox)
                  }}
               />
            </div>
            <ModalFooter>
               <StyledDivOfFooter>
                  <Button
                     onClick={onClose}
                     color="primary"
                     variant="outlined"
                     sx={{ mr: '16px', background: 'white' }}
                  >
                     GO BACK
                  </Button>
                  <Button
                     type="sumbit"
                     color="secondary"
                     variant="contained"
                     disabled={!enabled}
                  >
                     SAVE
                  </Button>
               </StyledDivOfFooter>
            </ModalFooter>
         </form>
      </ModalWrapper>
   )
}

export default SelectTheMainIdeaModal
const StyledSpanInModal = styled.span`
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 18px;
   color: #4c4859;
   margin-left: 60px;
`
const StyledDivOfFooter = styled.div`
   width: 100%;
   margin-right: 60px;
   display: flex;
   justify-content: flex-end;
`
const StyledP = styled.p`
   padding: 0;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 18px;
   color: #4b4759;
`
