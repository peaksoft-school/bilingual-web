import React from 'react'
import Modal from './Modal'
import Button from '../button/index'
import { ReactComponent as SuccessIcon } from '../../../assets/icons/success.svg'
import { BoldText, Text, WrapperContent } from './OnConfirmModal'
import { ModalFooter } from './ModalFooter'
import { ReactComponent as ErrorIcon } from '../../../assets/icons/delete.svg'

function NotificationModal({ success, error }) {
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
      <Modal>
         <WrapperContent>{content}</WrapperContent>
         <ModalFooter>
            <Button variant="contained" color="primary">
               OK
            </Button>
         </ModalFooter>
      </Modal>
   )
}

export default NotificationModal
