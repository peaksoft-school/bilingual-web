import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import styled from 'styled-components'

const RadioButton = (props) => {
   const { onChange, ...otherProps } = props
   return (
      <FormControl>
         <RadioGroup aria-labelledby="" name="">
            <FormControlLabel
               value=""
               label=""
               control={<StyledRadioButton />}
               onChange={onChange}
               {...otherProps}
            />
         </RadioGroup>
      </FormControl>
   )
}

export default RadioButton
const StyledRadioButton = styled(Radio)`
   &.MuiRadio-root {
      color: #3a10e5;
   }
`
