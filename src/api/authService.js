import { axiosInstance } from './axiosInstance'

const signUpRequest = (signUpData) => {
   return axiosInstance.post(`user/signup`, signUpData)
}

const loginRequest = (signUpData) => {
   return axiosInstance.post(`user/login`, signUpData)
}

const authService = { signUpRequest, loginRequest }

export default authService
