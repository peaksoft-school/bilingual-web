import React from 'react'
import styled from 'styled-components'
import SwitchButton from '../../../UI/switchButton/index'
import Edit from '../../../../assets/icons/edit.svg'
import Trash from '../../../../assets/icons/trash.svg'

const Items = ({ toggle, onToggle, onEdit, onDelete }) => {
   return (
      <StyledDivIcons>
         <SwitchButton onChange={onToggle} checked={toggle} />
         <StyledButton type="button" onClick={onEdit}>
            <img src={Edit} alt="edit" />
         </StyledButton>
         <StyledButton type="button" onClick={onDelete}>
            <img src={Trash} alt="trash" />
         </StyledButton>
      </StyledDivIcons>
   )
}

export default Items

const StyledDivIcons = styled.div`
   width: 123px;
   display: flex;
   justify-content: space-between;
`
const StyledButton = styled.button`
   border: none;
   background: inherit;
   cursor: pointer;
`
