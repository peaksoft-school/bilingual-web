import { createSlice } from '@reduxjs/toolkit'
import { getTest, submitQuestion } from './testActions'

const initialState = {
   questions: [],
   currentQuestion: 0,
   active: '',
   duration: '',
   id: '',
}

const testSlice = createSlice({
   name: 'testSlise',
   initialState,
   reducers: {},
   extraReducers: {
      [getTest.rejected]: (state) => {
         state.active = false
         state.duration = null
         state.id = ''
      },
      [getTest.fulfilled]: (state, { payload }) => {
         state.questions = payload.questions
         state.active = payload.active
         state.duration = payload.duration
         state.id = payload.id
      },
      [submitQuestion.fulfilled]: (state) => {
         state.currentQuestion += 1
      },
   },
})

export default testSlice
