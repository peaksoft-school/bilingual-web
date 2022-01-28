import styled from 'styled-components'
import Modal from './Modal'
import { ReactComponent as ConfirmIcon } from '../../../assets/icons/Confirm.svg'
import { ModalFooter } from './ModalFooter'
import Button from '../button/index'

function OnConfirmModal() {
   return (
      <Modal>
         <WrapperContent>
            <ConfirmIcon />
            <BoldText>Do you want delete?</BoldText>
            <Text>You can’t restore this file </Text>
         </WrapperContent>
         <ModalFooter>
            <Cansel>
               {' '}
               <Button variant="outlined" color="primary">
                  cansel{' '}
               </Button>
            </Cansel>
            <Delete>
               <Button variant="contained" color="primary">
                  delete
               </Button>
            </Delete>
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
const Cansel = styled.div`
   margin-left: 140px;
`

const Delete = styled.div`
   margin-right: 140px;
`
