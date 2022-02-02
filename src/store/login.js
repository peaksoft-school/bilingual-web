import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'http://3.65.208.103/'

export const fetchUserSingUp = createAsyncThunk(
   'login/fetchUserSingUp',
   async () => {
      const response = await axios
         .post(`${url}/api/signup`, {
            userName: '',
            email: '',
            password: '',
         })
         .then((data) => console.log(data))
         .catch((error) => console.log(error))
      return response
   }
)

const initLogin = {
   fullName: '',
   gmail: '',
   password: '',
   roles: '[USER_ROLE]',
}

const loginSlice = createSlice({
   name: 'login',
   initialState: initLogin,
   reducers: {
      setUser() {},
   },
   extraReducers: {},
})

export default loginSlice
