import { axiosInstance } from './axiosInstance'

export const sendNewTestRequest = (newTest) => {
   return axiosInstance.post(`/`, newTest)
}

export const postQuestionRequest = (recordText) => {
   console.log(recordText)
   return axiosInstance.post(
      `api/tests/question/${3}?type=RECORD_SAYING_STATEMENT`,
      recordText
   )
}
