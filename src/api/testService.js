import { axiosInstance } from './axiosInstance'

export const sendNewTestRequest = (newTest) => {
   return axiosInstance.post(`/`, newTest)
}

export const getTestRequest = () => {
   return axiosInstance.get('/tests')
}
export const putTestQuestionRequest = (props) => {
   const { url } = props
   return axiosInstance.put(url)
}
export const postQuestionRequest = (data) => {
   return axiosInstance.post(`files`, data)
}

export const postQuestionRequest2 = (id, data) => {
   return axiosInstance.post(`api/tests/question/${id}`, data)
}
