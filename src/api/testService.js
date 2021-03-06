import { axiosInstance } from './axiosInstance'

export const sendNewTestRequest = (newTest) => {
   return axiosInstance.post(`/api/admin/tests`, newTest)
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
export const getTestByIdRequest = (id) => {
   return axiosInstance.get(`/api/admin/tests/${id}`)
}
export const putTestRequest = (id, editedTest) => {
   return axiosInstance.put(`/api/admin/tests/${id}`, editedTest)
}
export const putTestActivationRequest = (isActiveById) => {
   const { id, isActive } = isActiveById
   return axiosInstance.put(`/api/admin/tests/block/${id}`, isActive)
}
export const deleteQuestionByIdRequest = (id) => {
   return axiosInstance.delete(`/api/admin/tests/question/${id}`)
}
export const putQuestionActivationRequest = (isActivatedById) => {
   const { id, isActivee } = isActivatedById
   return axiosInstance.put(`/api/admin/tests/question/block/${id}`, isActivee)
}
export const getQuestionByIdRequest = (id) => {
   return axiosInstance.get(`/api/admin/tests/question/${id}`)
}
export const putQuestionRequest = (id, data) => {
   return axiosInstance.put(`/api/admin/tests/question/${id}`, data)
}

export const getFileRequest = (fileName) => {
   return axiosInstance.get(`api/files/${fileName}`)
}

export const getAllUsersRequest = () => {
   return axiosInstance.get(`api/admin/answer`)
}
export const deleteUserRequest = (id) => {
   return axiosInstance.delete(`/api/admin/${id}`)
}

export const getUserTestAnswerRequest = (testId) => {
   return axiosInstance.get(`api/admin/answer/${testId}`)
}
export const getUserTestAnswerQuestionRequest = (questionId) => {
   return axiosInstance.get(`api/admin/answer/question/${questionId}`)
}

export const postUserQuestionScoreRequest = (questionId, score) => {
   console.log(score, 'testService')
   return axiosInstance.post(`api/admin/answer/question/${questionId}`, score)
}
