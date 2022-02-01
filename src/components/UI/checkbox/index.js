import React from 'react'
import Checkbox from '@mui/material/Checkbox'

export default function ReCheckbox({ checked, onChange, ...otherProps }) {
   return (
      <div>
         <Checkbox
            checked={checked}
            onChange={onChange}
            {...otherProps}
            sx={{
               '&.Mui-checked': {
                  color: '#2AB930',
               },
            }}
         />
      </div>
   )
}
