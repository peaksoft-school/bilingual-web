import { axiosInstance } from './axiosInstance'

export const getUserTest = () => {
   return axiosInstance.get('/api/user/tests')
}
