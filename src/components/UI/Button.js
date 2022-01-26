import React from 'react'
import { Button as MuiButton } from '@mui/material'
import styled from 'styled-components'

function Button(props) {
   const { children, classes, fullWidth, ...other } = props
   return (
      <StyledMuiButton fullWidth={fullWidth} classes={classes} {...other}>
         {children}
      </StyledMuiButton>
   )
}

const StyledMuiButton = styled(MuiButton)`
   &.MuiButton-root {
      box-shadow: none;
      font-family: 'DINNextRoundedLTPro-Bold';
      font-size: 14px;
      padding: 12.5px 24px;
      border-radius: 8px;
      // line-height: 16px;
   }
`

export default Button
