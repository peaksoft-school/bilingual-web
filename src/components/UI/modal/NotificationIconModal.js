import React from 'react'
import Button from '../button/index'
import { ReactComponent as SuccessIcon } from '../../../assets/icons/success.svg'
import { BoldText, Text, WrapperContent } from './ConfirmModal'
import { ReactComponent as ErrorIcon } from '../../../assets/icons/delete.svg'
import ModalWrapper, { ModalFooter } from './ModalWrapper'

function NotificationIconModal({ success, error, onConfirm }) {
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
      <ModalWrapper>
         <WrapperContent>{content}</WrapperContent>
         <ModalFooter>
            <Button variant="contained" color="primary" onClick={onConfirm}>
               OK
            </Button>
         </ModalFooter>
      </ModalWrapper>
   )
}

export default NotificationIconModal