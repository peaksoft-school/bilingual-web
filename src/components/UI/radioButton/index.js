import { FormControl, FormControlLabel, Radio } from '@mui/material'
import styled from 'styled-components'

const RadioButton = (props) => {
   const { onChange, value } = props
   return (
      <FormControl>
         <FormControlLabel
            value={value}
            onChange={onChange}
            label=""
            control={<StyledRadioButton />}
         />
      </FormControl>
   )
}

export default RadioButton
const StyledRadioButton = styled(Radio)`
   &.MuiRadio-root {
      color: #3a10e5;

      /* :hover {
         color: 0px 1px 2px rgba(81, 45, 224, 0.2),
            0px 1px 2px rgba(81, 45, 224, 0.2);
      } */
   }
   /* & ::before {
      color: red;
   }
   &.MuiRadio-root:active {
      color: red;
   } */
   /* ::before {
      color: #9a9a9a;
   } */
`
