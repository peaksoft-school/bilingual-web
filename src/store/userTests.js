import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUserTests } from '../api/clientService'

export const allTest = createAsyncThunk('tests/allTest', async (thunkAPI) => {
   try {
      const response = await getUserTests(5)
      console.log(response.data)
      return response.data
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
   }
})

const initialState = {
   id: 0,
   active: true,
   title: 'string',
   duration: 'string',
   shortDescription: 'string',
   questions: [],
}

export const testsSlice = createSlice({
   name: 'tests',
   initialState,
   extraReducers: {
      [allTest.fulfilled]: (state, action) => {
         state.questions = action.payload
      },
      [allTest.rejected]: (state, action) => {
         state.questions = action.payload.questions
         state.title = action.payload.title
         state.duration = action.payload.duration
         state.shortDescription = action.payload.shortDescription
      },
   },
})
