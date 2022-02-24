import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Input from '../../../../components/UI/input/index'
import Button from '../../../../components/UI/button/index'
import SelectTheMainIdeaModal from './SelectTheMainIdeaModal'
import OptionItem from './Options'
import { addQuestionRequest } from '../../../../api/testService'

const SelectTheMainIdea = () => {
   const [isOpenModal, setIsOpenModal] = React.useState(false)
   const { title, duration, type } = useSelector((state) => state.questions)

   const [options, setoptions] = React.useState([])

   const ckenckedHandler = (id) => {
      const selectValue = options.find((el) => el.id === id)
      const optionsWithSelected = options.map((el) => {
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

      setoptions(optionsWithSelected)
   }

   const deletText = (id) => {
      const newText = options.filter((item) => item.id !== id)
      setoptions(newText)
   }

   const openModalHandler = () => {
      setIsOpenModal((prev) => !prev)
   }

   const addOptionsHandler = (enteredText) => {
      const { enteredValue } = enteredText
      setoptions((prevOptions) => {
         const updateOptions = [...prevOptions]
         updateOptions.push({
            word: enteredValue,
            isTrue: true,
            fileName: '',
            id: Math.random().toString(),
         })
         return updateOptions
      })
   }

   const selectMainIdeaFormHandler = (e) => {
      e.preventDefault()
      const selectIdeaData = {
         options,
         testId: 1,
         type,
         title,
         duration,
      }
      addQuestionRequest(selectIdeaData)
   }

   return (
      <form onSubmit={selectMainIdeaFormHandler}>
         <div>
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
               {options.map((option) => {
                  return (
                     <OptionItem
                        key={option.id}
                        option={option}
                        deletText={deletText}
                        ckenckedHandler={ckenckedHandler}
                     />
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
         </div>
      </form>
   )
}

export default SelectTheMainIdea

const StyledContainer = styled.ul`
   width: 100%;
   padding: 0px;
   box-sizing: border-box;
   counter-reset: my-counter;
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
