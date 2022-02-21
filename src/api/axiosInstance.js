import axios from 'axios'
// import { BILINGUAL_TOKEN } from '../utils/constants/general'
// import { getFromLocalStorage } from '../utils/helpers/localstorege/localStorege'

const token =
   'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2NDUyNjEwODUsImV4cCI6MTY0NTM0NzQ4NX0.Oa9ddc3dDBlQUX80nK1qQ54_HSy8Tod8Ir8KubITS_GnBqG40sbhHaMK972TDM8GHqm-U1PyaBCvjZXrlC4KGw'
const headers = {
   Authorization: `Bearer ${token}`,
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
