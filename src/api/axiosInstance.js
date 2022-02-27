import axios from 'axios'
// import { BILINGUAL_TOKEN } from '../utils/constants/general'
// import { getFromLocalStorage } from '../utils/helpers/localstorege/localStorege'
// import { BILINGUAL_TOKEN } from '../utils/constants/general'
// import { getFromLocalStorage } from '../utils/helpers/localstorege/localStorege'

// const token = getFromLocalStorage(BILINGUAL_TOKEN)

const headers = {
   Authorization: `Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2NDU4NjYyMTIsImV4cCI6MTY1NDUwNjIxMn0.vcjLyxzBU0O38GajKL4rkGzXsXVDa3BVVOGQ0HGbBAk01al7Sl1g1He7fSyVV9LKzZON7bRFDDArT-nvQJiYSA'}`,
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
