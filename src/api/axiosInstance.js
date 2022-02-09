import axios from 'axios'

const instance = axios.create({
   baseURL: 'http://3.65.208.103/api/',
})

const signup = (signUpData) => {
   return instance.post(`user/signup`, signUpData)
}

const login = (signUpData) => {
   return instance.post(`user/login`, signUpData)
}

const axiosInstance = { signup, login }

export default axiosInstance
