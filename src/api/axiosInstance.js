import axios from 'axios'
// import { BILINGUAL_TOKEN } from '../utils/constants/general'
// import { getFromLocalStorage } from '../utils/helpers/localstorege/localStorege'

// const token = getFromLocalStorage(BILINGUAL_TOKEN)

const headers = {
   Authorization: `Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2NDUyNTA4NzIsImV4cCI6MTY0NTMzNzI3Mn0.cg_NAdsF8Kux8CtM4reELrCPm_ZtYw8kc0zrrZLXc4nCtJnmjuWIBQczqAr4N1dRnOeP7mbMeAGTiINB0PHRIQ'}`,
}

export const axiosInstance = axios.create({
   baseURL: 'http://3.65.208.103/',
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
