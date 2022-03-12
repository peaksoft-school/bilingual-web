import { createSlice } from '@reduxjs/toolkit'
import { getTest } from './testActions'

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
   reducers: {
      clearState(state) {
         state.currentQuestion = 0
         state.questions = null
         state.active = null
         state.duration = null
         state.id = null
      },
      incrementState(state) {
         state.currentQuestion += 1
      },
   },
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
   },
})

export default testSlice
