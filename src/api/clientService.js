import { axiosInstance } from './axiosInstance'

export const getUserTests = (id) => {
   return axiosInstance.get(`api/user/tests/question/${id}`)
}
