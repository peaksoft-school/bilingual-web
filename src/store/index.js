import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth'
import questionSlice from './questionsS'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      questions: questionSlice.reducer,
   },
})

export const testActions = questionSlice.actions
export const authActions = authSlice.actions
export default store
