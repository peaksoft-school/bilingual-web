import { axiosInstance } from './axiosInstance'

export const sendNewTestRequest = (newTest) => {
   return axiosInstance.post(`/`, newTest)
}
export const getTestsRequest = () => {
   return axiosInstance.get('/tests')
}
export const editQuestionRequest = (data) => {
   return axiosInstance.put(`api/put`, data)
}

export const addQuestionRequest = (data) => {
   return axiosInstance.post(`api/admin/tests/question`, data)
}

export const uploadFileRequest = (fileData) => {
   return axiosInstance.post(`api/files`, fileData)
}
