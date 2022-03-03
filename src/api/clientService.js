import { axiosInstance } from './axiosInstance'

export const getClientTests = () => {
   return axiosInstance.get('api/admin/tests/')
}
