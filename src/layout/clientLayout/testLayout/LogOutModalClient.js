import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import styled from 'styled-components'
import Modal from '@mui/material/Modal'
import Button from '../../../components/UI/button/index'

export default function LogOutModalClient({ open, onClose, onConfirm }) {
   return (
      <div>
         <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <Typography
                  id="modal-modal-description"
                  sx={{
                     mt: 0,
                     letterSpacing: '0.02em',
                     fontFamily: 'DINNextRoundedLTW01-Regular',
                     fontStyle: 'normal',
                     fontWeight: 'normal',
                     fontSize: '16px',
                  }}
               >
                  Are you sure you want to leave your practice test?
               </Typography>
               <StyledButton>
                  <Button
                     onClick={onClose}
                     variant="outlined"
                     color="primary"
                     sx={{
                        height: '42px',
                        mr: '16px',
                        letterSpacing: '0.02em',
                     }}
                  >
                     CONTINUE TEST
                  </Button>
                  <Button
                     onClick={onConfirm}
                     variant="contained"
                     color="primary"
                     sx={{ height: '42px', letterSpacing: '0.02em' }}
                  >
                     QUIT TEST
                  </Button>
               </StyledButton>
            </Box>
         </Modal>
      </div>
   )
}

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: '430px',
   borderRadius: '10px',
   bgcolor: '#FFFFFF',
   boxShadow: '0px 4px 39px -5px rgba(196, 196, 196, 0.6)',
   p: '32px 32px ',
   boxSizing: 'border-box',
}
const StyledButton = styled.div`
   margin-top: 34px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   box-sizing: border-box;
`
