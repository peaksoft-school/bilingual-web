import styled from 'styled-components'
import { Button } from '@mui/material'
import { useState } from 'react'
import Input from '../../../../components/UI/input'

const StyledP = styled('p')`
   padding: 0;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 18px;
   color: #4b4759;
`

const DivImage = styled('div')`
   width: 300px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 30px;
`

const InputImage = styled(Input)`
   display: none;
`
const ButtonImage = styled(Button)`
   width: 182px;
   height: 178px;
   background-color: none;
   color: #4c4859;
   border: 1px solid #d4d0d0;
`

const InputFooter = styled(Input)`
   width: 900px;
   height: 70px;
`

const DivFooter = styled('div')`
   display: flex;
   width: 250px;
   justify-content: flex-end;
   justify-content: space-around;
   position: relative;
   left: 670px;
   top: 32px;
`

const ImageUpload = styled('img')`
   width: 182px;
   height: 178px;
   border-radius: 5%;
`

const DescribeImage = () => {
   const [image, setImage] = useState({})

   const onChangeHandler = (e) => {
      console.log(e.target.files, 'sdasd')
      setImage({
         file: e.target.files[0],
         preview: URL.createObjectURL(e.target.files[0]),
      })
   }

   return (
      <>
         <DivImage>
            <label htmlFor="contained-button-file">
               <InputImage
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={onChangeHandler}
               />
               <ButtonImage
                  variant="outlined"
                  color="secondary"
                  component="span"
               >
                  {image.preview ? (
                     <ImageUpload src={image.preview} />
                  ) : (
                     <p>Uppload image </p>
                  )}
               </ButtonImage>
            </label>
            {image ? image.file?.name : ''}
         </DivImage>
         <StyledP>Correct answer</StyledP>
         <InputFooter multiline name="correctAnswer" />
         <DivFooter>
            <Button variant="outlined">GO BACK</Button>
            <Button variant="contained" color="success">
               SAVE
            </Button>
         </DivFooter>
      </>
   )
}

export default DescribeImage
