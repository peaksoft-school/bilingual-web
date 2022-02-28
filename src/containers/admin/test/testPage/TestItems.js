import React from 'react'
import styled from 'styled-components'
import { useNavigate, Link } from 'react-router-dom'
import SwitchButton from '../../../../components/UI/switchButton/index'
import { ReactComponent as Edit } from '../../../../assets/icons/edit.svg'
import { ReactComponent as Trash } from '../../../../assets/icons/trash.svg'
import ConfirmModal from '../../../../components/UI/modal/ConfirmModal'

const TestItems = ({ onClickToDelete, id }) => {
   const navigate = useNavigate()

   const [accessToTest, setAccessToTest] = React.useState(false)
   const onChangeHandlerSwitcher = () => {
      setAccessToTest((prev) => !prev)
   }

   const onClickToEdit = () => {
      navigate('/addQuestionsPage')
   }

   const [confirmDeleteModal, setConfirmDeleteModal] = React.useState(false)
   const modalHandler = () => {
      setConfirmDeleteModal((prev) => !prev)
   }
   const deleteHandler = () => {
      onClickToDelete(id)
      modalHandler()
   }
   return (
      <StyledIconsDiv>
         <SwitchButton
            type="checkbox"
            onChange={onChangeHandlerSwitcher}
            checked={accessToTest}
         />
         <Link to={`addQuestionsPage/${id}`} key={id}>
            <StyledButton type="button" onClick={onClickToEdit}>
               <StyledEdit />
            </StyledButton>
         </Link>

         <StyledButton type="button" onClick={modalHandler}>
            <StyledTresh />
         </StyledButton>
         <ConfirmModal
            open={confirmDeleteModal}
            onClose={modalHandler}
            onDelete={deleteHandler}
         />
      </StyledIconsDiv>
   )
}

export default TestItems
const StyledButton = styled.button`
   border: none;
   background: inherit;
   cursor: pointer;
`

const StyledIconsDiv = styled.div`
   width: 112px;
   display: flex;
   justify-content: space-between;
`
const StyledTresh = styled(Trash)`
   width: 22px;
   height: 22px;
   color: #9a9a9a;
   :hover {
      color: #f61414;
   }
`
const StyledEdit = styled(Edit)`
   width: 22px;
   height: 22px;
   color: #9a9a9a;
   :hover {
      color: #0f85f1;
   }
`
