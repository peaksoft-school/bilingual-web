import React from 'react'
import styled from 'styled-components'
import Input from '../../../../components/UI/input/index'
import ReCheckbox from '../../../../components/UI/checkbox/index'
import Button from '../../../../components/UI/button/index'
import Trash from '../../../../assets/icons/trash.svg'
import SelectTheMainIdeaModal from './SelectTheMainIdeaModal'
import Layout from '../../../../components/UI/adminContentCard/index'

const SelectTheMainIdea = () => {
   const [isOpenModal, setIsOpenModal] = React.useState(false)

   const [words, setWordS] = React.useState([])

   const ckenckedHandler = (id) => {
      const selectValue = words.find((el) => el.id === id)
      const optionsWithSelected = words.map((el) => {
         if (el.id === selectValue.id) {
            return {
               ...selectValue,
               isChecked: !selectValue.isChecked,
            }
         }
         return {
            ...el,
         }
      })

      setWordS(optionsWithSelected)
   }

   const deletText = (id) => {
      const newText = words.filter((item) => item.id !== id)
      setWordS(newText)
   }

   const openModalHandler = () => {
      setIsOpenModal((prev) => !prev)
   }

   const addOptionsHandler = (enteredText) => {
      const { enteredValue, checkbox } = enteredText
      setWordS((prevOptions) => {
         const updateOptions = [...prevOptions]
         updateOptions.push({
            word: enteredValue,
            isChecked: checkbox,
            isTrue: true,
            id: Math.random().toString(),
         })
         return updateOptions
      })
   }

   return (
      <div>
         <Layout>
            <StyledP>Passage</StyledP>
            <Input multiline sx={{ width: '100%' }} />
            <Button
               onClick={openModalHandler}
               color="primary"
               variant="contained"
               sx={{ m: '32px 0 22px', float: 'right' }}
            >
               + ADD OPTIONS
            </Button>
            <SelectTheMainIdeaModal
               onAddOptions={addOptionsHandler}
               onClose={openModalHandler}
               open={isOpenModal}
            />

            <StyledContainer>
               {words.map((option) => {
                  return (
                     <Box key={option.id}>
                        <span style={{ width: '770px' }}>{option.word}</span>
                        <StyledDivIcons>
                           <ReCheckbox
                              checked={option.isChecked}
                              onChange={() => ckenckedHandler(option.id)}
                           />
                           <StyledTrash
                              onClick={() => deletText(option.id)}
                              src={Trash}
                              alt="trash"
                           />
                        </StyledDivIcons>
                     </Box>
                  )
               })}
            </StyledContainer>
            <StyledDivOfFooter>
               <Button color="primary" variant="outlined" sx={{ mr: '16px' }}>
                  GO BACK
               </Button>
               <Button type="submit" color="secondary" variant="contained">
                  SAVE
               </Button>
            </StyledDivOfFooter>
         </Layout>
      </div>
   )
}

export default SelectTheMainIdea

const StyledContainer = styled.ul`
   width: 100%;
   padding: 0px;
   box-sizing: border-box;
   counter-reset: my-counter;
`

const Box = styled.li`
   width: 100%;
   min-height: 46px;
   margin-top: 18px;
   padding: 14px 16px;
   background: #ffffff;
   border: 1.53px solid #d4d0d0;
   box-sizing: border-box;
   border-radius: 8px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   &::before {
      content: counter(my-counter);
      counter-increment: my-counter;
      width: 25px;
   }
`
const StyledDivIcons = styled.div`
   width: 70px;
   display: flex;
   justify-content: space-between;
`
const StyledTrash = styled.img`
   width: 23px;
   height: 22px;
   margin-top: 9px;
`
const StyledDivOfFooter = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`
const StyledP = styled.p`
   padding: 0;
   font-family: 'DINNextRoundedLTW01-Regular';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 18px;
   color: #4b4759;
`