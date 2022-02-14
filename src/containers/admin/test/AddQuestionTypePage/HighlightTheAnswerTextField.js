import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const HighlightTheAnswerTextField = ({ onChageHandler }) => {
   const handleChange = (event) => {
      onChageHandler(event.target.value)
   }

   return (
      <Box
         component="form"
         sx={{
            '& .MuiTextField-root': { width: '100%' },
         }}
         noValidate
         autoComplete="off"
      >
         <TextField
            id="outlined-name"
            multiline
            maxRows={6}
            onChange={handleChange}
         />
      </Box>
   )
}

export default HighlightTheAnswerTextField
