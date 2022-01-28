import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import { ReactComponent as Confirm } from '../../../assets/icons/Confirm.svg'
import { ModalFooter } from './ModalFooter'
import Button from '../Button'

function OnConfirmModal() {
   const [isOpenModal, setIsopen] = useState(false)
   const openHandler = () => {
      setIsopen((prev) => !prev)
   }
   return (
      <Modal open={isOpenModal} onClose={openHandler}>
         <WrapperContent>
            <Confirm />
            <BoldText>Do you want delete?</BoldText>
            <Text>You can’t restore this file </Text>
         </WrapperContent>
         <ModalFooter>
            <Div>
               {' '}
               <Button variant="outlined" color="primary">
                  cansel{' '}
               </Button>
            </Div>
            <Div2>
               <Button variant="contained" color="primary">
                  delete
               </Button>
            </Div2>
         </ModalFooter>
      </Modal>
   )
}

export default OnConfirmModal
export const WrapperContent = styled.div`
   display: flex;
   justify-content: start;
   flex-direction: column;
   align-items: center;
   padding: 61px;
`
export const BoldText = styled.div`
   font-family: 'DINNextRoundedLTPro-Bold';
   font-size: 20px;
   margin-top: 50px;
`
export const Text = styled.div`
   font-size: 16px;
   color: #4c4859;
   padding: 7px;
`
const Div = styled.div`
   margin-left: 140px;
`

const Div2 = styled.div`
   margin-right: 140px;
`
