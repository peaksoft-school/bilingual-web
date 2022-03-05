import { axiosInstance } from './axiosInstance'

export const getUserTest = () => {
   return axiosInstance.get('/api/user/tests/question/6')
}

export const getFiles = (fileName) => {
   return axiosInstance.get(`http://3.65.208.103/api/files/${fileName}`)
}
