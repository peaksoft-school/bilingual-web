import axios from 'axios'

const API_URL = 'http://3.65.208.103'

const signup = (signUpData) => {
   return axios.post(`${API_URL}/api/signup`, signUpData)
}

const login = (signUpData) => {
   return axios.post(`${API_URL}/api/login`, signUpData)
}

const authService = { signup, login }

export default authService
