import { axiosInstance } from './axiosInstance'

export const sendNewTestRequest = (newTest) => {
   return axiosInstance.post(`/`, newTest)
}

export const getTestRequest = (props) => {
   const { url } = props
   return axiosInstance.get(url)
}

export const putTestQuestionRequest = (toggle) => {
   return axiosInstance.put(`/`, toggle)
}
