import React from 'react'
import styled from 'styled-components'
import SwitchButton from '../../../../UI/switchButton/index'
import Edit from '../../../../../assets/icons/edit.svg'
import Trash from '../../../../../assets/icons/trash.svg'

const ListOfTests = () => {
   /* const [title, setTitle] = React.useState('usejbjkjnkjnvkjnkj')

   const titleChangeHandler = () => {
      setTitle()
   }
   const submitHnadler = (event) => {
      event.preventDefault()
   } */
   return (
      <StyledLists>
         <StyledSpan>Test number 1</StyledSpan>
         <StyledIconsDiv>
            <SwitchButton />
            <StyledEdit src={Edit} alt="edit" />
            <StyledTresh src={Trash} alt="trash" />
         </StyledIconsDiv>
      </StyledLists>
   )
}

const StyledLists = styled.li`
   width: 100%;
   height: 66px;
   margin: 16px 0px;
   padding: 20px 23px 20px 16px;
   list-style: none;
   border-radius: 8px;
   background: #ffffff;
   box-shadow: 0px 3px 14px rgba(0, 0, 0, 0.09);
   display: flex;
   justify-content: space-between;
   box-sizing: border-box;
`
const StyledIconsDiv = styled.div`
   width: 112px;
   display: flex;
   justify-content: space-between;
`
const StyledTresh = styled.img`
   margin: 0;
   fill: green;
   &:hover {
      background: yellow;
      color: red;
   }
`
const StyledEdit = styled.img`
   margin: 0;
   fill: green;
   &:hover {
      background: yellow;
      color: red;
   }
`
const StyledSpan = styled.span`
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 18px;
   color: #4c4859;
`

export default ListOfTests
