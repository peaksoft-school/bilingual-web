import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import SwitchButton from '../../../../components/UI/switchButton/index'
import Edit from '../../../../assets/icons/edit.svg'
import Trash from '../../../../assets/icons/trash.svg'

const TestItems = () => {
   const navigate = useNavigate()

   const [accessToTest, setAccessToTest] = React.useState(false)

   const onChangeHandlerSwitcher = () => {
      setAccessToTest((prev) => !prev)
   }

   const onClickToEdit = () => {
      navigate('/addQuestionsPage')
   }

   return (
      <StyledIconsDiv>
         <SwitchButton
            type="checkbox"
            onChange={onChangeHandlerSwitcher}
            checked={accessToTest}
         />
         <StyledButton type="button" onClick={onClickToEdit}>
            <StyledEdit src={Edit} alt="edit" />
         </StyledButton>
         <StyledButton type="button">
            <StyledTresh src={Trash} alt="trash" />
         </StyledButton>
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
const StyledTresh = styled.img`
   width: 22px;
   height: 22px;
`
const StyledEdit = styled.img`
   width: 22px;
   height: 22px;
`
