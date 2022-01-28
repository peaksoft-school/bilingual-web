import React, { useState } from 'react'
import Modal from './Modal'
import Button from '../Button'
import { ReactComponent as SuccessIcon } from '../../../assets/icons/success.svg'
import { BoldText, Text, WrapperContent } from './OnConfirmModal'
import { ModalFooter } from './ModalFooter'
import { ReactComponent as ErrorIcon } from '../../../assets/icons/delete.svg'

function NotificationModal({ success, error }) {
   const [isOpenModal, setIsopen] = useState(false)
   const openHandler = () => {
      setIsopen((prev) => !prev)
   }
   let content
   if (success)
      content = (
         <>
            <SuccessIcon />
            <BoldText>File saved </BoldText>
            <Text>Successfully saved</Text>
         </>
      )

   if (error)
      content = (
         <>
            <ErrorIcon />
            <BoldText>File deleted </BoldText>
            <Text>Successfully deleted</Text>
         </>
      )
   return (
      <>
         <Button onClick={openHandler}> click</Button>
         <Modal open={isOpenModal} onClose={openHandler}>
            <WrapperContent>{content}</WrapperContent>
            <ModalFooter>
               <Button variant="contained" onClick={openHandler}>
                  OK
               </Button>
            </ModalFooter>
         </Modal>
      </>
   )
}

export default NotificationModal
