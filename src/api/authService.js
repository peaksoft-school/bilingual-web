import { axiosInstance } from './axiosInstance'

const signUpRequest = (signUpData) => {
   return axiosInstance.post(`signup`, signUpData)
}

const loginRequest = (signUpData) => {
   return axiosInstance.post(`login`, signUpData)
}

const authService = { signUpRequest, loginRequest }

export default authService
