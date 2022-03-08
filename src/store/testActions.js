import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserTest, postUserAnswerQuestion } from '../api/clientService'

export const getTest = createAsyncThunk(
   'get/test',
   async (testId, thunkAPI) => {
      try {
         const response = await getUserTest(testId)
         const {
            duration,
            questions: updatedQuestions,
            id,
            active,
         } = response.data

         const questions = updatedQuestions.filter(
            (question) =>
               question.type === 'DESCRIBE_IMAGE' ||
               question.type === 'RESPOND_IN_AT_LEAST_N_WORDS' ||
               question.type === 'RECORD_SAYING_STATEMENT'
         )

         return { questions, id, active, duration }
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message)
      }
   }
)

export const submitQuestion = createAsyncThunk(
   'post/testId',
   async ({ testId, userId, answers }, thunkAPI) => {
      try {
         const response = await postUserAnswerQuestion(testId, userId, answers)
         return response.data
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message)
      }
   }
)
