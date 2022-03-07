import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserTest, postUserAnswerQuestion } from '../api/clientService'

export const getTest = createAsyncThunk(
   'get/test',
   async (testId, thunkAPI) => {
      try {
         const response = await getUserTest(testId)
         const { duration, questions, id, active } = response.data

         return { questions, id, active, duration }
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message)
      }
   }
)

export const submitQuestion = createAsyncThunk(
   'post/testId',
   async ({ testId, userId }, thunkAPI) => {
      try {
         const response = await postUserAnswerQuestion(testId, userId)
         return response.data
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message)
      }
   }
)
