import { axiosInstance } from './axiosInstance'

export const sendNewTestRequest = (newTest) => {
   return axiosInstance.post(`/`, newTest)
}
