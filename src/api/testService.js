import { axiosInstance } from './axiosInstance'

export const sendNewTestRequest = (newTest) => {
   return axiosInstance.post(`/`, newTest)
}
export const getTestRequest = () => {
   return axiosInstance.get('/tests')
}

export const postQuestionRequest = (data) => {
   return axiosInstance.post(`api/files`, data)
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

export const getAllTestRequest = () => {
   return axiosInstance.get(`/api/admin/tests`)
}
export const deleteTestRequest = (id) => {
   return axiosInstance.delete(`/api/admin/tests/${id}`)
}
export const getTestRequestByID = (id) => {
   return axiosInstance.get(`/api/admin/tests/${id}`)
}
export const putTestRequest = (id, editedTest) => {
   return axiosInstance.put(`/api/admin/tests/${id}`, editedTest)
}
export const putTestActivationRequest = (isActiveById) => {
   const { id, isActive } = isActiveById
   console.log(isActiveById)
   return axiosInstance.put(`/api/admin/tests/block/${id}`, isActive)
}
