import axios from 'axios'
// import { BILINGUAL_TOKEN } from '../utils/constants/general'
// import { getFromLocalStorage } from '../utils/helpers/localstorege/localStorege'
// const token = getFromLocalStorage(BILINGUAL_TOKEN)
const headers = {
   Authorization: `Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2NDU0NDI4NzEsImV4cCI6MTY0NTUyOTI3MX0.Bo1WRmDwci4_zQTzORWI8rKDvRQA_FQg8U2SaJwCOrPNW6py8Sf5IGFNzt8QQvKvkYFziDXQTK2Kb3vPrWjQvw'}`,
}
export const axiosInstance = axios.create({
   baseURL: 'http://3.65.208.103/api/',
})
axiosInstance.interceptors.request.use(
   async (config) => {
      // eslint-disable-next-line no-param-reassign
      config.headers = headers
      return config
   },
   (error) => {
      Promise.reject(error)
   }
)
