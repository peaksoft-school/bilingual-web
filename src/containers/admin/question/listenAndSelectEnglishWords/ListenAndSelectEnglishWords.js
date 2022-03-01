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
import NotificationIconModal from '../../../../components/UI/modal/NotificationIconModal'

const ListenAndSelectEnglishWords = () => {
   const dispatch = useDispatch()
   const { title, duration, type } = useSelector((state) => state.questions)
   const navigate = useNavigate()
   const [options, setOptions] = useState([])
   const [isOpenModal, setIsOpenModal] = React.useState(false)
   const [isModal, setIsModal] = useState(false)
   const [message, setMessage] = useState('')
   const [error, setError] = useState(null)
   const [datas, setDatas] = useState('')

   const enabled = () => options.length > 0 && title.trim() && duration.trim()

   const onCloseModalHandler = () => {
      setIsModal((prevState) => !prevState)
   }
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
      try {
         const updatedOptions = await sendFilesToApi()
         const data = {
            testId: 1,
            type: transformedType,
            title,
            duration,
            options: updatedOptions,
         }
         const response = await addQuestionRequest(data)
         setDatas(response.status)
         setMessage('Question is saved')
         setIsModal(true)
         setOptions([])
         dispatch(testActions.resetQuestion())
         navigate(ROUTES.SELECT_REAL_ENGLISH_WORDS)
      } catch (error) {
         setIsModal(true)
         setMessage('Unable to save question')
         setError(error.message)
      }
   }

   return (
      <div>
         <NotificationIconModal
            open={isModal}
            onConfirm={onCloseModalHandler}
            error={error}
            success={datas}
            message={message}
         />
         <form onSubmit={selectFormHandler}>
            <StledButton
               onClick={openModalHandler}
               color="primary"
               variant="contained"
            >
               + ADD OPTIONS
            </StledButton>
            <ListenAndSelectEnglishWordsModal
               onAddOptions={addOptionsHandler}
               onClose={openModalHandler}
               open={isOpenModal}
            />
            <StyledContainer>
               {options.map((option) => {
                  return (
                     <ListenItem
                        key={option.id}
                        option={option}
                        deleteWord={deleteWord}
                        checkedHandler={checkedHandler}
                     />
                  )
               })}
            </StyledContainer>
            <StyledDivOfModalFooter>
               <StyledBtn color="primary" variant="outlined">
                  GO BACK
               </StyledBtn>

               <Button
                  disabled={!enabled()}
                  type="submit"
                  color="secondary"
                  variant="contained"
               >
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
const StyledBtn = styled(Button)`
   margin-right: 16px;
`
const StledButton = styled(Button)`
   margin: 32px 0 4px;
   float: right;
`
