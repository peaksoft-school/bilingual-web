import { axiosInstance } from './axiosInstance'

export const getUserTest = () => {
   return axiosInstance.get('/api/user/tests/question/4')
}
