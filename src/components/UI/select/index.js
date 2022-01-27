import React from 'react'
import { Select, Divider } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import styled from 'styled-components'

const StyledSelect = styled(Select)`
   & .MuiModal-root {
      margin-top: 9px;
      left: -8px;
   }
`

const StyledMenuIte = styled(MenuItem)`
   color: #4c4859;
   font-size: 16px;
   line-height: 18px;
   display: flex;
   padding-bottom: 14px;
   padding-top: 14px;
   text-align: center;
   border-radius: 8px;
   &.MuiMenuItem-root:active {
      background-color: #3a10e5;
      border-radius: 8px;
      color: #fffeff;
   }
`

const StyledDivider = styled(Divider)`
   margin: auto;
   width: 868px;
   height: 0px;
`
const style = { margin: 1, width: 900 }

export default function SelectRe() {
   const [value, setValue] = React.useState('')
   const [open, setOpen] = React.useState(false)

   const handleChange = (event) => {
      setValue(event.target.value)
   }

   const handleClose = () => {
      setOpen(false)
   }

   const handleOpen = () => {
      setOpen(true)
   }

   return (
      <div>
         <FormControl sx={style}>
            <StyledSelect
               labelId="dopen-select-label"
               id="open-select"
               open={open}
               onClose={handleClose}
               onOpen={handleOpen}
               value={value}
               onChange={handleChange}
               sx={{ mb: 80 }}
               MenuProps={{ disablePortal: true }}
            >
               <StyledMenuIte value={5}>Describe image</StyledMenuIte>
               <StyledDivider />
               <StyledMenuIte value={10}>
                  Select real English words
               </StyledMenuIte>
               <StyledDivider />
               <StyledMenuIte value={20}>Listen and select word</StyledMenuIte>
               <StyledDivider />
               <StyledMenuIte value={40}>Record saying statement</StyledMenuIte>
               <StyledDivider />
               <StyledMenuIte value={50}>Describe Image</StyledMenuIte>
               <StyledDivider />
               <StyledMenuIte value={60}>
                  Respond in at least N words
               </StyledMenuIte>
               <StyledDivider />
               <StyledMenuIte value={70}>Highlight the answer</StyledMenuIte>
               <StyledDivider />
               <StyledMenuIte value={80}>Select main idea</StyledMenuIte>
               <StyledDivider />
               <StyledMenuIte value={90}>Sudmitted results page</StyledMenuIte>
            </StyledSelect>
         </FormControl>
      </div>
   )
}
