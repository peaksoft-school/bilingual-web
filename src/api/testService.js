import { axiosInstance } from './axiosInstance'

export const sendNewTestRequest = (newTest) => {
   return axiosInstance.post(`/`, newTest)
}

export const getTestRequest = () => {
   return axiosInstance.get(`admin/tests/${1}`)
}

export const getAllTestRequest = () => {
   return axiosInstance.get(`admin/tests`)
}
export const deleteTestRequest = (id) => {
   return axiosInstance.delete(`admin/tests/${id}`)
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

// export const putTestQuestionRequest = (toggle) => {
//    return axiosInstance.put(`/`, toggle)
// }
