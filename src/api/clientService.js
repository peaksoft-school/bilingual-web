import { axiosInstance } from './axiosInstance'

export const getAllTest = () => {
   return axiosInstance.get('/api/user/tests')
}
