import React from 'react'
import { Button as MuiButton } from '@mui/material'
import styled from 'styled-components'

const StyledMuiButton = styled(MuiButton)`
   &.MuiButton-root {
      box-shadow: none;
      font-family: 'DINNextRoundedLTPro-Bold';
      font-size: 14px;
      font-weight: 'bold';
      border-width: 2.5px;
      padding: 12.5px 24px;
      &:hover {
         background-color: none;
      }
   }
`

function Button(props) {
   const { children, classes, fullWidth, ...other } = props
   return (
      <StyledMuiButton fullWidth={fullWidth} classes={classes} {...other}>
         {children}
      </StyledMuiButton>
   )
}

export default Button
