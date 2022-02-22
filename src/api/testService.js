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

export const addQuestionRequest = (id, type, data) => {
   return axiosInstance.post(`api/tests/question/${id}?type=${type}`, data)
}
