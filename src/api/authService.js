import axios from 'axios'

const instance = axios.create({
   baseURL: 'http://3.65.208.103/api/',
})

const signUpRequest = (signUpData) => {
   return instance.post(`user/signup`, signUpData)
}

const loginRequest = (signUpData) => {
   return instance.post(`user/login`, signUpData)
}

const authService = { signUpRequest, loginRequest }

export default authService
