import React from 'react'
import NotificationIconModal from '../../../../components/UI/modal/NotificationIconModal'

const TypeWhatYouHearModal = ({
   onClose,
   open,
   error,
   onConfirm,
   success,
   message,
}) => {
   return (
      <NotificationIconModal
         onClose={onClose}
         error={error}
         onConfirm={onConfirm}
         open={open}
         success={success}
         message={message}
      >
         {/* <p>{success || error}</p> */}
      </NotificationIconModal>
   )
}

export default TypeWhatYouHearModal
