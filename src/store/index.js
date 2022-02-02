import { configureStore } from '@reduxjs/toolkit'
import { loginSlice } from './login'

const store = configureStore({
   reducer: {
      login: loginSlice.reducer,
   },
})

export const loginActions = loginSlice.actions
export default store
