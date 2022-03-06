import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth'
import questionSlice from './questions'
import { testsSlice } from './userTests'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      questions: questionSlice.reducer,
      tests: testsSlice.reducer,
   },
})

export const testsActions = testsSlice.actions
export const testActions = questionSlice.actions
export const authActions = authSlice.actions
export default store
