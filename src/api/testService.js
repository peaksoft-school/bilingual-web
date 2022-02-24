import { axiosInstance } from './axiosInstance'

export const sendNewTestRequest = (newTest) => {
   return axiosInstance.post(`/`, newTest)
}
export const getTestRequest = () => {
   return axiosInstance.get('/tests')
}
export const editQuestionRequest = (data) => {
   return axiosInstance.put(`api/put`, data)
}

export const addQuestionRequest = (data) => {
   return axiosInstance.post(`api/admin/tests/question`, data)
}
