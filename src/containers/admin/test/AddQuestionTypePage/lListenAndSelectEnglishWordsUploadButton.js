import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Button from '../../../../UI/button/index'

const Input = styled('input')({
   display: 'none',
})

export default function UploadButtons() {
   return (
      <Stack direction="row" alignItems="center" spacing={2}>
         <label htmlFor="contained-button-file">
            <Input
               accept="image/*"
               id="contained-button-file"
               multiple
               type="file"
            />
            <Button variant="outlined" color="grey" component="span">
               <p style={{ color: 'black', margin: 0 }}>Uppload audio file</p>
            </Button>
         </label>
      </Stack>
   )
}
