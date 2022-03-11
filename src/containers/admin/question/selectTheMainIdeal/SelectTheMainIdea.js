import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Input from '../../../../components/UI/input/index'
import Button from '../../../../components/UI/button/index'
import loading from '../../../../assets/icons/refresh.png'
import SelectTheMainIdeaModal from './SelectTheMainIdeaModal'
import OptionItem from './Options'
import {
   addQuestionRequest,
   putQuestionRequest,
} from '../../../../api/testService'
import { testActions } from '../../../../store'
import NotificationIconModal from '../../../../components/UI/modal/NotificationIconModal'
import { ROUTES } from '../../../../utils/constants/general'

const SelectTheMainIdea = () => {
   const navigate = useNavigate()
   const params = useParams()
   const { testById } = params

   const { title, duration, type, testId, optionss, questionByIdd } =
      useSelector((state) => state.questions)

   const [isOpenModal, setIsOpenModal] = React.useState(false)
   const transformedType = type.replace(/[\s.,%]/g, '')
   const [words, setWords] = React.useState([])
   const [passage, setPassage] = useState('')
   const [isLoading, setIsLoading] = useState(false)

   const dispatch = useDispatch()
   React.useEffect(() => {
      if (questionByIdd) {
         setWords(optionss.options)
         setPassage(optionss.passage)
      }
   }, [])

   const enabled = () => {
      return (
         words.length > 0 && title.trim() && duration.trim() && passage.trim()
      )
   }

   const checkedandler = (id) => {
      const optionsWithSelected = words.map((el) => {
         if (el.id === id) {
            return {
               ...el,
               correct: !el.correct,
            }
         }
         return el
      })

      setWords(optionsWithSelected)
   }

   const onChangePassage = (e) => {
      setPassage(e.target.value)
   }

   const deletText = (id) => {
      const newText = words.filter((item) => item.id !== id)
      setWords(newText)
   }

   const openModalHandler = () => {
      setIsOpenModal((prev) => !prev)
   }

   const addOptionsHandler = (enteredText) => {
      const { enteredValue, isChecked } = enteredText
      setWords((prevOptions) => {
         const updateOptions = [...prevOptions]
         updateOptions.push({
            word: enteredValue,
            correct: isChecked,
            id: uuidv4(),
         })
         return updateOptions
      })
   }

   const [formValue, setFormValue] = useState('')
   const [message, setMessage] = useState('')
   const [isModal, setIsModal] = useState(false)
   const [error, setError] = useState(null)

   const clearSelectMAinIdeaState = () => {
      setPassage('')
      setWords([])
   }

   const selectMainIdeaFormHandler = async (e) => {
      e.preventDefault()
      try {
         if (!questionByIdd) {
            setIsLoading(true)

            const selectIdeaData = {
               words,
               testId: +testId,
               type: transformedType,
               title,
               duration,
               passage,
            }
            const responseResult = await addQuestionRequest(selectIdeaData)
            setFormValue(responseResult.status)
         }
         if (questionByIdd) {
            setIsLoading(true)

            const selectIdeaData = {
               words,
               testId: +testById,
               type: transformedType,
               title,
               duration,
               passage,
            }
            const responseResult = await putQuestionRequest(
               questionByIdd,
               selectIdeaData
            )
            setFormValue(responseResult.status)
         }
         setMessage('Question is saved')
         setIsModal(true)
         setIsLoading(false)
      } catch (error) {
         setIsModal(true)
         setMessage('Unable to save question')
         setError(error.message)
      }
   }
   const onCloseModal = () => {
      if (questionByIdd) {
         navigate(`${ROUTES.ADD_TEST_PAGE}/${testById}`)
      }
      if (!questionByIdd) {
         navigate(`${ROUTES.ADD_TEST_PAGE}/${testId}`)
      }
      dispatch(testActions.resetQuestion())
      clearSelectMAinIdeaState()
      setIsModal((prev) => !prev)
   }

   const onGoBackHandler = () => {
      dispatch(testActions.resetQuestion())
      clearSelectMAinIdeaState()
      navigate(-2)
   }

   return (
      <form onSubmit={selectMainIdeaFormHandler}>
         <NotificationIconModal
            open={isModal}
            onConfirm={onCloseModal}
            error={error}
            success={formValue}
            message={message}
         />
         <div>
            <StyledP>Passage</StyledP>
            <InputPassage
               value={passage}
               onChange={onChangePassage}
               multiline
            />
            <ButtonADDOptions
               onClick={openModalHandler}
               color="primary"
               variant="contained"
            >
               + ADD OPTIONS
            </ButtonADDOptions>
            <SelectTheMainIdeaModal
               onAddOptions={addOptionsHandler}
               onClose={openModalHandler}
               open={isOpenModal}
            />
            <StyledContainer>
               {words.map((option) => {
                  return (
                     <OptionItem
                        key={option.id}
                        option={option}
                        deletText={deletText}
                        checkedandler={checkedandler}
                     />
                  )
               })}
            </StyledContainer>
            <StyledDivOfFooter>
               <ButtonGoBack
                  onClick={onGoBackHandler}
                  color="primary"
                  variant="outlined"
               >
                  GO BACK
               </ButtonGoBack>
               <Button
                  disabled={!enabled()}
                  type="submit"
                  color="secondary"
                  variant="contained"
               >
                  {!isLoading ? (
                     <span>SAVE</span>
                  ) : (
                     <Styledloading src={loading} alt="loading" />
                  )}
               </Button>
            </StyledDivOfFooter>
         </div>
      </form>
   )
}

export default SelectTheMainIdea

const InputPassage = styled(Input)`
   width: 100;
`

const ButtonADDOptions = styled(Button)`
   margin: 32px 0 22px;
   float: right;
`

const StyledContainer = styled('ul')`
   width: 100%;
   padding: 0px;
   box-sizing: border-box;
   counter-reset: my-counter;
`

const StyledDivOfFooter = styled('div')`
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

const ButtonGoBack = styled(Button)`
   margin-right: 16px;
`
const Styledloading = styled.img`
   width: 20px;
   height: 20px;
   animation-name: rotate;
   animation-duration: 3s;
   animation-iteration-count: infinite;
   animation-timing-function: linear;
   @keyframes rotate {
      from {
         transform: rotate(360deg);
      }
      to {
         transform: rotate(-360deg);
      }
   }
`
