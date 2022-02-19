import { axiosInstance } from './axiosInstance'

const signUpRequest = (signUpData) => {
   return axiosInstance.post(`api/signup`, signUpData)
}

const loginRequest = (signUpData) => {
   return axiosInstance.post(`api/login`, signUpData)
}

const authService = { signUpRequest, loginRequest }

export default authService
