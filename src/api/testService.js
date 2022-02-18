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

export const postQuestionRequest = (id, type, data) => {
   return axiosInstance.post(`tests/question/${id}?type=${type}`, data)
}
