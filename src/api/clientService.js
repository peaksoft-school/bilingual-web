import { axiosInstance } from './axiosInstance'

export const getUserTest = (id) => {
   return axiosInstance.get(`/api/user/tests/${id}`)
}
export const getAllTest = () => {
   return axiosInstance.get('/api/user/tests')
}

export const postUserAnswerQuestion = (testId, userId) => {
   return axiosInstance.post(`/api/user/tests/${testId}/${userId}`)
}
