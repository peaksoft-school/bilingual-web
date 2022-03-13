import { axiosInstance } from './axiosInstance'

export const getUserTest = (id) => {
   return axiosInstance.get(`/api/user/tests/${id}`)
}
export const getAllTest = () => {
   return axiosInstance.get('/api/user/tests')
}

export const postUserAnswerQuestion = (testId) => {
   return axiosInstance.post(`/api/user/tests/${testId}`)
}

export const postUserTest = (answers) => {
   return axiosInstance.post(`/api/user/tests/question`, answers)
}
