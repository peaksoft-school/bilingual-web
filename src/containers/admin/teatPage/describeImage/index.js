import styled from 'styled-components'
import { Button } from '@mui/material'
import ContentCard from '../../../../components/UI/adminContentCard/index'
import Input from '../../../../components/UI/input'
import AppSelect from '../../../../components/UI/select/index'

const StyledP = styled.p`
   padding: 0;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 18px;
   color: #4b4759;
`
const StyledDiv = styled.div`
   width: 100%;
   display: flex;
   box-sizing: border-box;
`

const InputImage = styled(Input)`
   display: none;
`
const ButtonImage = styled(Button)`
   width: 182px;
   height: 178px;
   background-color: none;
   color: black;
   border: 1px solid black;
`

const DescribeImage = () => {
   return (
      <ContentCard>
         <StyledDiv>
            <div>
               <StyledP>Title</StyledP>
               <Input sx={{ width: '700px', mr: '18px' }} />
            </div>
            <div>
               <StyledP>Duration (in minutes)</StyledP>
               <Input />
            </div>
         </StyledDiv>
         <StyledP>Type</StyledP>
         <AppSelect
            options={[
               'Select real English words',
               'Listen and select word',
               'Type what you hear',
            ]}
         />
         <div>
            <label htmlFor="contained-button-file">
               <InputImage
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
               />
               <ButtonImage
                  variant="outlined"
                  color="secondary"
                  component="span"
               >
                  Uppload image
               </ButtonImage>
            </label>
         </div>
      </ContentCard>
   )
}

export default DescribeImage
