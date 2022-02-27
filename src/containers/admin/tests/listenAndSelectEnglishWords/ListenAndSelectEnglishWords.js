/* eslint-disable no-await-in-loop */
import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../components/UI/button/index'
import { testActions } from '../../../../store'
import {
   addQuestionRequest,
   uploadFileRequest,
} from '../../../../api/testService'
import { ROUTES } from '../../../../utils/constants/general'
import ListenItem from './ListenItem'
import ListenAndSelectEnglishWordsModal from './ListenAndSelectEnglishWordModal'

const ListenAndSelectEnglishWords = () => {
   const dispatch = useDispatch()
   const { title, duration, type } = useSelector((state) => state.questions)
   const navigate = useNavigate()
   const [isOpenModal, setIsOpenModal] = React.useState(false)
   const [options, setOptions] = useState([])
   const transformedType = type.replace(/[\s.,%]/g, '')

   const checkedHandler = (id) => {
      const optionsWithSelected = options.map((el) => {
         if (el.id === id) {
            return {
               ...el,
               isTrue: !el.isTrue,
            }
         }
         return el
      })

      setOptions(optionsWithSelected)
   }
   const deleteWord = (id) => {
      const newWord = options.filter((item) => item.id !== id)
      setOptions(newWord)
   }

   const openModalHandler = () => {
      setIsOpenModal((prev) => !prev)
   }

   const uploadFile = async (file) => {
      try {
         const formData = new FormData()
         formData.append('file', file)
         const { data } = await uploadFileRequest(formData)
         return data
      } catch (error) {
         return null
      }
   }

   const sendFilesToApi = async () => {
      let copyOfOptions = [...options]

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < options.length; i++) {
         // 1
         const currentOption = options[i] //
         const audio = currentOption.fileName.file
         const fileNameCameFrombackend = await uploadFile(audio)

         if (fileNameCameFrombackend) {
            copyOfOptions = copyOfOptions.map((item) => {
               if (item.id === currentOption.id) {
                  return {
                     ...item,
                     fileName: fileNameCameFrombackend,
                  }
               }

               return item
            })
         }
      }

      return copyOfOptions
   }

   const addOptionsHandler = (optionData) => {
      const { enteredValue, checkbox, audio } = optionData

      setOptions((prevWords) => {
         const updateWords = [...prevWords]
         updateWords.push({
            word: enteredValue,
            isTrue: checkbox,
            fileName: audio,
            id: uuidv4(),
         })
         return updateWords
      })
   }

   const selectFormHandler = async (e) => {
      e.preventDefault()

      const updatedOptions = await sendFilesToApi()
      const data = {
         testId: 1,
         type: transformedType,
         title,
         duration,
         options: updatedOptions,
      }
      dispatch(testActions.resetQuestion())
      navigate(ROUTES.SELECT_REAL_ENGLISH_WORDS)
      setOptions([])
      addQuestionRequest(data)
   }

   return (
      <div>
         <form onSubmit={selectFormHandler}>
            <Button
               onClick={openModalHandler}
               color="primary"
               variant="contained"
               sx={{ m: '32px 0 4px', float: 'right' }}
            >
               + ADD OPTIONS
            </Button>
            <ListenAndSelectEnglishWordsModal
               onAddOptions={addOptionsHandler}
               onClose={openModalHandler}
               open={isOpenModal}
            />
            <StyledContainer>
               {options.map((option) => {
                  return (
                     <ListenItem
                        option={option}
                        deleteWord={deleteWord}
                        checkedHandler={checkedHandler}
                     />
                  )
               })}
            </StyledContainer>
            <StyledDivOfModalFooter>
               <Button color="primary" variant="outlined" sx={{ mr: '16px' }}>
                  GO BACK
               </Button>
               <Button type="submit" color="secondary" variant="contained">
                  SAVE
               </Button>
            </StyledDivOfModalFooter>
         </form>
      </div>
   )
}

export default ListenAndSelectEnglishWords

const StyledContainer = styled.ul`
   width: 100%;
   padding: 0px;
   display: flex;
   flex-wrap: wrap;
   box-sizing: border-box;
   counter-reset: my-counter;
`
const StyledDivOfModalFooter = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`
