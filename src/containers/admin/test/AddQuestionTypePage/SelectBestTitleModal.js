import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../../../../UI/input'
import ReCheckbox from '../../../../UI/checkbox/index'
import Button from '../../../../UI/button/index'
import ModalWrapper, { ModalFooter } from '../../../../UI/modal/ModalWrapper'

const SelectBestTitleModal = ({ onClose, open, onAddOptions }) => {
   const [enteredValue, setEnteredValue] = useState('')

   const goalInputChangeHandler = (event) => {
      setEnteredValue(event.target.value)
   }

   const formSubmitHandler = (event) => {
      event.preventDefault()
      onAddOptions(enteredValue)
   }

   return (
      <ModalWrapper onClose={onClose} open={open}>
         <form onSubmit={formSubmitHandler}>
            <div style={{ margin: '42px 60px 16px' }}>
               <StyledP>Title</StyledP>
            </div>

            <Input
               multiline
               onChange={goalInputChangeHandler}
               style={{ width: '517px', margin: '16px 60px 34px 60px' }}
            />

            <div>
               <StyledSpanInModal>Is true option?</StyledSpanInModal>
               <ReCheckbox />
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
                     type="submit"
                     onClick={onClose}
                     color="secondary"
                     variant="contained"
                  >
                     SAVE
                  </Button>
               </StyledDivOfFooter>
            </ModalFooter>
         </form>
      </ModalWrapper>
   )
}

export default SelectBestTitleModal
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
