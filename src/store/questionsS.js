import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   title: '',
   type: '',
   duration: '',
}

const questionSlice = createSlice({
   name: 'questions',
   initialState,
   reducers: {
      setTitle(state, action) {
         state.title = action.payload
      },
      setType(state, action) {
         state.type = action.payload
      },
      setDuration(state, action) {
         state.duration = action.payload
      },
      resetQuestion() {
         return initialState
      },
   },
})

// export const { setTitle, setType, setDuration, resetQuestion } =
//    questionSlice.actions
export default questionSlice
