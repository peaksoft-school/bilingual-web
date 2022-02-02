import { TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const StyledTextField = makeStyles({
   root: {
      '& .MuiInputBase-root': {
         borderRadius: 8,
         marginTop: 10,
      },
   },
})
function Input(props) {
   const inputClasses = StyledTextField()
   const { placeholder, children, classes, fullWidth, ...other } = props
   return (
      <TextField
         className={inputClasses.root}
         placeholder={placeholder}
         fullWidth={fullWidth}
         classes={classes}
         {...other}
      >
         {children}
      </TextField>
   )
}
export default Input
